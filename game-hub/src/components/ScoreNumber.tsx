interface Props {
  score: number;
}

const ScoreNumber = ({ score }: Props) => {
  const backgroundColor = score > 75 ? "green" : score > 65 ? "yellow" : "";
  return (
    <div className={`p-1 rounded-md mr-2 bg-${backgroundColor}-700`}>
      <p className={`font-semibold text-${backgroundColor}-400`}>{score}</p>
    </div>
  );
};

export default ScoreNumber;
