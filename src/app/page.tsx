import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import { BlogCard } from "@/components/blog/BlogCard";
import ChallengesSection from "@/components/ChallengesSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/features/FeaturesSection";

const blogPosts = [
  {
    title: "🏃‍♂️ I'm Not Unfit. I'm Just... Stuck.",
    description: "I don't remember when I stopped moving.Maybe it was after the baby came. Or when work-from-home became permanent. Or maybe when 7,000.",
    date: "May 1, 2025",
    author: "Sidharth Vijayan",
    image: "/images/blog/blog-1.png"
  },
  {
    title: "Walk the Talk: Midday Strolls with Steppps",
    description: "A post lunch stroll at work Lunch breaks at work often involve mindless scrolling, rushed meals, or just staying glued to the desk. But...",
    date: "May 5, 2025",
    author: "Sidharth Vijayan",
    image: "/images/blog/blog-2.png"
  },
  {
    title: "Coming Soon:Steppps Chat: Connecting Steppers Like Never Before",
    description: "Steppps Chat - Coming soon to Paid Challenges We're excited to introduce a brand-new feature to Steppps that brings the community even...",
    date: "May 10, 2025",
    author: "Sidharth Vijayan",
    image: "/images/blog/blog-3.png"
  }
];

export const metadata: Metadata = {
  title: "Stepppps",
  description: "This is Landing page",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-[#203d44]">
        <div className="container mx-auto py-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">Featured Blog Posts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {blogPosts.map((post, index) => (
                <BlogCard key={index} {...post} />
              ))}
            </div>
            <Link 
              href="/blog" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:bg-green-700 dark:hover:bg-green-800"
            >
              View All Blogs
            </Link>
          </div>
        </div>
      </div>
      <FeaturesSection />
      <ChallengesSection />

      <AboutSection />
    </>
  );
}
