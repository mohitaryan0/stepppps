"use client";

import React from "react";
import { AnimatedTestimonials } from "@/components/Testimonal/animated-testimonials";

const testimonials = [
  {
    quote: "The fitness social network feature has completely transformed my workout routine. I love connecting with other fitness enthusiasts!",
    name: "Nandagopal P.",
    designation: "Fitness Enthusiast",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&dpr=2",
  },
  {
    quote: "The team challenges have been amazing for keeping me motivated. The sense of community is incredible!",
    name: "Mohit Aryan",
    designation: "Team Member",
    src: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=500&h=500&dpr=2",
  },
  {
    quote: "The personal challenges feature has helped me set and achieve my fitness goals. Highly recommend!",
    name: "Christine",
    designation: "Team Leader",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&dpr=2",
  },
];

const Testimonal = () => {
  return (
    <section className="py-20 bg-gray-300 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center ">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">What Our Users Say</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Real experiences from our community</p>
        </div>
        
        <div className="max-w-6xl mx-auto w-full">
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </div>
    </section>
  );
};

export default Testimonal;