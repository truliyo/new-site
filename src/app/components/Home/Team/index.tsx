"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";

/**
 * Stats Section matching the exact design with animated numbers
 */

type Stat = {
  id: string;
  value: number;
  label: string;
  unit: string;
};

const STATS: Stat[] = [
  {
    id: "campaigns",
    value: 40,
    label: "Successful digital marketing campaigns",
    unit: "K+",
  },
  {
    id: "revenue",
    value: 5,
    label: "Ad spend",
    unit: "M+",
  },
  {
    id: "conversions",
    value: 2,
    label: "Conversions",
    unit: "M+",
  },
  {
    id: "growth",
    value: 35,
    label: "Average increase in lead generation",
    unit: "+",
  },
];

/** Animated Number Component */
function AnimatedNumber({
  value,
  unit,
  inView,
}: {
  value: number;
  unit: string;
  inView: boolean;
}) {
  const springValue = useSpring(0, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.01,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      springValue.set(value);
    }
  }, [inView, value, springValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });

    return unsubscribe;
  }, [springValue]);

  return (
    <div className="text-left mb-6">
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600 mb-2">
        {displayValue}
        {unit}
      </div>
      <div className="text-sm md:text-base text-gray-600 leading-relaxed max-w-[180px]">
        {/* Add $ prefix for revenue */}
        {unit === "M+" && displayValue > 0
          ? `$${displayValue}M+`
          : `${displayValue}${unit}`}
        <br />
        <span className="text-gray-500">
          {/* Label will be shown separately */}
        </span>
      </div>
    </div>
  );
}

/** Individual Stat Component */
function StatItem({
  stat,
  inView,
  delay,
}: {
  stat: Stat;
  inView: boolean;
  delay: number;
}) {
  const springValue = useSpring(0, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.01,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        springValue.set(stat.value);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [inView, stat.value, springValue, delay]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });

    return unsubscribe;
  }, [springValue]);

  return (
    <motion.div
      className="mb-8 last:mb-0"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      <div className="text-5xl md:text-6xl font-bold text-[#1D99EC] mb-2">
        {stat.id === "revenue" ? "$" : ""}
        {displayValue}
        {stat.unit}
      </div>
      <div className="text-sm text-gray-600 max-w-[200px] leading-relaxed">
        {stat.label}
      </div>
    </motion.div>
  );
}

/** Main Stats Section Component */
export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-100px 0px -100px 0px",
  });

  return (
    <section
      ref={ref}
      className="w-full bg-gradient-to-br from-blue-50 to-sky-100 py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Stats and Illustration */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
                {/* Stats Column */}
                <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-8 lg:p-12 flex flex-col justify-center">
                  {STATS.map((stat, index) => (
                    <StatItem
                      key={stat.id}
                      stat={stat}
                      inView={inView}
                      delay={index * 200}
                    />
                  ))}
                </div>

                {/* Illustration Column */}
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-0 flex items-center justify-center relative overflow-hidden w-full h-[400px] md:h-[600px]">
                  {/* Responsive Full Cover Image */}
                  <Image
                    src="/images/team/creatopy-M35xxKGb_tA-unsplash-ezgif.com-resize.webp"
                    alt="Illustration"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-[#1D99EC] text-sm font-semibold">
                <Icon icon="mdi:rocket-launch" width={18} height={18} />
                Truliyo Digital
              </span>

              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Creative Marketing for a{" "}
                <span className="text-[#1D99EC]">Digital World.</span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                Improve your business website's online presence with targeted
                digital marketing, beautiful design, and measurable campaigns.
                We combine creative strategy and technical execution to help you
                stand out and grow.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
