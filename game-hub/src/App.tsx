import { useState } from "react";
import Aside from "./components/Aside";
import GamesSection from "./components/GamesSection";
import HeaderSectoin from "./components/HeaderSectoin";
import NavBar from "./components/NavBar";
import { Genre } from "./hooks/useGenres";

export interface GameQuery {
  genre: Genre | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="grid-container">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="aside">
        <Aside
          onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </div>
      <div className="header-section">
        <HeaderSectoin />
      </div>
      <div className="games-section">
        <GamesSection gameQuery={gameQuery} />
      </div>
    </div>
  );
}

export default App;
