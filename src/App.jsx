import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./pages/Hero/Hero";
import AboutMe from "./pages/AboutMe/AboutMe";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/contact";
import "./style/App.css";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Contact />
      {/* <Footer /> */}
    </>
  );
}

export default App;
