import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameBox from "./GameBox";
import GameBoxSkeleton from "./GameBoxSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GamesSection = ({ gameQuery }: Props) => {
  const { data, isLoading } = useGames(gameQuery);

  return (
    <>
      <div className="grid grid-cols-4">
        {!isLoading
          ? data.map((game) => <GameBox key={game.name} game={game} />)
          : data.map((game) => <GameBoxSkeleton key={game.name} />)}
      </div>
    </>
  );
};

export default GamesSection;
