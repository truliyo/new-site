import React from "react";

const FEATURES = [
  {
    imageUrl: "/images/setus-appart/set-us-1-ezgif.com-resize.webp",
    title: "100% Transparency With Real-Time Dashboards",
    // description: "We leverage the latest and greatest to empower your business."
  },
  {
    imageUrl: "/images/setus-appart/set-us-2-ezgif.com-jpg-to-webp-converter.jpg",
    title: "Client-First Account Management",
    // description: "Creative strategies tailor-made to set you apart."
  },
  {
    imageUrl: "/images/setus-appart/set-us-3-ezgif.com-resize.webp",
    title: "One Stop Solutiion",
    // description: "Collaboration drives results and fuels growth."
  },
  {
    imageUrl: "/images/setus-appart/set-us-4-ezgif.com-resize.jpg",
    title: "ROI-Obsessed Growth Strategies",
    // description: "Delivering excellence that exceeds expectations."
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
              {/* Image with smooth zoom on hover */}
              <img
                src={imageUrl}
                alt={title}
                className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-50"
                loading="lazy"
              />

              {/* Dark overlay appears on hover */}
  <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

              {/* Text content overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 opacity-0 group-hover:opacity-100 text-white transition-opacity duration-500 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                <h3 className="text-3xl font-semibold mb-3 drop-shadow-lg text-white">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
