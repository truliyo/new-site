// components/Booking.tsx
"use client";

import { useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import CountUp from "react-countup";

export default function Booking() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const iframe = document.createElement("iframe");
    iframe.src =
      "https://cal.com/truliyo-e1go1a/30min?theme=light&primaryColor=3b82f6";
    iframe.width = "100%";
    iframe.height = "700";
    iframe.setAttribute("frameBorder", "0");
    iframe.setAttribute(
      "allow",
      "camera; microphone; autoplay; clipboard-write"
    );
    iframe.className = "rounded-2xl shadow-lg w-full";

    containerRef.current.appendChild(iframe);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-10 mt-[100px]">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
        Book a 30-Minute Appointment
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT SIDE - Calendar */}
        <div ref={containerRef}></div>

        {/* RIGHT SIDE - Info Panel */}
        <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-center border border-gray-100">
          <h3 className="text-2xl lg:text-3xl font-bold text-[#1D99EC] mb-6 leading-snug">
            Interested in Getting in Touch <br /> with Our Sales Representative?
          </h3>

          <ol className="list-decimal list-inside text-gray-700 mb-8 space-y-3 text-base leading-relaxed">
            <li>Schedule the call by choosing from the available dates.</li>
            <li>
              After scheduling, our sales representative will send you a meeting
              invitation email.
            </li>
            <li>
              During the meeting, we will address all your doubts and queries.
            </li>
          </ol>

          <h4 className="text-xl font-semibold mb-5 text-gray-900">
            Our Proven Track Record as a Digital Marketing Agency
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-md text-center transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
              <Icon
                icon="mdi:trending-up"
                className="mx-auto mb-3 text-[#1D99EC]"
                width="32"
                height="32"
              />
              <p className="text-sm font-medium text-gray-600">
                Leads Generated
              </p>
              <p className="text-2xl font-extrabold text-[#1D99EC] mt-1">
                <CountUp end={4985623} duration={3} separator="," />
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-md text-center transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
              <Icon
                icon="mdi:phone"
                className="mx-auto mb-3 text-[#1D99EC]"
                width="32"
                height="32"
              />
              <p className="text-sm font-medium text-gray-600">
                Calls Generated
              </p>
              <p className="text-2xl font-extrabold text-[#1D99EC] mt-1">
                <CountUp end={3585952} duration={3} separator="," />
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-gradient-to-b from-blue-50 to-white rounded-2xl shadow-md text-center transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
              <Icon
                icon="mdi:currency-usd"
                className="mx-auto mb-3 text-[#1D99EC]"
                width="32"
                height="32"
              />
              <p className="text-sm font-medium text-gray-600">
                Revenue Generated
              </p>
              <p className="text-2xl font-extrabold text-[#1D99EC] mt-1">
                $<CountUp end={245821} duration={3} separator="," />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
