import { useState } from "react";
import Aside from "./components/Aside";
import GamesSection from "./components/GamesSection";
import HeaderSectoin from "./components/HeaderSectoin";
import NavBar from "./components/NavBar";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
import { Order } from "./components/OrderDropdown";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  search: string | null;
  ordering: Order | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="grid-container">
      <div className="navbar">
        <NavBar
          onSearch={(searchValue) =>
            setGameQuery({ ...gameQuery, search: searchValue })
          }
        />
      </div>
      <div className="aside">
        <Aside
          onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </div>
      <div className="header-section">
        <HeaderSectoin
          platform={gameQuery.platform}
          onSelectedPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
          onSelectedOrder={(order) =>
            setGameQuery({ ...gameQuery, ordering: order })
          }
        />
      </div>
      <div className="games-section">
        <GamesSection gameQuery={gameQuery} />
      </div>
    </div>
  );
}

export default App;
