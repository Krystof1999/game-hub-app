import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";
import { BiMoon } from "@react-icons/all-files/bi/BiMoon";
import { FiSun } from "@react-icons/all-files/fi/FiSun";
import { useRef, useState } from "react";
import useGameQueryStore from "../store";
import CustomSwitch from "./CustomSwitch";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  const ref = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <Link to={"/"}>
        <div className="w-16 h-16">
          <img src="/src/assets/logo.webp" alt="navbar-logo" className=" " />
        </div>
      </Link>
      <div className="flex-grow bg-custom-light-black rounded-full p-1">
        <form
          className="flex w-full items-center"
          onSubmit={(e) => {
            e.preventDefault();
            if (ref.current) {
              setSearchText(ref.current.value);
              navigate("/");
            }
          }}
        >
          <AiOutlineSearch color="white" size="23px" />
          <input
            ref={ref}
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
