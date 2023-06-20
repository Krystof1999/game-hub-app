import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";

const HeaderSectoin = () => {
  return (
    <div className="text-white bg-custom-black pt-4">
      <h1 className="font-bold text-[40px]">Games</h1>
      <div className="flex">
        <div>
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
              <MenuItem
                value="Cut"
                onClick={(e) => console.log(`[MenuItem] ${e.value} clicked`)}
              >
                Cut
              </MenuItem>
              <MenuItem>Copy</MenuItem>
              <MenuItem>Paste</MenuItem>
            </div>
          </Menu>
        </div>
        {/* <div>
          <Menu menuButton={<MenuButton>Menu2</MenuButton>} transition>
            <MenuItem
              value="Cut"
              onClick={(e) => console.log(`[MenuItem] ${e.value} clicked`)}
            >
              Cut
            </MenuItem>
            <MenuItem>Copy</MenuItem>
          </Menu>
        </div> */}
      </div>
    </div>
  );
};

export default HeaderSectoin;
