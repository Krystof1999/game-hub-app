import { useState } from "react";
import Aside from "./components/Aside";
import GamesSection from "./components/GamesSection";
import HeaderSectoin from "./components/HeaderSectoin";
import NavBar from "./components/NavBar";

// undefined: the absence of a value
// null: the intenational absence of a value
export interface GameQuery {
  genreId?: number;
  platformId?: number;
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
          onSelectedGenre={(genre) =>
            setGameQuery({ ...gameQuery, genreId: genre.id })
          }
        />
      </div>
      <div className="header-section">
        <HeaderSectoin
          selectedPlatformId={gameQuery.platformId}
          onSelectedPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platformId: platform.id })
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
