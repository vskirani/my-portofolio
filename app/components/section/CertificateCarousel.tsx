"use client";

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { certificates } from "@/src/generated/prisma/client";

type CertificateCarouselProps = {
    certificates: certificates[];
};

export default function CertificateCarousel({
    certificates,
}: CertificateCarouselProps) {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !containerRef.current) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const x = e.touches[0].pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const scrollTo = (direction: "left" | "right") => {
        if (!containerRef.current) return;
        const scrollAmount = 320;
        containerRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        });
    };

    return (
        <>
            {/* Navigation Buttons */}
            <div className="flex justify-end gap-2 mb-6">
                <button
                    onClick={() => scrollTo("left")}
                    className="w-10 h-10 bg-white border border-pink-100 rounded-full flex items-center justify-center text-gray-600 hover:text-[#ec4899] hover:border-[#ec4899] transition-all shadow-sm hover:shadow-md"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <button
                    onClick={() => scrollTo("right")}
                    className="w-10 h-10 bg-white border border-pink-100 rounded-full flex items-center justify-center text-gray-600 hover:text-[#ec4899] hover:border-[#ec4899] transition-all shadow-sm hover:shadow-md"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>

            {/* Certificates Carousel */}
            <div
                ref={containerRef}
                className={`flex gap-6 overflow-x-auto pb-4 scroll-smooth ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {certificates.map((cert) => (
                    <div
                        key={cert.id}
                        className="group shrink-0 w-72 bg-white border border-pink-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 select-none"
                    >
                        {/* Certificate Image */}
                        <div className="relative h-40 overflow-hidden bg-pink-50">
                            <img
                                src={cert.image_url}
                                alt={cert.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 pointer-events-none"
                                draggable={false}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Certificate Info */}
                        <div className="p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-medium text-[#ec4899] bg-pink-50 px-2 py-1 rounded-full">
                                    {cert.year}
                                </span>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2 group-hover:text-[#ec4899] transition-colors">
                                {cert.title}
                            </h3>
                            <p className="text-sm text-gray-500 mb-4">
                                {cert.description}
                            </p>

                            <a
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-[#ec4899] hover:text-pink-600 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <span>View Credential</span>
                                <svg
                                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Drag Hint */}
            <p className="text-center text-xs text-gray-400 mt-4">
                ← Geser untuk melihat lebih banyak →
            </p>
        </>
    );
}
