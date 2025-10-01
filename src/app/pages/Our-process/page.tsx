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
  color: string;
};

const processSteps: ProcessStep[] = [
  {
    title: "Data-Driven Market Intelligence",
    description:
      "At Truliyo Digital, every campaign begins with in-depth research and strategic road mapping. By analyzing audience behavior, market trends, and competitors, we create a blueprint designed to maximize ROI and long-term scalability.",
    icon: "mdi:lightbulb-on-outline",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Precision Targeting & Funnel Architecture",
    description:
      "We engineer smart targeting frameworks and conversion funnels that guide users from awareness to purchase. Our approach ensures that every touchpoint is optimized for engagement and conversions.",
    icon: "mdi:target",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "A/B & Multivariate Creative Experiments",
    description:
      "Through A/B and multivariate experiments, our team identifies the highest-performing creatives and messages. This data-backed process allows us to refine campaigns continuously for better engagement and higher conversions.",
    icon: "mdi:flask-outline",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Scalable Growth Optimization",
    description:
      "At Truliyo Digital, profitability drives everything we do. By leveraging performance insights and advanced analytics, we continuously fine-tune campaigns to ensure brands scale effectively. Our approach focuses on maximizing ROAS while strategically reducing customer acquisition costs, enabling businesses to grow sustainably and profitably in competitive markets.",
    icon: "mdi:trending-up",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Real-Time Reporting With Strategic Recommendations",
    description:
      "Truliyo Digital provides real-time dashboards and clear reporting, paired with strategic recommendations. Our clients get complete visibility into performance and actionable insights to make smarter business decisions.",
    icon: "mdi:chart-timeline-variant",
    color: "from-indigo-500 to-blue-500",
  },
];

export default function OurProcess() {
  return (
    <main className=" text-dark overflow-hidden">
      {/* Animated background elements */}
      

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-20  backdrop-blur-sm text-center mt-4 sm:mt-6 md:mt-8">
        <div className="absolute inset-0 bg-gradient-to-br "></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
        

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight"
          >
            The{" "}
            <span className="relative inline-block">
              <span
                className="relative z-10"
                style={{
                  background: 'linear-gradient(to right, #0D7AC7, #1D99EC, #3DAEF5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Truliyo Way
              </span>
              
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Best practices in action from day zero,
            <br className="hidden sm:block" />
            <span className="font-semibold text-[#1D99EC]">
              profitable, scalable, unstoppable.
            </span>
          </motion.p>
        </motion.div>

        
      </section>

      {/* Process Steps */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-20 relative -mt-8 sm:-mt-12 md:-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg bg-white/80 backdrop-blur-sm cursor-pointer hover:bg-[#1D99EC] hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1D99EC] to-[#0D7AC7] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>

                {/* Number badge */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#1D99EC]/10 to-purple-500/10 group-hover:from-white/20 group-hover:to-white/10 flex items-center justify-center transition-all duration-300">
                  <span className="text-lg sm:text-xl font-bold text-[#1D99EC] group-hover:text-white transition-colors duration-300">
                    {index + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon and Title */}
                  <div className="flex items-start mb-4 sm:mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg group-hover:bg-white group-hover:shadow-xl transition-all duration-300 flex-shrink-0`}
                    >
                      <Icon 
                        icon={step.icon} 
                        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 group-hover:text-[#1D99EC] transition-colors duration-300" 
                      />
                    </motion.div>
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 mb-3 sm:mb-4 leading-tight pr-12">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 group-hover:text-white/95 transition-colors duration-300 leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-[#1D99EC]/5 to-transparent rounded-tr-3xl opacity-100 group-hover:opacity-0 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-20 bg-gradient-to-br from-[#1D99EC] to-[#0D7AC7] text-center text-white overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight"
            >
              Ready to Scale with{" "}
              <span className="inline-block relative">
                The Truliyo Way?
                
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 opacity-95 leading-relaxed px-4"
            >
              Partner with us to unlock growth opportunities, reach new audiences,
              and achieve long-term success powered by data-driven strategies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/pages/Book-call"
                className="inline-flex items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white text-[#1D99EC] font-bold shadow-xl hover:shadow-2xl transition-all duration-300 text-sm sm:text-base md:text-lg group"
              >
                Book a Call
                <Icon
                  icon="tabler:arrow-right"
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating elements */}
          <div className="absolute top-1/4 left-8 sm:left-16 w-3 h-3 sm:w-4 sm:h-4 bg-white/40 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 right-8 sm:right-16 w-3 h-3 sm:w-4 sm:h-4 bg-white/40 rounded-full animate-bounce animation-delay-1000"></div>
        </div>
      </section>

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
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </main>
  );
}