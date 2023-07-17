import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import { Platform } from "../hooks/usePlatforms";
import OrderDropdown from "./OrderDropdown";
import PlatformsDropdown from "./PlatformsDropdown";

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
  const selectedPlatform = usePlatform(selectedPlatformId);
  const selectedGenre = useGenre(selectedGenreId);

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
