"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import type { Transition } from "framer-motion";
import { Icon } from "@iconify/react";

type Approach = {
  id: string;
  title: string;
  description: string;
  icon: string;
  accent: string;
};

const approaches: Approach[] = [
  {
    id: "research",
    title: "Research & Strategy",
    description:
      "Market intelligence and strategic road-mapping to uncover opportunities and define a clear growth path.",
    icon: "mdi:magnify",
    accent: "bg-blue-500",
  },
  {
    id: "targeting",
    title: "Smart Targeting & Funnel Design",
    description:
      "Audience segmentation and funnel architecture to ensure the right message reaches the right user at the right stage.",
    icon: "mdi:bullseye",
    accent: "bg-sky-400",
  },
  {
    id: "experiments",
    title: "A/B & Multivariate Experiments",
    description:
      "Systematic creative experiments to find winning messaging, creatives and UX adjustments that convert.",
    icon: "mdi:flask",
    accent: "bg-pink-300",
  },
  {
    id: "scaling",
    title: "Scaling Profitably",
    description:
      "Scale ad spends and channels with data-backed bid and creative adjustments for profitable growth.",
    icon: "mdi:trending-up",
    accent: "bg-indigo-400",
  },
  {
    id: "reporting",
    title: "Real-Time Reporting",
    description:
      "Live dashboards and strategic recommendations so you always know what's working and what to prioritize.",
    icon: "mdi:chart-line",
    accent: "bg-emerald-400",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const springTransition: Transition = {
  type: "spring",
  stiffness: 110,
  damping: 18,
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springTransition,
  },
};

export default function AboutUs() {
  return (
    <section className="w-full bg-gradient-to-br dark:bg-gray-900/40 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 mt-8 sm:mt-12 md:mt-16 overflow-hidden relative">
      {/* Decorative background elements */}
      {/* <div className="absolute top-10 left-5 w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-10 right-5 w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div> */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center lg:text-left mb-8 sm:mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <p className="text-xs sm:text-sm text-[#1D99EC] font-semibold tracking-wider mb-2 sm:mb-3 uppercase relative inline-block">
              ABOUT US
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#1D99EC] to-transparent"></span>
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 md:mb-8"
            style={{
              background: 'linear-gradient(to right, #0D7AC7, #1D99EC, #3DAEF5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Know more about us.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
          >
            We combine research, creative experimentation and real-time data to
            deliver measurable and scalable digital growth. Below is our approach
            — a repeatable process that turns insights into strategy and strategy
            into results.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {approaches.map((a) => (
            <motion.article
              key={a.id}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg 
                hover:shadow-2xl transition-all duration-500 p-5 sm:p-6 md:p-8 flex flex-col gap-3 sm:gap-4
                hover:bg-[#1D99EC] border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1D99EC] to-[#0D7AC7] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon and Title Row */}
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full sm:rounded-2xl flex items-center justify-center ${a.accent} shadow-lg group-hover:shadow-xl transition-all duration-300 flex-shrink-0 transform-gpu group-hover:scale-110 group-hover:rotate-6`}
                    style={{ perspective: 800 }}
                    aria-hidden
                  >
                    <motion.div
                      className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-sm"
                      whileHover={{ rotateY: 18, rotateX: -8, scale: 1.06 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 18,
                      }}
                    >
                      <Icon
                        icon={a.icon}
                        width="24"
                        height="24"
                        className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7"
                        aria-hidden
                      />
                    </motion.div>
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300 leading-tight flex-1">
                    {a.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 group-hover:text-white/95 transition-colors duration-300 leading-relaxed flex-1">
                  {a.description}
                </p>

                {/* Read more link */}
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200 dark:border-gray-700 group-hover:border-white/30 transition-colors duration-300">
                  {/* <span className="inline-flex items-center text-xs sm:text-sm font-semibold text-[#1D99EC] group-hover:text-white transition-colors duration-300">
                    Learn more
                    <Icon
                      icon="tabler:chevron-right"
                      width="16"
                      height="16"
                      className="ml-1 transform group-hover:translate-x-2 transition-transform duration-300"
                    />
                  </span> */}
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-white/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-gray-200 dark:border-gray-700"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                Ready to talk strategy?
              </h4>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Let's map a roadmap that fits your business goals.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <a
                href="/pages/Book-call"
                className="inline-flex items-center justify-center bg-[#1D99EC] hover:bg-[#0D7AC7] text-white font-semibold px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base md:text-lg min-w-[160px] sm:min-w-[180px] whitespace-nowrap"
              >
                Book a call
                <Icon
                  icon="tabler:arrow-right"
                  width="20"
                  height="20"
                  className="ml-2 transform group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}