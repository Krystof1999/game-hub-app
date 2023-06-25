import { useState } from "react";
import Aside from "./components/Aside";
import GamesSection from "./components/GamesSection";
import HeaderSectoin from "./components/HeaderSectoin";
import NavBar from "./components/NavBar";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
import GameBoxSkeleton from "./components/GameBoxSkeleton";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  search: string | null;
  ordering: string;
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
          selectedPlatform={gameQuery.platform}
          onSelectedPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
          onSelectedOrder={(order) =>
            setGameQuery({ ...gameQuery, ordering: order })
          }
          selectedOrder={gameQuery.ordering}
        />
      </div>
      <div className="games-section">
        <GamesSection gameQuery={gameQuery} />
      </div>
    </div>
  );
}

export default App;
