import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";

interface Props {
  onSelectedOrder: (order: string) => void;
  selectedOrder: string;
}

const OrderDropdown = ({ onSelectedOrder, selectedOrder }: Props) => {
  const sortOrder = [
    { querry: "name", label: "Name" },
    { querry: "-released", label: "Released" },
    { querry: "-rating", label: "Rating" },
    { querry: "-added", label: "Date added" },
    { querry: "-metacritic", label: "Popularity" },
  ];

  const currentOrder = sortOrder.find(
    (order) => order.querry === selectedOrder
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
            onClick={() => onSelectedOrder(order.querry)}
          >
            {order.label}
          </MenuItem>
        ))}
      </div>
    </Menu>
  );
};

export default OrderDropdown;
