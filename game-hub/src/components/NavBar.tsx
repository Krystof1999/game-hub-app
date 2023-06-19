import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import CustomSwitch from "./CustomSwitch";
import { FiSun } from "@react-icons/all-files/fi/FiSun";
import { BiMoon } from "@react-icons/all-files/bi/BiMoon";
import { useState } from "react";

const NavBar = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <div className="w-16 h-16">
        <img src="/src/assets/logo.webp" alt="navbar-logo" className=" " />
      </div>
      <div className="flex-grow bg-custom-light-black rounded-full p-1">
        <form className="flex w-full items-center">
          <AiOutlineSearch color="white" size="23px" />
          <input
            type="text"
            placeholder="Search games..."
            className="w-full bg-custom-light-black border-0 outline-none text-white"
          />
        </form>
      </div>
      <div className="flex">
        <CustomSwitch checked={checked} setChecked={setChecked} />
        <div className="mr-[5px] ml-[5px]">
          {checked ? (
            <BiMoon size="25px" color="white" />
          ) : (
            <FiSun size="25px" color="white" />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
