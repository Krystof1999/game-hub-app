import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformsDropdown = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu
      menuButton={
        <MenuButton className="flex place-items-end bg-custom-light-black p-2 rounded-md mr-2">
          {selectedPlatform?.name || "Platforms"}
          <MdKeyboardArrowDown size="18px" />
        </MenuButton>
      }
      transition
    >
      <div className="text-white">
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </div>
    </Menu>
  );
};

export default PlatformsDropdown;
