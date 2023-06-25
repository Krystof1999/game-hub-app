import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import PlatformsDropdown from "./PlatformsDropdown";
import { Platform } from "../hooks/usePlatforms";
import OrderDropdown, { Order } from "./OrderDropdown";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  platform: Platform | null;
  onSelectedOrder: (order: Order) => void;
}

const HeaderSectoin = ({
  onSelectedPlatform,
  platform,
  onSelectedOrder,
}: Props) => {
  return (
    <div className="text-white bg-custom-black pt-4">
      <h1 className="font-bold text-[40px]">Games</h1>
      <div className="flex mb-4">
        <PlatformsDropdown
          platform={platform}
          onSelectedPlatform={onSelectedPlatform}
        />
        <OrderDropdown onSelectedOrder={onSelectedOrder} />
      </div>
    </div>
  );
};

export default HeaderSectoin;
