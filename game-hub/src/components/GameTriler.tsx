import useTrailers from "../hooks/useTrailers";

interface Props {
  gameId: number;
}

const GameTriler = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const firstThriler = data?.results[0];

  return firstThriler ? (
    <video
      src={firstThriler.data[480]}
      poster={firstThriler.preview}
      controls
    ></video>
  ) : null;
};

export default GameTriler;
