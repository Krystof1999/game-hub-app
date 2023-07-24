import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";
import useGameQueryStore from "../store";

const OrderDropdown = () => {
  const sortOrder = [
    { querry: "name", label: "Name" },
    { querry: "-released", label: "Released" },
    { querry: "-rating", label: "Rating" },
    { querry: "-added", label: "Date added" },
    { querry: "-metacritic", label: "Popularity" },
  ];

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const currentOrder = sortOrder.find(
    (order) => order.querry === selectedSortOrder
  );

  return (
    <Menu
      menuButton={
        <MenuButton className="flex place-items-end bg-custom-light-black p-2 rounded-md">
          Order by: {currentOrder?.label || ""}
          <MdKeyboardArrowDown size="18px" />
        </MenuButton>
      }
      transition
    >
      <div className="text-white">
        {sortOrder.map((order) => (
          <MenuItem
            key={order.label}
            onClick={() => setSortOrder(order.querry)}
          >
            {order.label}
          </MenuItem>
        ))}
      </div>
    </Menu>
  );
};

export default OrderDropdown;
