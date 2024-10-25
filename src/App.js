import "./App.css";
import Projects from "./components/Projects";
// import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <AboutMe />
      {/* <NavBar /> */}
      <NavBar2 />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
