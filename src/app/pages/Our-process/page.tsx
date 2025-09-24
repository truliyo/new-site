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
    title: "Data-Driven Market Intelligence",
    // subtitle: "Market Intelligence & Strategic Roadmapping",
    description:
      "At Truliyo Digital, every campaign begins with in-depth research and strategic road mapping. By analyzing audience behavior, market trends, and competitors, we create a blueprint designed to maximize ROI and long-term scalability.",
    icon: "mdi:lightbulb-on-outline",
  },
  {
    title: "Precision Targeting & Funnel Architecture",
    description:
      "We engineer smart targeting frameworks and conversion funnels that guide users from awareness to purchase. Our approach ensures that every touchpoint is optimized for engagement and conversions.",
    icon: "mdi:target",
  },
  {
    title: "A/B & Multivariate Creative Experiments",
    // subtitle: "A/B & Multivariate Testing",
    description:
      "Through A/B and multivariate experiments, our team identifies the highest-performing creatives and messages. This data-backed process allows us to refine campaigns continuously for better engagement and higher conversions.",
    icon: "mdi:flask-outline",
  },
  {
    title: "Scalable Growth Optimization",
    // subtitle: "Data-Backed Adjustments",
    description:
      "At Truliyo Digital, profitability drives everything we do. By leveraging performance insights and advanced analytics, we continuously fine-tune campaigns to ensure brands scale effectively. Our approach focuses on maximizing ROAS while strategically reducing customer acquisition costs, enabling businesses to grow sustainably and profitably in competitive markets.",
    icon: "mdi:trending-up",
  },
  {
    title: "Real-Time Reporting With Strategic Recommendations",
    // subtitle: "Strategic Recommendations",
    description:
      "Truliyo Digital provides real-time dashboards and clear reporting, paired with strategic recommendations. Our clients get complete visibility into performance and actionable insights to make smarter business decisions.",
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
          Best practices in action from day zero,
profitable, scalable, unstoppable.
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
                <h3 className="ml-4 text-2xl font-bold">{step.title}</h3>
              </div>
              {step.subtitle && (
                <p className="text-sm font-medium opacity-80 mb-2">
                  {step.subtitle}
                </p>
              )}
              <p className="text-md opacity-90 leading-relaxed flex-grow">
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
            href="/pages/Book-call"
            className="inline-block px-8 py-3 rounded-lg bg-white text-[#1D99EC] font-semibold shadow-md hover:bg-gray-100 transition"
          >
            Book a Call
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
