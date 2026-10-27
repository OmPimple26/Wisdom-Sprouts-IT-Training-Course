import "./Navbar.css";
import { FaHome, FaWpexplorer } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { MdConnectWithoutContact } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/"><FaHome />Home</Link></li>
        <li><Link to="/explore"><FaWpexplorer />Explore</Link></li>
        <li><Link to="/about"><FcAbout />About Us</Link></li>
        <li><Link to="/contact"><MdConnectWithoutContact />Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
