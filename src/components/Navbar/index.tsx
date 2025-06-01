import LogoBlack from "../../assets/logo_black.svg";

const Navbar = () => {
  return (
    <nav className="p-4 static top-0 w-full">
      <div className="w-full mx-auto flex justify-center items-center space-x-6">
        <div className="text-white font-bold text-xl">
          <img src={LogoBlack} alt="logo" className="h-12" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
