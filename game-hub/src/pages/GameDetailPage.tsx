import { useParams } from "react-router-dom";
import ExapndableText from "../components/ExapndableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTriler from "../components/GameTriler";
import Screenshots from "../components/Screenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return "Loading...";
  if (error || !game) return;

  return (
    <div className="text-white p-2 ">
      <h1 className="font-bold text-4xl">{game.name}</h1>
      <ExapndableText>{game.description_raw}</ExapndableText>
      <GameAttributes game={game} />
      <GameTriler gameId={game.id} />
      <Screenshots gameId={game.id} />
    </div>
  );
};

export default GameDetailPage;
