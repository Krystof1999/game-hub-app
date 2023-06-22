import useGames from "../hooks/useGames";
import GameBox from "./GameBox";

const GamesSection = ({ gameQuery }) => {
  const { data } = useGames(gameQuery); // Todo - give a gameQuery object

  return (
    <div className="grid grid-cols-4">
      {data.map((game) => (
        <GameBox key={game.name} game={game} />
      ))}
    </div>
  );
};

export default GamesSection;
