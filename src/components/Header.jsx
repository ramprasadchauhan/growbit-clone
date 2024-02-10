import { Link } from "react-router-dom";
import logoDark from "../assets/image/logo-dark.png";

const Header = () => {
  return (
    <div className="flex justify-around bg-slate-100 py-4 items-center text-bold text-xl sticky top-0 opacity-90">
      <div>
        <ul className="flex gap-6">
          <li className="hover:text-blue-400 transition duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-blue-400 transition duration-200">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-blue-400 transition duration-200">
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to="/">
          <img src={logoDark} alt="logo-dark" />
        </Link>
      </div>
      <div>
        <ul className="flex gap-6">
          <li className="hover:text-blue-400 transition duration-200">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-blue-400 transition duration-200">
            <Link to="/contect">Contact</Link>
          </li>
          <li className="hover:text-blue-400 transition duration-200">
            <Link to="/career">Career</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
