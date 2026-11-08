import Hero from "./components/section/Hero";
import About from "./components/section/About";
import Projects from "./components/section/Project";
import Certificate from "./components/section/Certificate";
import Skill from "./components/section/Skill";
import Contact from "./components/section/Contact";

// Data is read from the VPS database at request time. Keeping the page dynamic
// also lets CI build the Docker image without access to that database.
export const dynamic = "force-dynamic";

export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Projects />
            <Certificate />
            <Skill />

        </div>
    );
}
