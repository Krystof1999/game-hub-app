import Aside from "../components/Aside";
import GamesSection from "../components/GamesSection";
import HeaderSectoin from "../components/HeaderSectoin";

const HomePage = () => {
  return (
    <div className="grid-container">
      <div className="aside">
        <Aside />
      </div>
      <div className="header-section">
        <HeaderSectoin />
      </div>
      <div className="games-section">
        <GamesSection />
      </div>
    </div>
  );
};

export default HomePage;
