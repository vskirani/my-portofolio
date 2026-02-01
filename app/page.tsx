import Image from "next/image";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Hero from "./components/section/Hero";
import About from "./components/section/About";
import Projects from "./components/section/Project";
import Certificate from "./components/section/Certificate";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdf2f8] text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificate />
      <Footer />
    </div>
  );
}
