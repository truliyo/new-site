"use client";
import React from "react";
import Link from "next/link";

const Beliefs = () => {
  return (
    <section className="bg-cover bg-center overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* COLUMN-1 */}

          <div className="bg-black pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl bg-[url('/images/beliefs/light.png')] bg-no-repeat bg-right-bottom bg-cover h-[750px]">
            <p className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start uppercase">
              Vision
            </p>
            <h3 className="text-white mb-5 text-center sm:text-start">
              Trusted Global{" "}
              <span className="text-[#1D99EC]">Partner in Digital Growth</span>
            </h3>
            <p className="text-lg text-white pt-2 mb-16 text-center sm:text-start">
              Empowering businesses with data-driven marketing, innovative web
              solutions, and growth-focused strategies, turning ideas into
              impactful experiences, building lasting connections, and setting
              new benchmarks in digital excellence.
            </p>
          </div>

          {/* COLUMN-2 */}

          <div className="pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl bg-[url('/images/beliefs/fly.png')] bg-no-repeat bg-bottom bg-cover h-[750px]">
            <p className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start uppercase">
              MISSION
            </p>
            <h3 className="text-white mb-5 text-center sm:text-start">
              <span className="text-black">Data-Driven,</span> 360° Growth.
            </h3>
            <p className="pt-2 mb-16 text-center sm:text-start text-black text-lg">
              We empower businesses with innovative web solutions and 360°
              marketing, so you focus on what you do best while we scale
              profitability, spark creativity, and build lasting customer
              connections.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Beliefs;
