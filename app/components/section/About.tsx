"use client"

import { useState, useEffect } from 'react';
import CircularGallery from '../CircularGallery';

export default function About() {
    const roles = ['Frontend Developer', 'UI/UX Designer'];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (displayText.length < currentRole.length) {
                    setDisplayText(currentRole.slice(0, displayText.length + 1));
                } else {
                    // Wait before deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting
                if (displayText.length > 0) {
                    setDisplayText(displayText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRoleIndex]);

    return (
        <section id="about" className="py-20 lg:py-32 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-10">
                    <span className="flex items-center justify-center w-10 h-10 text-xs font-semibold text-[#ec4899] bg-pink-50 border border-pink-100 rounded-xl">
                        01
                    </span>
                    <span className="w-10 h-px bg-gradient-to-r from-[#ec4899] to-transparent" />
                    <span className="text-xs font-medium uppercase tracking-widest text-gray-500">About</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Gambar */}
                    <div className="h-[350px] sm:h-[400px] lg:h-[500px] w-full order-1 rounded-2xl overflow-hidden">
                        <CircularGallery
                            items={[
                                { src: "/foto.png", alt: "Coding" },
                                { src: "/foto.png", alt: "Dashboard" },
                                { src: "/foto.png", alt: "Laptop" },
                                { src: "/foto.png", alt: "Design" },
                                { src: "/foto.png", alt: "Code" },
                                { src: "/foto.png", alt: "Mobile" },
                            ]}
                            bend={2}
                            borderRadius={0.15}
                            scrollSpeed={1}
                        />
                    </div>

                    {/* Content (Mobile)*/}
                    <div className="space-y-6 order-2">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-gray-800">
                            I'm a{' '}
                            <span className="text-[#ec4899]">
                                {displayText}
                                <span className="animate-pulse">|</span>
                            </span>
                            <br />
                            <span className="text-gray-600">Designing interfaces, developing experiences</span>
                        </h2>

                        <div className="space-y-4">
                            <p className="text-gray-600 text-lg">
                                Halo! Aku Vitri Septia Kirani, seorang Frontend Developer dan UI/UX Designer yang tertarik membangun pengalaman digital yang nyaman dan mudah digunakan.
                            </p>
                            <p className="text-gray-500">
                                Saat ini aku aktif merancang tampilan yang user-friendly lalu mengubahnya menjadi website responsif menggunakan teknologi frontend modern. Melalui berbagai project freelance dan kampus, aku sudah mengerjakan aplikasi nyata mulai dari sistem bisnis, platform edukasi, hingga aplikasi berbasis AI.
                            </p>
                        </div>

                        {/* Info */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Email</p>
                                    <p className="text-sm text-gray-700">kvitriseptia@email.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-pink-50 border border-pink-100 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-[#ec4899]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Location</p>
                                    <p className="text-sm text-gray-700">Yogyakarta</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center">
                                    <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Status</p>
                                    <p className="text-sm text-green-500">Open to work</p>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3 pt-4">
                            <div className="bg-pink-50 border border-pink-100 rounded-2xl p-4 text-center">
                                <p className="text-2xl font-semibold text-gray-800">2+</p>
                                <p className="text-xs text-gray-500 mt-1">Years Exp.</p>
                            </div>
                            <div className="bg-pink-50 border border-pink-100 rounded-2xl p-4 text-center">
                                <p className="text-2xl font-semibold text-gray-800">15+</p>
                                <p className="text-xs text-gray-500 mt-1">Projects</p>
                            </div>
                            <div className="bg-pink-50 border border-pink-100 rounded-2xl p-4 text-center">
                                <p className="text-2xl font-semibold text-[#ec4899]">∞</p>
                                <p className="text-xs text-gray-500 mt-1">Coffee ☕</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
