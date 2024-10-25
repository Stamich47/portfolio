import logo from "../images/logo.png";
import { useState } from "react";

export default function NavBar2() {
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
    zIndex: 100,
  };

  return (
    <nav className="navbar" style={navBarStyle}>
      <div className="container-fluid">
        <div className="navbar-brand" onClick={openContactLinks}>
          <img
            src={logo}
            alt="contact logo"
            width="50"
            height="50"
            className="border rounded-circle"
          />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          onClick={openPageLinks}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse" id="navbarNav">
          {activeNav === "pageLinks" && (
            <ul className="navbar-nav nav-page">
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
            <ul className="navbar-nav nav-contact">
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
      </div>
    </nav>
  );
}
