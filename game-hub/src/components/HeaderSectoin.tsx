import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import PlatformsDropdown from "./PlatformsDropdown";

const HeaderSectoin = () => {
  return (
    <div className="text-white bg-custom-black pt-4">
      <h1 className="font-bold text-[40px]">Games</h1>
      <div className="flex">
        <PlatformsDropdown />
      </div>
    </div>
  );
};

export default HeaderSectoin;
