import "./App.css";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="container">
      <AboutMe />
      <NavBar />
      <Projects />
    </div>
  );
}

export default App;
