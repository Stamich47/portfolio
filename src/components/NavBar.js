import logo from "../images/logo.png";
import { useState } from "react";

export default function NavBar() {
  const [activeNav, setActiveNav] = useState(null);

  const handleButtonClick = () => {
    setActiveNav((prev) => (prev === "pageLinks" ? null : "pageLinks"));
  };

  const handleBrandClick = () => {
    setActiveNav((prev) => (prev === "contactLinks" ? null : "contactLinks"));
  };

  const handleCloseNav = () => {
    setActiveNav(null);
  };

  const navbarStyle = {
    backgroundColor: activeNav ? "rgba(181,230,235, 0.92)" : "transparent",
  };

  const pageLinkStyle = {
    display: activeNav === "pageLinks" ? "flex" : "none",
  };

  const contactLinkStyle = {
    display: activeNav === "contactLinks" ? "flex" : "none",
  };

  return (
    <nav className="navbar" style={navbarStyle}>
      <div className="container-fluid px-3 py-3">
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
            {activeNav ? (
              <i className="bi bi-x close-icon custom-icon-size"></i>
            ) : (
              <i className="bi bi-list list-icon custom-icon-size"></i>
            )}
          </span>
        </button>
        <div
          className={`collapse navbar-collapse ${activeNav ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul
            onClick={handleCloseNav}
            className="navbar-nav nav-style fs-1 section-nav"
            style={pageLinkStyle}
          >
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
