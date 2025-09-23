"use client";
import Image from "next/image";

const galleryImages = [
  "/images/library/1.jpg",
  "/images/library/2.jpg",
  "/images/library/3.jpg",
  "/images/library/4.jpg",
  "/images/library/5.jpg",
  "/images/library/6.jpg",
  "/images/library/7.jpg",
  "/images/library/8.jpg",
  "/images/library/9.jpg",
  "/images/library/10.jpg",
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-2">Our Gallery</h1>
        <p className="text-center text-gray-500 mb-8">
          Take a peek inside our bookstore and explore moments from our events
          and celebrations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {galleryImages.map((src, idx) => (
            <div
              key={idx}
              className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={src}
                alt={`Gallery ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>  
          ))}
        </div>
      </div>
    </div>
  );
}
