import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Main/Hero/Hero";
import AboutMe from "./components/Main/AboutMe/AboutMe";
import ProjectShowcase from "./components/Main/ProjectShowcase/ProjectShowcase";
import "./components/Style/App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <ProjectShowcase />
      <Footer />
    </>
  );
}

export default App;
