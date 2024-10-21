import "./App.css";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="container">
      <AboutMe />
      <NavBar />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
