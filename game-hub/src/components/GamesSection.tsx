import useGames from "../hooks/useGames";
import GameBox from "./GameBox";

const GamesSection = () => {
  const { data } = useGames();

  return (
    <div className="grid grid-cols-4">
      {data.map((game) => (
        <GameBox key={game.name} game={game} />
      ))}
    </div>
  );
};

export default GamesSection;
