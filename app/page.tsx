import Image from "next/image";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Hero from "./components/section/Hero";
export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdf2f8] text-gray-800">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
