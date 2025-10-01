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
          What Sets Us Apart
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">
          {FEATURES.map(({ imageUrl, title }, idx) => (
            <div
              key={idx}
              className="relative w-full max-w-xs h-[400px] rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
            >
              {/* Image - grayscale by default, full color on hover with zoom */}
              <img
                src={imageUrl}
                alt={title}
                className="object-cover w-full h-full transition-all duration-500 ease-in-out filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                loading="lazy"
              />

              {/* Dark overlay - stronger on default, lighter on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 group-hover:from-black/60 group-hover:via-black/30 group-hover:to-transparent transition-all duration-500" />

              {/* Text container with background that appears on hover */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 transition-all duration-500">
                <div className="relative">
                  {/* Background highlight that appears on hover */}
                  <div className="absolute inset-0 -m-1 bg-white/70 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-out shadow-2xl" />
                  
                  {/* Text */}
                  <h3 className="relative z-10 text-3xl font-bold text-white group-hover:text-gray-900 transition-all duration-500 px-4 py-3">
                    {title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}