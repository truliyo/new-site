"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";
import { Icon } from "@iconify/react";

type Approach = {
  id: string;
  title: string;
  description: string;
  icon: string;
  accent: string; // accent color for icon blob (Tailwind color or hex)
};

const approaches: Approach[] = [
  {
    id: "research",
    title: "Research & Strategy",
    description:
      "Market intelligence and strategic road-mapping to uncover opportunities and define a clear growth path.",
    icon: "mdi:magnify", // magnifying glass — research & insights
    accent: "bg-blue-500",
  },
  {
    id: "targeting",
    title: "Smart Targeting & Funnel Design",
    description:
      "Audience segmentation and funnel architecture to ensure the right message reaches the right user at the right stage.",
    icon: "mdi:bullseye", // targeting / bullseye
    accent: "bg-sky-400",
  },
  {
    id: "experiments",
    title: "A/B & Multivariate Experiments",
    description:
      "Systematic creative experiments to find winning messaging, creatives and UX adjustments that convert.",
    icon: "mdi:flask", // experiments / testing
    accent: "bg-pink-300",
  },
  {
    id: "scaling",
    title: "Scaling Profitably",
    description:
      "Scale ad spends and channels with data-backed bid and creative adjustments for profitable growth.",
    icon: "mdi:trending-up", // growth / scaling
    accent: "bg-indigo-400",
  },
  {
    id: "reporting",
    title: "Real-Time Reporting",
    description:
      "Live dashboards and strategic recommendations so you always know what's working and what to prioritize.",
    icon: "mdi:chart-line", // reporting / analytics
    accent: "bg-emerald-400",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 110, damping: 18 },
  },
};

/**
 * Typed motion element aliases so TS knows these accept normal HTML props (className, style, etc.)
 * and Framer Motion props.
 */
type DivProps = React.ComponentPropsWithoutRef<"div"> & MotionProps;
const MotionDiv = motion.div as unknown as React.ComponentType<DivProps>;

type ArticleProps = React.ComponentPropsWithoutRef<"article"> & MotionProps;
const MotionArticle =
  motion.article as unknown as React.ComponentType<ArticleProps>;

type InnerDivProps = React.ComponentPropsWithoutRef<"div"> & MotionProps;
const MotionInnerDiv =
  motion.div as unknown as React.ComponentType<InnerDivProps>;

export const AboutUs: React.FC = () => {
  return (
    <section className="w-full bg-white/60 dark:bg-gray-900/40 py-16 px-6 md:px-12 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Small subtitle */}
        <p className="text-sm text-blue-600 font-medium tracking-wider mb-3">
          ABOUT US
        </p>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-black dark:text-white leading-tight mb-8">
          Know more about us.
        </h2>

        {/* Intro paragraph */}
        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mb-10">
          We combine research, creative experimentation and real-time data to
          deliver measurable and scalable digital growth. Below is our approach
          — a repeatable process that turns insights into strategy and strategy
          into results.
        </p>

        {/* Cards grid */}
        <MotionDiv
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {approaches.map((a) => (
            <MotionArticle
              key={a.id}
              variants={cardVariants}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col gap-4 
                 hover:bg-[#01224B] hover:text-white"
            >
              {/* Icon + blob */}
              <div className="flex items-start gap-4">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center ${a.accent} shadow-inner relative transform-gpu`}
                  style={{ perspective: 800 }}
                  aria-hidden
                >
                  {/* 3D effect container */}
                  <MotionInnerDiv
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm"
                    whileHover={{ rotateY: 18, rotateX: -8, scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    aria-hidden
                  >
                    <Icon
                      icon={a.icon}
                      width="28"
                      height="28"
                      className="text-white"
                      aria-hidden
                      role="img"
                    />
                  </MotionInnerDiv>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-black dark:text-white mt-1 group-hover:text-white">
                  {a.title}.
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 group-hover:text-white">
                {a.description}
              </p>

              {/* Learn more CTA */}
              <div className="mt-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline font-medium text-sm group-hover:text-white"
                >
                  Learn more
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>

              {/* subtle bottom accent */}
              <div className="absolute -bottom-3 right-4 w-20 h-1 rounded-full bg-gradient-to-r from-transparent to-black/10 opacity-30" />
            </MotionArticle>
          ))}
        </MotionDiv>

        {/* CTA row */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-black dark:text-white">
              Ready to talk strategy?
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Let’s map a roadmap that fits your business goals.
            </p>
          </div>
          <div>
            <a
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
