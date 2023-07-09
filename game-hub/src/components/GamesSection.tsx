import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameBox from "./GameBox";
import GameBoxSkeleton from "./GameBoxSkeleton";

//TODO - Fix the bug

interface Props {
  gameQuery: GameQuery;
}

const GamesSection = ({ gameQuery }: Props) => {
  const { data, isLoading } = useGames(gameQuery);
  console.log(isLoading);

  return (
    <>
      <div className="grid grid-cols-4">
        {!isLoading
          ? data?.results.map((game) => <GameBox key={game.name} game={game} />)
          : data?.results.map((game) => <GameBoxSkeleton key={game.name} />)}
      </div>
    </>
  );
};

export default GamesSection;
