import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformsDropdown = ({
  onSelectedPlatform,
  selectedPlatformId,
}: Props) => {
  const { data, error } = usePlatforms();

  const selectedPlatform = usePlatform(selectedPlatformId);

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
        {data?.results.map((platform) => (
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
