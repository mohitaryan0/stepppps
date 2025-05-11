'use client';

import AnimatedBlogCard from "@/components/blog/AnimatedBlogCard"

const blogPosts = [
  {
    title: "🏃‍♂️ I’m Not Unfit. I’m Just... Stuck.",
    description: "I don’t remember when I stopped moving.Maybe it was after the baby came. Or when work-from-home became permanent. Or maybe when 7,000.",
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
    description: "Steppps Chat - Coming soon to Paid Challenges We’re excited to introduce a brand-new feature to Steppps that brings the community even...",
    date: "May 10, 2025",
    author: "Sidharth Vijayan",
    image: "/images/blog/blog-3.png"
  },
  {
    title: "Building Reusable Components",
    description: "How to create maintainable and reusable React components.",
    date: "May 15, 2025",
    author: "Sarah Williams",
    image: "https://images.unsplash.com/photo-1501006673951-64d483694d11"
  },
  {
    title: "Why Short 10-15 Day Resolutions Can Outperform Year-Long Promises",
    description: "As the new year rolls in, Steppps challenges built around YOU many of us make ambitious resolutions - lose weight, exercise daily, or...",
    date: "May 20, 2025",
    author: "Sidharth Vijayan",
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b9122b"
  },
  {
    title: "How Setting Personal Challenges Can Transform Your Walking Habit",
    description: "Most of us walk every day—it’s a natural, effortless part of life. But what if your daily steps could be more than just a routine? What...",
    date: "May 25, 2025",
    author: "Sidharth Vijayan",
    image: "https://images.unsplash.com/photo-1498048682654-7484f7590008"
  },
  {
    title: "React Hooks Best Practices",
    description: "Mastering React hooks and custom hooks patterns.",
    date: "June 1, 2025",
    author: "James Wilson",
    image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
  },
  {
    title: "Next.js Advanced Features",
    description: "Exploring advanced Next.js features and optimizations.",
    date: "June 5, 2025",
    author: "Lisa Johnson",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
  },
  {
    title: "Tailwind CSS Best Practices",
    description: "Mastering Tailwind CSS for responsive designs.",
    date: "June 10, 2025",
    author: "Robert Davis",
    image: "https://images.unsplash.com/photo-1501088430049-71c7d68c3647"
  },
  {
    title: "Testing React Applications",
    description: "Comprehensive guide to testing React applications.",
    date: "June 15, 2025",
    author: "Karen Miller",
    image: "/images/blog/blog-1.png"
  },
  {
    title: "Performance Optimization",
    description: "Advanced performance optimization techniques.",
    date: "June 20, 2025",
    author: "William Anderson",
    image: "https://images.unsplash.com/photo-1501088430049-71c7d68c3647"
  },
  {
    title: "Security Best Practices",
    description: "Implementing security best practices in web applications.",
    date: "June 25, 2025",
    author: "Michael Thompson",
    image: "https://images.unsplash.com/photo-1501088430049-71c7d68c3647"
  }
];

export default function BlogPage() {
  return (
    <div className="container mx-auto">
      <div className="pt-30">
        <h1 className="text-4xl font-bold mb-8">Latest Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <AnimatedBlogCard key={index} {...post} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}