import logo from "../images/logo.png";
import { useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function NavBar2({ isDarkMode, toggleDarkMode }) {
  const [activeNav, setActiveNav] = useState(null);

  const openPageLinks = (e) => {
    e.preventDefault();
    setActiveNav((prev) => (prev === "pageLinks" ? null : "pageLinks"));
  };

  const openContactLinks = (e) => {
    e.preventDefault();
    setActiveNav((prev) => (prev === "contactLinks" ? null : "contactLinks"));
  };

  const navBarStyle = {
    backgroundColor: activeNav ? "rgba(181,230,235, 0.92)" : "transparent",
    zIndex: activeNav ? "1000" : "0",
  };

  return (
    <nav className="navbar" style={navBarStyle}>
      <div className="container-fluid p-3 d-flex justify-content-between align-items-center">
        <div className="navbar-brand" onClick={openContactLinks}>
          {activeNav === "contactLinks" ? (
            <div
              className="contact-icon border rounded-circle d-flex justify-content-center align-items-center bg-white"
              style={{ width: "50px", height: "50px" }}
            >
              <i className="bi bi-x close-icon"></i>
            </div>
          ) : (
            <img
              src={logo}
              alt="contact logo"
              width="50"
              height="50"
              className="border rounded-circle logo"
            />
          )}
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center me-3 dark-mode-icon">
            {activeNav && isDarkMode ? (
              <button
                className="btn btn-dark bg-transparent dark-mode-icon"
                onClick={toggleDarkMode}
              >
                <MdOutlineDarkMode size={24} />
              </button>
            ) : (
              activeNav && (
                <button
                  className="btn btn-light bg-transparent dark-mode-icon"
                  onClick={toggleDarkMode}
                >
                  <MdOutlineLightMode size={24} />
                </button>
              )
            )}
          </div>
          <button
            className="navbar-toggler"
            type="button"
            onClick={openPageLinks}
          >
            <span>
              {activeNav === "pageLinks" ? (
                <i className="bi bi-x close-icon custom-icon-size"></i>
              ) : (
                <i className="bi bi-list list-icon custom-icon-size"></i>
              )}
            </span>
          </button>
        </div>
      </div>
      <div
        className={`navbar-collapse ${activeNav ? "show" : ""}`}
        id="navbarNav"
      >
        {activeNav === "pageLinks" && (
          <ul className="navbar-nav nav-page nav-style fs-1">
            <li className="nav-item">
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
        )}
        {activeNav === "contactLinks" && (
          <ul className="navbar-nav nav-contact nav-style fs-1">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Email
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                GitHub
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
