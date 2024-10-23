import logo from "../images/logo.png";
import { useState } from "react";

export default function NavBar() {
  const [background, setBackground] = useState(false);
  const [togglePageLinks, setTogglePageLinks] = useState(true);
  const [toggleContactLinks, setToggleContactLinks] = useState(false);
  const [toggleicon, setToggleIcon] = useState(false);

  const handleButtonClick = () => {
    setBackground(!background);
    setTogglePageLinks(true);
    setToggleContactLinks(false);
  };

  const handleBrandClick = () => {
    setBackground(!background);
    setTogglePageLinks(false);
    setToggleContactLinks(true);
  };

  const pageLinkStyle = {
    display: togglePageLinks ? "flex" : "none",
  };

  const navbarStyle = {
    backgroundColor: background ? "rgba(181,230,235, 0.92)" : "transparent",
  };

  const contactLinkStyle = {
    display: toggleContactLinks ? "flex" : "none",
  };

  return (
    <nav className="navbar">
      <div className="container-fluid px-3 py-3" style={navbarStyle}>
        <a
          onClick={handleBrandClick}
          className="navbar-brand navbar-toggler"
          href="#about"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
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
          <span>
            {background ? (
              <i className="bi bi-x close-icon custom-icon-size"></i>
            ) : (
              <i className="bi bi-list list-icon custom-icon-size"></i>
            )}
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav nav-style fs-1 section-nav "
            style={pageLinkStyle}
          >
            <h1 className="pb-4">Page Links</h1>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Me
              </a>
            </li>
            <li className="nav-item section-nav">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item section-nav">
              <a className="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item section-nav">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <ul
            className="navbar-nav nav-style fs-1 contact-nav"
            style={contactLinkStyle}
          >
            <h1 className="pb-4">Contact Me</h1>
            <li className="nav-item contact-nav">
              <a className="nav-link" href="mailto:mjstanford615@gmail.com">
                Email
              </a>
            </li>
            <li className="nav-item contact-nav">
              <a
                className="nav-link"
                href="https://github.com/Stamich47"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
