import { NavLink } from "react-router-dom";
import Logo from "../../assets/Union (2).svg"
const Header = () => {
  return (
    <div className="bg-black text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Logo"
            className="w-10 h-10"
          />
          <h2 className="text-2xl font-bold">Snapgram</h2>
        </div>
        <nav className="flex gap-6">
          <NavLink
            to="/"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="/singUp"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/login"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Login
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            About
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
