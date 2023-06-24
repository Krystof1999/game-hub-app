import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import PlatformsDropdown from "./PlatformsDropdown";
import { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
}

const HeaderSectoin = ({ onSelectedPlatform }: Props) => {
  return (
    <div className="text-white bg-custom-black pt-4">
      <h1 className="font-bold text-[40px]">Games</h1>
      <div className="flex mb-4">
        <PlatformsDropdown onSelectedPlatform={onSelectedPlatform} />
      </div>
    </div>
  );
};

export default HeaderSectoin;
