import useGenres from "../hooks/useGenres";

const Aside = () => {
  const { genres } = useGenres();

  return (
    <div className="pl-4 bg-custom-black text-white pr-14">
      <h1 className=" text-[25px] font-semibold mb-4">Genres</h1>
      {genres.map((genre) => (
        <ul className="flex items-center mb-4" key={genre.id}>
          <img
            src={genre.image_background}
            className="rounded-md w-10 h-10 object-cover"
          />

          <p className="pl-3">{genre.name}</p>
        </ul>
      ))}
    </div>
  );
};

export default Aside;
