import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./pages/Hero/Hero";
import AboutMe from "./pages/AboutMe/AboutMe";
import ProjectShowcase from "./pages/ProjectShowcase/ProjectShowcase";
import Skills from "./pages/Skills/Skills";
import "./style/App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <ProjectShowcase />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
