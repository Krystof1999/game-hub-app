import useGames from "../hooks/useGames";
import GameBox from "./GameBox";

const GamesSection = () => {
  const { games } = useGames();

  console.log(games);

  return (
    <div className="grid grid-cols-4">
      {games.map((game) => (
        <GameBox key={game.name} game={game} />
      ))}
    </div>
  );
};

export default GamesSection;
