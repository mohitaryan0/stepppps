import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Hero";
import ChallengesSection from "@/components/ChallengesSection";
import AboutSection from "@/components/About/AboutSection";
import { CombinedFeatures3DGrid } from "./abc";
import AppPreview from "@/components/AppPreview/AppPreview";
import Testimonal from "@/components/Testimonal/Testimonal";
import BlogSection from "@/components/blog/BlogSection";



export const metadata: Metadata = {
  title: "Stepppps",
  description: "This is Landing page",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Hero />
      

      
      <CombinedFeatures3DGrid />
    
      <div className="py-12 bg-gray-300 dark:bg-gray-dark">
        <AppPreview />
      </div>
      <ChallengesSection />
      <BlogSection />
      <Testimonal  />
      <AboutSection />
      
      
      
            

      
    </>
  );
}