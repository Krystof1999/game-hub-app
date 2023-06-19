import Aside from "./components/Aside";
import HeaderSectoin from "./components/HeaderSectoin";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="grid-container">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="aside">
        <Aside />
      </div>
      <div className="header-section">
        <HeaderSectoin />
      </div>
      <div className="games-section">GamesSection</div>
    </div>
  );
}

export default App;
