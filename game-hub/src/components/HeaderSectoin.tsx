import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import PlatformsDropdown from "./PlatformsDropdown";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import OrderDropdown from "./OrderDropdown";
import useGenres from "../hooks/useGenres";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
  onSelectedOrder: (order: string) => void;
  selectedOrder: string;
  selectedGenreId?: number;
}

const HeaderSectoin = ({
  onSelectedPlatform,
  selectedPlatformId,
  onSelectedOrder,
  selectedOrder,
  selectedGenreId,
}: Props) => {
  const { data: platforms } = usePlatforms();
  const { data: genres } = useGenres();

  const selectedPlatform = platforms?.results.find(
    (p) => p.id === selectedPlatformId
  );

  const selectedGenre = genres.results.find((g) => g.id === selectedGenreId);

  const heading = `${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return (
    <div className="text-white bg-custom-black pt-4">
      <h1 className="font-bold text-[40px]">{heading}</h1>
      <div className="flex mb-4">
        <PlatformsDropdown
          selectedPlatformId={selectedPlatformId}
          onSelectedPlatform={onSelectedPlatform}
        />
        <OrderDropdown
          onSelectedOrder={onSelectedOrder}
          selectedOrder={selectedOrder}
        />
      </div>
    </div>
  );
};

export default HeaderSectoin;
