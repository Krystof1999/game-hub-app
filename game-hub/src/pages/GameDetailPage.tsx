import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExapndableText from "../components/ExapndableText";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return "Loading...";
  if (error || !game) return;
  return (
    <div className="text-white p-5">
      <h1 className="font-bold text-4xl">{game.name}</h1>
      <ExapndableText>{game.description_raw}</ExapndableText>
    </div>
  );
};

export default GameDetailPage;
