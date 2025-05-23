import React from "react";
import { Metadata } from "next";
import ChallengesSection from "@/components/ChallengesSection";
import AboutSection from "@/components/About/AboutSection";
import { CombinedFeatures3DGrid } from "./features";
import AppPreview from "@/components/AppPreview/AppPreview";
import Testimonal from "@/components/Testimonal/Testimonal";
import BlogSection from "@/components/blog/BlogSection";
import PhotoCard from "@/components/ax";




export const metadata: Metadata = {
  title: "Stepppps",
  description: "This is Landing page",
  // other metadata
};

export default function Home() {
  return (
    <>
    
     
      

       <PhotoCard />
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