import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Testimonials from "./Components/Testimonials/Testimonials";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
//import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Education />
      {/* <Projects /> */}
      <Testimonials />
      <Contact />

      <Footer />
    </>
  );
}

export default App;
