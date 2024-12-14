import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import "./App.css";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contacts/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Contact/>
      <SocialLinks />
    </>
  );
}

export default App;
