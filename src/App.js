import "./App.css";
import { useEffect, useState } from "react";
import Projects from "./components/Projects";
// import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      localStorage.setItem("isDarkMode", JSON.stringify(!prevMode));
      return !prevMode;
    });
  };

  useEffect(() => {
    const isDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));
    if (isDarkMode) {
      setIsDarkMode(isDarkMode);
    }
  }, []);

  return (
    <div className={isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}>
      <AboutMe />
      {/* <NavBar /> */}
      <NavBar2 toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
