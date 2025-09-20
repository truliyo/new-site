"use client";

import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

type Service = {
  title: string;
  subtitle?: string;
  description: string;
  icon: string;
};

const services: Service[] = [
  {
    title: "Paid Media",
    subtitle: "Performance Media Buying",
    description: "Meta, Google, LinkedIn & Beyond",
    icon: "mdi:google-ads",
  },
  {
    title: "SEO & Organic Growth",
    subtitle: "Technical SEO + Content Strategies",
    description: "Search Engine Dominance & Sustainable Organic Growth",
    icon: "mdi:search-web",
  },
  {
    title: "Social Media Marketing",
    subtitle: "From Likes to Loyal Customers",
    description: "Social done right with proven strategies",
    icon: "mdi:instagram",
  },
  {
    title: "Affiliate Marketing",
    description: "Expand your reach through affiliate partnerships",
    icon: "mdi:handshake-outline",
  },
  {
    title: "Website Design & Optimization",
    subtitle: "Conversion-Centric Experiences",
    description: "From first click to checkout – optimized for conversions",
    icon: "mdi:web",
  },
  {
    title: "Creative & Content Solutions",
    subtitle: "Performance-Driven Creative Studio",
    description: "Ad creatives that inspire, content that converts",
    icon: "mdi:palette-outline",
  },
];

export default function CoreServices() {
  return (
    <section className="relative py-16 px-6 md:px-12 lg:px-20 bg-white text-dark mt-16">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our <span className="text-[#1D99EC]">Core Services</span>
        </h2>
        <p className="text-gray-600">
          Discover how our expertise fuels growth across performance marketing,
          design, and content creation.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="group p-6 rounded-2xl shadow-md bg-gray-50 cursor-pointer 
                       hover:bg-[#1D99EC] hover:text-white transition-colors duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-xl bg-[#1D99EC] text-white group-hover:bg-white group-hover:text-[#1D99EC] transition-colors duration-300">
                <Icon icon={service.icon} className="w-7 h-7" />
              </div>
              <h3 className="ml-3 text-xl font-semibold">{service.title}</h3>
            </div>
            {service.subtitle && (
              <p className="text-sm font-medium opacity-80 mb-2">
                {service.subtitle}
              </p>
            )}
            <p className="text-sm opacity-90">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
