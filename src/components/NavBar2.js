import logo from "../images/logo.png";
import { useState } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function NavBar2({ isDarkMode, toggleDarkMode }) {
  const [activeNav, setActiveNav] = useState(null);
  const [showResumeLinks, setShowResumeLinks] = useState(false);

  const openPageLinks = (e) => {
    e.preventDefault();
    setActiveNav((prev) => (prev === "pageLinks" ? null : "pageLinks"));
  };

  const openContactLinks = (e) => {
    e.preventDefault();
    setActiveNav((prev) => (prev === "contactLinks" ? null : "contactLinks"));
    setShowResumeLinks(false);
  };

  const pageLinks = [
    { name: "About Me", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const contactLinks = [
    { name: "Email", link: "mailto:mjstanford615@gmail.com" },
    {
      name: "GitHub",
      link: "https://github.com/Stamich47",
      target: "_blank",
      rel: "noreferrer",
    },
    {
      name: "Resume",
      link: null,
      onResumeClick: () => setShowResumeLinks(true),
    },
  ];

  const navBarStyle = {
    backgroundColor: activeNav
      ? isDarkMode
        ? "rgba(31, 30, 30, 0.93)"
        : "rgba(100, 122, 124, 0.92)"
      : "transparent",
    zIndex: activeNav ? "1000" : "0",
  };

  const textStyle = {
    color: isDarkMode ? "white" : "black",
    cursor: "pointer",
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
            {pageLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <a
                  className="nav-link"
                  href={link.link}
                  style={textStyle}
                  onClick={() => setActiveNav(null)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        )}

        {activeNav === "contactLinks" && (
          <ul className="navbar-nav nav-contact nav-style fs-1">
            {contactLinks.map((link, index) => (
              <li className="nav-item" key={index}>
                <a
                  className="nav-link"
                  href={link.link}
                  style={textStyle}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={link.onMouseEnter}
                  onClick={(e) => {
                    if (link.onResumeClick) {
                      link.onResumeClick(e);
                    } else {
                      setActiveNav(null);
                    }
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              {showResumeLinks && (
                <div className="resume-links">
                  <a
                    className="nav-link resume-link"
                    href="https://drive.google.com/file/d/1"
                    style={textStyle}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Online
                  </a>
                  <span>|</span>
                  <a
                    className="nav-link res"
                    href="https://drive.google.com/uc?export=download&id=1"
                    style={textStyle}
                  >
                    Download
                  </a>
                </div>
              )}
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
