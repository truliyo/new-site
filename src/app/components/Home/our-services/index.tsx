"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";

type Service = {
  title: string;
  subtitle: string;
  icon: string;
  category: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    title: "Performance Media Buying",
    subtitle: "Meta, Google, LinkedIn & beyond",
    icon: "mdi:target",
    category: "Marketing",
    description:
      "Drive qualified leads with precision-targeted campaigns across all major platforms",
  },
  {
    title: "Search Engine Dominance",
    subtitle: "Technical SEO & Content Strategies",
    icon: "mdi:magnify",
    category: "SEO",
    description:
      "Dominate search results with data-driven SEO strategies and technical optimization",
  },
  {
    title: "Social Media Marketing",
    subtitle: "From likes to loyal customers",
    icon: "mdi:share-variant",
    category: "Social",
    description:
      "Build engaged communities and convert followers into brand advocates",
  },
  {
    title: "Website Design",
    subtitle: "Conversion-centric design & optimization",
    icon: "mdi:web",
    category: "Design",
    description:
      "Create stunning websites that captivate visitors and maximize conversions",
  },
  {
    title: "Web Development",
    subtitle: "Smart design, powerful development",
    icon: "mdi:code-tags",
    category: "Development",
    description:
      "Build fast, scalable, and secure web applications with cutting-edge technology",
  },
  {
    title: "Creative Services",
    subtitle: "Ad creative that inspires & converts",
    icon: "mdi:palette",
    category: "Creative",
    description:
      "Craft compelling visual stories that resonate with your audience and drive action",
  },
  {
    title: "AI & Automation",
    subtitle: "Smarter business with automation",
    icon: "mdi:robot",
    category: "Technology",
    description:
      "Streamline operations and enhance customer experiences with intelligent automation",
  },
  {
    title: "Analytics & Reporting",
    subtitle: "Data-driven decisions & dashboards",
    icon: "mdi:chart-line",
    category: "Analytics",
    description:
      "Transform raw data into actionable insights with comprehensive analytics solutions",
  },
];

export default function ModernServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className="w-full py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden"
      id="cap"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/3 to-transparent rounded-full" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500/20 rounded-full animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        />
        <div
          className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-500/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-600/30 rounded-full animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <header className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            <span
              className="block text-black bg-clip-text animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Our Capabilities
            </span>
          </h2>

          <p
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Transform your digital presence with our comprehensive suite of
            marketing services. From strategy to execution, we deliver results
            that matter.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="relative h-full bg-white/70 backdrop-blur-xl border border-slate-200/50 rounded-3xl p-8 shadow-xl shadow-slate-900/5 transition-all duration-700 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/30 hover:-translate-y-3 hover:scale-[1.02] group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-700 rounded-3xl" />

                <div className="relative mb-8 z-10">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 flex items-center justify-center transition-all duration-700 group-hover:bg-gradient-to-br group-hover:from-blue-500/20 group-hover:to-purple-500/20 group-hover:border-blue-500/40 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                    <Icon
                      icon={service.icon}
                      className="w-10 h-10 text-[#1D99EC] transition-all duration-700 group-hover:text-[#1586d6] group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute -top-3 -right-3">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-r  text-[#1D99EC] border border-blue-500/20 backdrop-blur-sm transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-blue-500/20 group-hover:to-purple-500/20 group-hover:border-blue-500/40 group-hover:scale-105">
                      {service.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  <h3 className="font-bold text-2xl text-slate-900 group-hover:text-slate-800 transition-colors duration-500 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-[#1D99EC] font-medium group-hover:text-blue-700 transition-colors duration-500 leading-relaxed">
                    {service.subtitle}
                  </p>

                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-500 leading-relaxed text-sm opacity-80 group-hover:opacity-100">
                    {service.description}
                  </p>
                </div>

                {/* <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0 z-10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <Icon icon="mdi:arrow-top-right" className="w-5 h-5 text-white" />
                  </div>
                </div> */}

                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-br group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-700 pointer-events-none" />

                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-xl scale-110" />
              </div>

              <div
                className={`absolute inset-0 rounded-3xl transition-all duration-1000 pointer-events-none -z-10 blur-2xl scale-125 ${
                  hoveredIndex === index
                    ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-100"
                    : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 hover:scale-105 transition-all duration-500 cursor-pointer group">
            <span>Ready to elevate your digital presence?</span>
            <Icon
              icon="mdi:arrow-right"
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
            />
          </div>
        </div> */}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
