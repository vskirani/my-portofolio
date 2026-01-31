"use client";

import { useState, useEffect } from "react";

type NavLink = {
    name: string;
    href: string;
};

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links: NavLink[] = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];
    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : ''
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16 sm:h-20">
                {/* Logo */}
                <a href="#home" className="text-lg text-gray-800 font-medium tracking-tight">
                    Kirani<span className="text-[#ec4899]">.</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm text-gray-500 hover:text-[#ec4899] transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* CV */}
                <a
                    href="#contact"
                    className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-[#ec4899] text-white rounded-full hover:bg-[#ec4899] transition-all hover:-translate-y-0.5 shadow-lg shadow-pink-200"
                >
                    Download CV
                </a>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    aria-label="Menu"
                >
                    <span className={`w-5 h-0.5 bg-gray-800 transition-all ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`w-5 h-0.5 bg-gray-800 transition-all ${isMobileOpen ? 'opacity-0' : ''}`} />
                    <span className={`w-5 h-0.5 bg-gray-800 transition-all ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-pink-100 transition-all duration-300 overflow-hidden ${isMobileOpen ? "max-h-[420px] shadow-lg" : "max-h-0"
                    }`}
            >
                <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-3">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 hover:bg-pink-50 hover:text-[#ec4899] transition-all font-medium"
                            onClick={() => setIsMobileOpen(false)}
                        >
                            {link.name}
                            <span className="text-pink-400">→</span>
                        </a>
                    ))}

                    <div className="pt-4 border-t border-pink-100">
                        <a
                            href="#contact"
                            className="flex items-center justify-center w-full gap-2 px-6 py-3 text-sm font-semibold bg-[#ec4899] text-white rounded-full shadow-lg shadow-pink-200 active:scale-95 transition"
                            onClick={() => setIsMobileOpen(false)}
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>

        </nav>
    );
}