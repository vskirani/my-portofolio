'use client';

import CircularGallery from "../CircularGallery";

export default function GallerySection() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-pink-50">
            <div className="max-w-6xl mx-auto px-6 mb-10">
                {/* Section Header */}
                <div className="flex items-center gap-4 mb-6">
                    <span className="flex items-center justify-center w-10 h-10 text-xs font-semibold text-[#ec4899] bg-pink-50 border border-pink-100 rounded-xl">
                        02
                    </span>
                    <span className="w-10 h-px bg-gradient-to-r from-[#ec4899] to-transparent" />
                    <span className="text-xs font-medium uppercase tracking-widest text-gray-500">Gallery</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800">My Work</h2>
            </div>

            <div className="h-[400px] sm:h-[500px] relative">
                <CircularGallery
                    items={[
                        {
                            src: "/foto1.JPG",
                            alt: "Project 1",
                        },
                        {
                            src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
                            alt: "Project 2",
                        },
                        {
                            src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
                            alt: "Project 3",
                        },
                        {
                            src: "https://images.unsplash.com/photo-1555099962-4199c345e5dd",
                            alt: "Project 4",
                        },
                        {
                            src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
                            alt: "Project 5",
                        },
                        {
                            src: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
                            alt: "Project 6",
                        },
                    ]}
                    bend={2}
                    borderRadius={0.1}
                    scrollSpeed={1}
                />
            </div>
        </section>
    );
}
