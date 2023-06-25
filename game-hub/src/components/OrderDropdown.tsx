import { MdKeyboardArrowDown } from "@react-icons/all-files/md/MdKeyboardArrowDown";
import { Menu, MenuButton, MenuItem } from "@szhsin/react-menu";

export interface Order {
  querry: string;
  label: string;
}

interface Props {
  onSelectedOrder: (order: Order) => void;
}

const OrderDropdown = ({ onSelectedOrder }: Props) => {
  const sortOrder = [
    { querry: "name", label: "Name" },
    { querry: "-released", label: "Released" },
    { querry: "-rating", label: "Rating" },
    { querry: "-added", label: "Date added" },
    { querry: "-metacritic", label: "Popularity" },
  ];
  return (
    <Menu
      menuButton={
        <MenuButton className="flex place-items-end bg-custom-light-black p-2 rounded-md">
          Name
          <MdKeyboardArrowDown size="18px" />
        </MenuButton>
      }
      transition
    >
      <div className="text-white">
        {sortOrder.map((order) => (
          <MenuItem key={order.label} onClick={() => onSelectedOrder(order)}>
            {order.label}
          </MenuItem>
        ))}
      </div>
    </Menu>
  );
};

export default OrderDropdown;
