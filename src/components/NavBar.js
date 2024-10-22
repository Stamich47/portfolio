import logo from "../images/logo.png";
import { useState } from "react";

export default function NavBar() {
  const [background, setBackground] = useState(false);

  const handleButtonClick = () => {
    setBackground(!background);
  };

  const navbarStyle = {
    backgroundColor: background ? "rgba(218, 218, 218, 0.9)" : "transparent",
  };

  return (
    <nav className="navbar">
      <div className="container-fluid px-3 py-3" style={navbarStyle}>
        <a className="navbar-brand" href="#about">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <button
          onClick={handleButtonClick}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav nav-style fs-1">
            <li className="nav-item ">
              <a className="nav-link" href="#about">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
