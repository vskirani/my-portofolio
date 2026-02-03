import Hero from "./components/section/Hero";
import About from "./components/section/About";
import Projects from "./components/section/Project";
import Certificate from "./components/section/Certificate";
import Skill from "./components/section/Skill";
import Contact from "./components/section/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Certificate />
      <Skill />
      <Contact />
    </div>
  );
}
