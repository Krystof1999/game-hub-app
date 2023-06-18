import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="w-16 h-16">
        <img src="/src/assets/logo.webp" alt="navbar-logo" className=" " />
      </div>
      <div className="flex-grow bg-blue-200 rounded-full p-1">
        <form className="flex w-full items-center">
          <AiOutlineSearch color="white" size="23px" />
          <input
            type="text"
            className="w-full bg-blue-200 border-0 outline-none"
          />
        </form>
      </div>
      <div className="flex">
        <p>Switch</p>
        <p>Dark mode</p>
      </div>
    </div>
  );
};

export default NavBar;
