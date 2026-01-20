import Hero from "../components/Hero";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";


const Home = () => {
  return (
    <>
      <Hero />
      <Skills/>
      <Projects/>
      <Contact/>
    </>
  );
};

export default Home;
