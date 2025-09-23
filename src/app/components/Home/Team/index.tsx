"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Icon } from "@iconify/react";

/**
 * Final StatsSection.tsx
 *
 * Requirements:
 * - framer-motion
 * - @iconify/react
 * - Tailwind CSS (or convert classes to your CSS)
 *
 * Replace: /images/hero-illustration.png with your image (or switch to next/image)
 */

type Stat = {
  id: string;
  value: number;
  label: string;
  icon: string;
  prefix?: string;
};

const STATS: Stat[] = [
  {
    id: "users",
    value: 40000,
    label: "Successful digital marketing campaings",
    icon: "mdi:account-group-outline",
  }, // 40K+
  {
    id: "revenue",
    value: 5000000,
    label: "Ad spend",
    icon: "mdi:currency-usd",
    prefix: "$",
  }, // $5M+
  {
    id: "downloads",
    value: 2000000,
    label: "Conversions",
    icon: "mdi:download-outline",
  }, // 2M+
  {
    id: "partners",
    value: 35,
    label: "Average increase in lead generation",
    icon: "mdi:handshake-outline",
  }, // 35+
];

/** Format numbers into compact form like 40K+, $5M+ etc. */
function formatCompact(n: number, prefix = ""): string {
  if (n <= 0) return `${prefix}0+`;
  const abs = Math.abs(n);

  if (abs >= 1_000_000) {
    const major = abs / 1_000_000;
    const formatted = Number.isInteger(major)
      ? `${major.toFixed(0)}`
      : `${major.toFixed(1)}`;
    return `${prefix}${formatted}M+`;
  }

  if (abs >= 1_000) {
    const major = abs / 1_000;
    const formatted = Number.isInteger(major)
      ? `${major.toFixed(0)}`
      : `${major.toFixed(1)}`;
    return `${prefix}${formatted}K+`;
  }

  return `${prefix}${abs}+`;
}

/** AnimatedNumber shows compact formatted value while counting up */
function AnimatedNumber({ value, prefix }: { value: number; prefix?: string }) {
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState<string>(formatCompact(0, prefix));

  useEffect(() => {
    const duration = Math.min(2.2, 0.6 + Math.log10(Math.max(1, value)) * 0.25);
    const controls = animate(mv, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });

    const unsub = mv.on("change", (v) => {
      setDisplay(formatCompact(Math.round(v), prefix));
    });

    return () => {
      unsub();
      controls.stop();
    };
  }, [value, prefix, mv]);

  return (
    <span
      aria-hidden
      className="font-extrabold leading-none text-4xl sm:text-5xl md:text-6xl text-sky-700"
    >
      {display}
    </span>
  );
}

/** Main component */
export default function StatsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-120px 0px -120px 0px",
  });

  return (
    <section
      ref={ref}
      className="w-full bg-gradient-to-r from-white to-sky-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Visual / Left */}
        <div className="relative flex items-center justify-center">
          <div className="w-full rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2">
            {/* Left column: stacked big numbers */}
            <div className="bg-sky-600/8 p-8 md:p-12 flex flex-col justify-center gap-6">
              {STATS.map((s) => (
                <div
                  key={s.id}
                  className="flex items-center justify-between py-3 border-b border-slate-200/40"
                >
                  <div>
                    <div className="text-3xl md:text-4xl lg:text-3xl font-extrabold text-sky-700">
                      {inView ? (
                        <AnimatedNumber value={s.value} prefix={s.prefix} />
                      ) : (
                        formatCompact(0, s.prefix)
                      )}
                    </div>
                    <div className="text-xs md:text-sm text-slate-500 mt-1">
                      {s.label}
                    </div>
                  </div>

                  {/* <div className="hidden md:block opacity-70">
                    <Icon icon={s.icon} width={28} height={28} className="text-sky-500" />
                  </div> */}
                </div>
              ))}
            </div>

            {/* Right column: illustration */}
            <div className="bg-white p-0 md:p-0 flex items-center justify-center">
              <div className="w-full h-full">
                <div className="rounded-lg overflow-hidden bg-sky-50 w-full h-full flex items-center justify-center">
                  {/* Replace this img with your own or use next/image */}
                  <img
                    src="/images/team/team-img-ezgif.com-png-to-webp-converter.webp"
                    alt="Hero illustration"
                    className="w-full h-full object-fit"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content / Right */}
        <div className="flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-medium w-max">
            <Icon icon="mdi:rocket-launch" width={18} height={18} />
            Truliyo Digital
          </span>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Creative Marketing for a Digital World.
          </h2>

          <p className="text-slate-600 max-w-prose">
            Improve your business website’s online presence with targeted
            digital marketing, beautiful design, and measurable campaigns. We
            combine creative strategy and technical execution to help you stand
            out and grow.
          </p>

          {/* Compact stats row for small screens */}
          <div className="mt-4 grid grid-cols-3 gap-3 lg:hidden">
            {STATS.map((s) => (
              <div
                key={s.id}
                className="bg-white/60 p-3 rounded-lg text-center"
              >
                <div className="text-lg font-bold text-sky-700">
                  {inView ? (
                    <AnimatedNumber value={s.value} prefix={s.prefix} />
                  ) : (
                    formatCompact(0, s.prefix)
                  )}
                </div>
                <div className="text-xs text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
