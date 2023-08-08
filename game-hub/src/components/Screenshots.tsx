import useScreenshot from "../hooks/useScreenshot";

interface Props {
  gameId: number;
}

const Screenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshot(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <div className="grid md:grid-cols-2 gap-2">
      {data?.results.map((res) => (
        <img key={res.id} src={res.image} />
      ))}
    </div>
  );
};

export default Screenshots;
