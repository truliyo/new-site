import React from "react";

const TestimonialSection: React.FC = () => (
  <div className="flex justify-center min-h-screen py-12 px-4 bg-white">
    <div className="relative flex flex-col md:flex-row bg-[#1D99EC] rounded-3xl w-full max-w-7xl md:min-h-[480px] overflow-visible p-8 md:p-16">
      
      {/* Image container with increased width */}
      <div className="relative md:absolute md:left-16 md:top-[-60px] md:h-[calc(100%+60px)] flex md:items-end w-full md:w-[400px] shrink-0">
        <img
          src="/images/dedicated/sam-new-img.png"
          alt="Person"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Text content with updated margin-left */}
      <div className="mt-10 md:mt-0 md:ml-[440px] text-white flex flex-col justify-center flex-1 z-10">
        <p className="text-3xl md:text-5xl font-semibold leading-snug mb-8">
          Sam, award-winning entrepreneur and speaker, founded Truliyo Digital to deliver 360° marketing strategies that help brands scale effortlessly.
        </p>
        <p className="text-xl font-bold">Sam Gupta</p>
        <p className="opacity-75 text-lg">Founder, Truliyo Digital</p>
      </div>
      
    </div>
  </div>
);

export default TestimonialSection;
