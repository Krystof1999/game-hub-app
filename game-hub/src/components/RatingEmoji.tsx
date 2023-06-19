interface Props {
  rating: number;
}

const RatingEmoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: string]: any } = {
    3: { src: "/src/assets/meh.webp", alt: "meh", width: "25px" },
    4: {
      src: "/src/assets/thumbs-up.webp",
      alt: "thumbsUp",
      width: "25px",
    },
    5: {
      src: "/src/assets/bulls-eye.webp",
      alt: "bullsEye",
      width: "35px",
    },
  };

  return (
    <div>
      <img {...emojiMap[rating]} />
    </div>
  );
};

export default RatingEmoji;
