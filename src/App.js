import "./App.css";
import { useState } from "react";
import Projects from "./components/Projects";
// import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isDarkMode ? "bg-dark text-light" : "bg-light text-dark"}>
      <AboutMe />
      {/* <NavBar /> */}
      <NavBar2 toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Footer />
    </div>
  );
}

export default App;
