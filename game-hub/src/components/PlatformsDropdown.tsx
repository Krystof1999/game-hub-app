import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import usePlatforms from "../hooks/usePlatforms";

const PlatformsDropdown = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu
      menuButton={
        <MenuButton className="flex place-items-end bg-custom-light-black p-2 rounded-md">
          Platforms
          <MdKeyboardArrowDown size="18px" />
        </MenuButton>
      }
      transition
    >
      <div className="text-white">
        {/* <MenuItem
      value="Cut"
      onClick={(e) => console.log(`[MenuItem] ${e.value} clicked`)}
    >
      Cut
    </MenuItem> */}

        {data.map((platform) => (
          <MenuItem key={platform.id} onClick={() => console.log(platform)}>
            {platform.name}
          </MenuItem>
        ))}
      </div>
    </Menu>
  );
};

export default PlatformsDropdown;
