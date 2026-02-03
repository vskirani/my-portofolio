'use client';

import { useRef, useEffect, useState } from 'react';

interface GalleryItem {
    src: string;
    alt: string;
    title?: string;
}

interface CircularGalleryProps {
    items: GalleryItem[];
    bend?: number;
    textColor?: string;
    borderRadius?: number;
    font?: string;
    scrollSpeed?: number;
    scrollEase?: number;
}

export default function CircularGallery({
    items,
    bend = 3,
    borderRadius = 0.05,
    scrollSpeed = 2,
}: CircularGalleryProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [rotation, setRotation] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const lastX = useRef(0);

    const itemCount = items.length;
    const angleStep = 360 / itemCount;

    useEffect(() => {
        let animationId: number;

        const animate = () => {
            if (!isDragging) {
                setRotation(prev => prev + 0.2 * scrollSpeed);
            }
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, [isDragging, scrollSpeed]);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        lastX.current = e.clientX;
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const deltaX = e.clientX - lastX.current;
        setRotation(prev => prev + deltaX * 0.5);
        lastX.current = e.clientX;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        lastX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const deltaX = e.touches[0].clientX - lastX.current;
        setRotation(prev => prev + deltaX * 0.5);
        lastX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <div
            ref={containerRef}
            className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing flex items-center justify-center"
            style={{ perspective: '1000px' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div
                className="relative w-full h-full"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: `rotateY(${rotation}deg)`,
                    transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                }}
            >
                {items.map((item, index) => {
                    const angle = angleStep * index;
                    const radius = 250 + bend * 50;

                    return (
                        <div
                            key={index}
                            className="absolute top-1/2 left-1/2 w-48 sm:w-64 -translate-x-1/2 -translate-y-1/2"
                            style={{
                                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                backfaceVisibility: 'hidden',
                            }}
                        >
                            <div className="relative">
                                <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="w-full h-32 sm:h-44 object-cover shadow-xl rounded-2xl"
                                    draggable={false}
                                />
                                {/* Caption */}
                                <div className="mt-3 text-center">
                                    <p className="text-sm sm:text-base font-medium text-gray-700 truncate">
                                        {item.title || item.alt}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
