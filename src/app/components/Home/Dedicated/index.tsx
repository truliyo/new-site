"use client";
import React from "react";
import Image from "next/image";

const Dedicated = () => {
  return (
    <section className="relative bg-cover bg-center overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <Image
            src="/images/dedicated/spiral.svg"
            height={272}
            width={686}
            alt="spiral-design"
            className="absolute left-0 top-0 hidden lg:block -z-10"
          />
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-6 justify-self-center">
            <Image
              src="/images/dedicated/sam-new-one-ezgif.com-png-to-webp-converter.webp"
              alt="man-icon"
              width={416}
              height={530}
              className="mx-auto md:mx-0 rounded-4xl"
            />
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-6">
            <div className="relative">
              <Image
                src="/images/dedicated/comma.svg"
                alt="comma-image"
                width={200}
                height={106}
                className="absolute -top-16 -left-32 hidden lg:block"
              />
            </div>
            <h2 className="text-center -mr-1 lg:text-start  text-2xl lg:text-lg">
              I’m a visionary technologist with 20+ years of experience, including over a decade at Accenture in North America, where I delivered executive programs for Fortune 500 leaders such as Cisco, Citibank, and Sobeys. My journey from coder to strategic program leader gives me a distinctive blend of deep technical expertise and sharp business acumen. In 2017, I founded Truliyo Digital as a one-stop digital powerhouse that handles 360° marketing, allowing brand owners to focus on what they do best. We use performance-marketing strategies to launch, optimize, and scale campaigns. As a sought-after speaker and Asia Excellence Award recipient, I bring rigor and agility to help brands scale faster, smarter, and with less effort.
            </h2>

            <h5 className="mt-12 lg:pl-32 relative lg:before:block before:hidden before:absolute before:bg-black before:h-0.5 before:w-24 before:left-0 before:bottom-1/2 text-center lg:text-start">
              Sam Gupta, Founder
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dedicated;
