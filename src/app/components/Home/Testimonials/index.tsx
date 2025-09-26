"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { testimonials } from "@/app/types/testimonials";
import TestimonialSkeleton from "../../Skeleton/Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TestimonialType {
  name: string;
  profession: string;
  comment: string;
  imgSrc: string;
  rating: number;
}

interface TestimonialCardProps {
  items: TestimonialType;
}

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: false,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 2000,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
  appendDots: (dots: React.ReactNode) => (
    <div style={{ marginTop: "20px" }}>
      <ul className="flex justify-center space-x-2">{dots}</ul>
    </div>
  ),
  customPaging: () => (
    <div className="w-3 h-3 bg-gray-300 rounded-full hover:bg-yellow-500 transition-colors" />
  ),
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ items }) => {
  const validRating = Math.min(Math.max(items.rating, 0), 5);

  return (
    <div className="p-4 h-full">
      <div className="bg-white dark:bg-darkHeroBg shadow-md rounded-2xl p-6 h-72 flex flex-col justify-between">
        {/* Avatar + Name */}
        <div className="flex items-center mb-4">
          <Image
            src={items.imgSrc}
            alt={`${items.name} - ${items.profession} testimonial image`}
            width={60}
            height={60}
            className="rounded-full object-cover border border-gray-200"
          />
          <div className="ml-3">
            <p className="text-base font-semibold text-black dark:text-white">
              {items.name}
            </p>
            <p className="text-sm text-gray-500">{items.profession}</p>
          </div>
        </div>

        {/* Comment */}
        <p className="text-sm text-gray-700 dark:text-gray-300 flex-1 leading-relaxed mb-4">
          {items.comment}
        </p>

        {/* Rating */}
        <div className="flex">
          {Array.from({ length: 5 }, (_, i) => (
            <Icon
              key={i}
              icon="twemoji:star"
              width="18"
              className={`mr-1 ${
                i < validRating ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Testimonial: React.FC = () => {
  const [testimonals, setTestimonials] = useState<testimonials[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setTestimonials(data.TestimonialsData);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section
      className="bg-testimonial dark:bg-darkmode bg-cover bg-center overflow-hidden relative"
      id="test"
    >
      <div className="container mx-auto max-w-7xl px-4 py-6">
        <div className="text-center">
          <h2 className="my-3 text-2xl md:text-5xl font-bold leading-tight">
            Proof of growth, straight from our clients.
          </h2>
        </div>

        <div className="mt-12">
          <Slider {...settings}>
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <TestimonialSkeleton key={i} />
                ))
              : testimonals.map((items, i) => (
                  <TestimonialCard key={i} items={items} />
                ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
