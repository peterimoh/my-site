import React from "react";
import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
// icons
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Navbar({ darkTheme, setDarkTheme }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={logo1} alt="nav-logo" className="logo" />
        </div>
        <div className="nav-links">
          <ul className="nav-link">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">contact me</a>
            </li>
          </ul>
        </div>
        <div className="nav-controls">
          <div className="toggle">
            <button
              className="toggle-btn"
              onClick={() => setDarkTheme((prevTheme) => !prevTheme)}
            >
              {darkTheme ? <WbSunnyIcon /> : <Brightness3Icon />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
