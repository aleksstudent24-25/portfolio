import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import Hero from "./pages/Hero/Hero";
import AboutMe from "./pages/AboutMe/AboutMe";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import ProjectShowcase from "./pages/ProjectShowcase/ProjectShowcase";
import "./style/App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <ProjectShowcase/>
      <Skills />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

export default App;
