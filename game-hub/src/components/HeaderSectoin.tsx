import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";
import OrderDropdown from "./OrderDropdown";
import PlatformsDropdown from "./PlatformsDropdown";

const HeaderSectoin = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <div className="text-white bg-custom-black pt-4">
      <h1 className="font-bold text-[40px]">{heading}</h1>
      <div className="flex mb-4">
        <PlatformsDropdown />
        <OrderDropdown />
      </div>
    </div>
  );
};

export default HeaderSectoin;
