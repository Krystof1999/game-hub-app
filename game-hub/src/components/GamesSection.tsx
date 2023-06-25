import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameBox from "./GameBox";

interface Props {
  gameQuery: GameQuery;
}

const GamesSection = ({ gameQuery }: Props) => {
  const { data } = useGames(gameQuery);

  return (
    <div className="grid grid-cols-4">
      {data.map((game) => (
        <GameBox key={game.name} game={game} />
      ))}
    </div>
  );
};

export default GamesSection;
