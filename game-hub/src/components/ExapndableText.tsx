import { useState } from "react";

interface Props {
  children: string;
}

const ExapndableText = ({ children }: Props) => {
  const [showMore, setShowMore] = useState(false);

  if (!children) return null;

  return (
    <div className="text-white p-5">
      <p>
        {showMore ? children : children.substring(0, 300) + "..."}
        <button
          className="bg-yellow-200 rounded-md px-2 text-black"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      </p>
    </div>
  );
};

export default ExapndableText;
