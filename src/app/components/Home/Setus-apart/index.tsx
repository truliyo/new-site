import React from "react";

const FEATURES = [
  {
    imageUrl: "/images/setus-appart/set-us-1-ezgif.com-resize.webp",
    title: "100% Transparency With Real-Time Dashboards",
  },
  {
    imageUrl: "/images/setus-appart/set-us-2-ezgif.com-jpg-to-webp-converter.jpg",
    title: "Client-First Account Management",
  },
  {
    imageUrl: "/images/setus-appart/one-stop.webp",
    title: "One Stop Solution",
  },
  {
    imageUrl: "/images/setus-appart/ROI-1.webp",
    title: "ROI-Obsessed Growth Strategies",
  }
];

export default function WhatSetsUsApart() {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center text-gray-900 mb-20">
          What Set Us Apart
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
          {FEATURES.map(({ imageUrl, title }, idx) => (
            <div
              key={idx}
              className="relative w-full max-w-xs h-[400px] rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
            >
              {/* Image - grayscale by default, full color on hover */}
              <img
                src={imageUrl}
                alt={title}
                className="object-cover w-full h-full transition-all duration-500 ease-in-out filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                loading="lazy"
              />

              {/* Text overlay - white text by default, black on hover */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-transparent group-hover:via-transparent group-hover:to-transparent transition-all duration-500">
                <h3 className="text-3xl font-bold drop-shadow-2xl text-white group-hover:text-black group-hover:drop-shadow-none transition-all duration-500">
                  {title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}