"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";

type ProcessStep = {
  title: string;
  subtitle?: string;
  description: string;
  icon: string;
};

const processSteps: ProcessStep[] = [
  {
    title: "Research & Strategy",
    subtitle: "Market Intelligence & Strategic Roadmapping",
    description:
      "We begin with a deep dive into your brand, market, and audience to uncover opportunities and design a winning strategy tailored to your goals.",
    icon: "mdi:lightbulb-on-outline",
  },
  {
    title: "Smart Targeting & Funnel Design",
    description:
      "We map customer journeys and craft conversion-focused funnels that reach the right audience at the right time across multiple touchpoints.",
    icon: "mdi:target",
  },
  {
    title: "Creative Experiments",
    subtitle: "A/B & Multivariate Testing",
    description:
      "Through rigorous testing of visuals, copy, and messaging, we identify what resonates most with your audience and scale only the top performers.",
    icon: "mdi:flask-outline",
  },
  {
    title: "Scaling Profitably",
    subtitle: "Data-Backed Adjustments",
    description:
      "With continuous data monitoring, we optimize campaigns in real-time, ensuring you scale effectively while maximizing return on ad spend (ROAS).",
    icon: "mdi:trending-up",
  },
  {
    title: "Real-Time Reporting",
    subtitle: "Strategic Recommendations",
    description:
      "Get transparent insights with dashboards and reports that not only track performance but also provide actionable recommendations for growth.",
    icon: "mdi:chart-timeline-variant",
  },
];

export default function OurProcess() {
  return (
    <main className="bg-gray-50 text-dark">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-20 bg-white text-center mt-8">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
        >
          The <span className="text-[#1D99EC]">Truliyo Way</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Our process is built on strategy, creativity, and data. Step by step,
          we guide your brand from insight to execution, ensuring scalable and
          sustainable growth.
        </motion.p>
      </section>

      {/* Process Steps */}
      <section className="py-16 px-6 md:px-12 lg:px-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group p-8 rounded-2xl shadow-lg bg-white cursor-pointer 
                         hover:bg-[#1D99EC] hover:text-white transition-colors duration-300 flex flex-col"
            >
              <div className="flex items-center mb-6">
                <div className="p-4 rounded-xl bg-[#1D99EC] text-white group-hover:bg-white group-hover:text-[#1D99EC] transition-colors duration-300">
                  <Icon icon={step.icon} className="w-8 h-8" />
                </div>
                <h3 className="ml-4 text-2xl font-semibold">{step.title}</h3>
              </div>
              {step.subtitle && (
                <p className="text-sm font-medium opacity-80 mb-2">
                  {step.subtitle}
                </p>
              )}
              <p className="text-sm opacity-90 leading-relaxed flex-grow">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 px-6 md:px-12 lg:px-20 bg-[#1D99EC] text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Ready to Scale with The Truliyo Way?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg max-w-2xl mx-auto mb-8 opacity-90"
        >
          Partner with us to unlock growth opportunities, reach new audiences,
          and achieve long-term success powered by data-driven strategies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-lg bg-white text-[#1D99EC] font-semibold shadow-md hover:bg-gray-100 transition"
          >
            Book a Call
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
