const NavBar = () => {
  return (
    <div className="flex justify-between">
      <div className="w-16 h-16">
        <img src="/src/assets/logo.webp" alt="navbar-logo" className=" " />
      </div>
      <div>
        <form>
          <input type="text" className="" />
        </form>
      </div>
      <div>
        <p>Switch</p>
        <p>Dark mode</p>
      </div>
    </div>
  );
};

export default NavBar;
