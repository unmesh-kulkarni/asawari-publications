"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const galleryImages = Array.from(
  { length: 26 },
  (_, i) => `/images/library/lib (${i + 1}).webp`
);

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        setSelectedIndex(null);
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev === galleryImages.length - 1 ? 0 : prev + 1
        );
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev === 0 ? galleryImages.length - 1 : prev - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-2">Our Gallery</h1>
        <p className="text-center text-gray-500 mb-8">
          Take a look inside Asawari Prakashan bookstore and experience
          highlights from our events and memorable occasions.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {galleryImages.map((src, idx) => (
            <div
              key={idx}
              className="relative aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer group transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
              onClick={() => setSelectedIndex(idx)}
            >
              {/* Blurred background */}
              {/* <Image
                src={src}
                alt=""
                fill
                className="object-cover blur-lg scale-110 opacity-40"
              /> */}
              {/* Actual image */}
              <Image
                src={src}
                alt={`Gallery ${idx + 1}`}
                fill
                className="object-contain p-2 relative z-10"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="relative w-[90%] h-[90%] max-w-5xl"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <Image
              src={galleryImages[selectedIndex]}
              alt={`Selected ${selectedIndex + 1}`}
              fill
              className="object-contain"
            />

            {/* Close button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 bg-white/80 text-black px-3 py-1 rounded-full shadow-md hover:bg-white"
            >
              ✕
            </button>

            {/* Prev button */}
            <button
              onClick={() =>
                setSelectedIndex(
                  selectedIndex === 0
                    ? galleryImages.length - 1
                    : selectedIndex - 1
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-black px-3 py-1 rounded-full shadow-md hover:bg-white"
            >
              ←
            </button>

            {/* Next button */}
            <button
              onClick={() =>
                setSelectedIndex(
                  selectedIndex === galleryImages.length - 1
                    ? 0
                    : selectedIndex + 1
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-black px-3 py-1 rounded-full shadow-md hover:bg-white"
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
