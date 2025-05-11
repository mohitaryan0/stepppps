'use client';

import { BlogCarousel } from "@/components/blog/BlogCarousel";
import React from 'react';
const text="Latest from our Blog";
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

export default function BlogSection() {
  return (
    <section className="bg-gray-300 dark:bg-gray-dark py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Text Content */}
        <div className="flex-1">
          
          <h2 className="text-4xl md:text-6xl font-semibold mb-20">
            {text.split(' ').map((word, wordIndex) => (
              <React.Fragment key={wordIndex}>
                {wordIndex > 0 && <span className="inline-block mx-0.1">&nbsp;</span>}
                <span className="inline-block">
                  {word.split('').map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className="inline-block animate-gradient-letter"
                      style={{ animationDelay: `${(wordIndex * 10 + charIndex) * 0.1}s` }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </React.Fragment>
            ))}
          </h2>
          <p className="text-lg leading-7 mb-4">
            Stay updated with our latest insights and stories about fitness, wellness, and community engagement.
          </p>
          <p className="text-lg leading-7">
            From personal journeys to new features, we share everything that matters in the Steppps community.
          </p>
        </div>

        {/* Blog Carousel */}
        <div className="flex-1 h-[650px] overflow-hidden w-full max-w-3xl md:max-w-50%">
          <BlogCarousel posts={blogPosts} />
        </div>
      </div>
    </section>
  );
}
