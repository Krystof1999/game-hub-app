import useGames from "../hooks/useGames";
import GameBox from "./GameBox";

const GamesSection = () => {
  const { games } = useGames();

  return (
    <div className="grid grid-cols-4">
      {games.map((game) => (
        <GameBox game={game} />
      ))}
    </div>
  );
};

export default GamesSection;
