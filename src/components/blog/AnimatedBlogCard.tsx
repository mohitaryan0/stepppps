'use client';

import { motion } from "framer-motion";
import { BlogCard } from "./BlogCard";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function AnimatedBlogCard({ title, description, date, author, image, index = 0 }) {
  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      custom={index}
      style={{
        transitionDelay: `${index * 0.1}s`
      }}
    >
      <BlogCard {...{ title, description, date, author, image }} />
    </motion.div>
  );
}
