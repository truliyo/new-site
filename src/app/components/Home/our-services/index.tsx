import React from "react";
import { Icon } from "@iconify/react";

// ...SERVICES array remains unchanged...
type Service = {
  title: string;
  subtitle: string;
  icon: string;
  category: string;
};

const SERVICES: Service[] = [
  {
    title: "Performance Media Buying",
    subtitle: "Meta, Google, LinkedIn & beyond",
    icon: "mdi:shopping-cart",
    category: "Marketing",
  },
  {
    title: "Search Engine Dominance",
    subtitle: "Technical SEO & Content Strategies",
    icon: "mdi:magnify",
    category: "SEO",
  },
  {
    title: "Social Media Marketing",
    subtitle: "From likes to loyal customers",
    icon: "mdi:share-variant",
    category: "Social",
  },
  {
    title: "Website Design",
    subtitle: "Conversion-centric design & optimization",
    icon: "mdi:web",
    category: "Design",
  },
  {
    title: "Web Development",
    subtitle: "Smart design, powerful development",
    icon: "mdi:code-tags",
    category: "Development",
  },
  {
    title: "Creative Services",
    subtitle: "Ad creative that inspires & converts",
    icon: "mdi:palette",
    category: "Creative",
  },
  {
    title: "AI & Automation",
    subtitle: "Smarter business with automation",
    icon: "mdi:robot",
    category: "Technology",
  },
  {
    title: "Analytics & Reporting",
    subtitle: "Data-driven decisions & dashboards",
    icon: "mdi:chart-line",
    category: "Analytics",
  },
];


export default function ServicesGrid() {
  return (
    <section className="w-full py-24 bg-gray-50" id="services">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Capabilities
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Where expertise shapes digital success through innovative solutions and strategic thinking.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 shadow transition-all duration-300 cursor-pointer hover:bg-[#1D99EC]"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "fadeInUp 0.6s ease-out forwards"
              }}
            >
              {/* Content */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center transition-colors duration-300 group-hover:bg-white">
                    <Icon
                      icon={service.icon}
                      // Blue by default, white on hover
                      className="w-6 h-6 text-[#1D99EC] transition-colors duration-300"
                    />
                  </div>
                  <span className="text-md font-semibold uppercase tracking-wider text-[#1D99EC] group-hover:text-white transition-colors duration-300">
                    {service.category}
                  </span>
                </div>
                <Icon
                  icon="mdi:arrow-top-right"
                  className="w-5 h-5 text-[#1D99EC] opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-white transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-white transition-colors duration-300 leading-relaxed">
                  {service.subtitle}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                {/* <span className="inline-flex items-center text-sm font-medium text-[#1D99EC] group-hover:text-white transition-colors duration-300">
                  Learn more
                  <Icon
                    icon="mdi:arrow-top-right"
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 group-hover:text-white"
                  />
                </span> */}
              </div>
              {/* Border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
