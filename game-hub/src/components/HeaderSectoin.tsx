import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const HeaderSectoin = () => {
  return (
    <div>
      <h1>Games</h1>
      <div className="flex">
        <div>
          <Menu menuButton={<MenuButton>Menu1</MenuButton>} transition>
            <MenuItem
              value="Cut"
              onClick={(e) => console.log(`[MenuItem] ${e.value} clicked`)}
            >
              Cut
            </MenuItem>
            <MenuItem>Copy</MenuItem>
            <MenuItem>Paste</MenuItem>
          </Menu>
        </div>
        <div>
          <Menu menuButton={<MenuButton>Menu2</MenuButton>} transition>
            <MenuItem
              value="Cut"
              onClick={(e) => console.log(`[MenuItem] ${e.value} clicked`)}
            >
              Cut
            </MenuItem>
            <MenuItem>Copy</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default HeaderSectoin;
