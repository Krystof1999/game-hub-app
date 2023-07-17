import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import PlatformsDropdown from "./PlatformsDropdown";
import { Platform } from "../hooks/usePlatforms";
import OrderDropdown from "./OrderDropdown";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
  onSelectedOrder: (order: string) => void;
  selectedOrder: string;
}

const HeaderSectoin = ({
  onSelectedPlatform,
  selectedPlatformId,
  onSelectedOrder,
  selectedOrder,
}: Props) => {
  return (
    <div className="text-white bg-custom-black pt-4">
      <h1 className="font-bold text-[40px]">Games</h1>
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
