"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function CombinedFeatures3DGrid() {
  const features = [
    {
      title: "Track Your Steps",
      description:
        "Monitor your daily steps and progress towards your fitness goals with ease.",
      icon: <IconEaseInOut size={28} />,
      image: "/images/features/track.png",
    },
    {
      title: "Join Fitness Challenges",
      description:
        "Participate in exciting challenges like 'Walk Every Day in 2025' to stay motivated.",
      icon: <IconTerminal2 size={28} />,
      image: "/images/features/challenges.png",
    },
    {
      title: "Set Daily Goals",
      description:
        "Set and achieve daily step goals to keep your fitness journey on track.",
      icon: <IconAdjustmentsBolt size={28} />,
      image: "/images/features/goals.png",
    },
    {
      title: "Social Sharing",
      description:
        "Share your progress and runs with friends to inspire and compete.",
      icon: <IconHeart size={28} />,
      image: "/images/features/social.png",
    },
    {
      title: "Event Leaderboards",
      description:
        "Check leaderboards for events like IPL 2025 to see where you stand.",
      icon: <IconRouteAltLeft size={28} />,
      image: "/images/features/challenges.png",
    },
    {
      title: "Workout Stats",
      description:
        "View detailed stats like calories burned, distance covered, and weekly averages.",
      icon: <IconCloud size={28} />,
      image: "/images/features/stats.png",
    },
    {
      title: "Chat with Friends",
      description:
        "Stay connected with friends through in-app chat to discuss your fitness journey.",
      icon: <IconHelp size={28} />,
      image: "/images/features/chat.png",
    },
    {
      title: "Explore Trails",
      description:
        "Discover new trails and routes for your runs and walks in your area.",
      icon: <IconCurrencyDollar size={28} />,
      image: "/images/features/trails.png",
    },
  ];

const featuresText = "Features";

  return (
    <div className="bg-teal-dark dark:bg-teal-dark py-12">
      <div className="container mx-auto px-4">
        {/* Features Section Heading */}
        <div className="relative h-30 flex items-center justify-center group">
          {/* Top half of "Features" */}
          <span className="absolute text-5xl sm:text-5xl font-bold uppercase clip-top transition-transform duration-500 group-hover:-translate-y-3 select-none">
            {featuresText.split('').map((char, index) => (
              <span
                key={index}
                className="inline-block animate-gradient-letter"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {char}
              </span>
            ))}
          </span>

          {/* Bottom half of "Features" */}
          <span className="absolute text-5xl sm:text-5xl font-bold uppercase clip-bottom transition-transform duration-500 group-hover:translate-y-3 select-none">
            {featuresText.split('').map((char, index) => (
              <span
                key={index}
                className="inline-block animate-gradient-letter"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {char}
              </span>
            ))}
          </span>

          {/* Appearing single-line message */}
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center text-lg font-medium tracking-wide text-white dark:text-white px-6 py-2 rounded select-none whitespace-nowrap">
            Get you started and keep going...
          </span>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-12 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-xl border dark:border-neutral-800 bg-white dark:bg-neutral-900 py-10 px-6 shadow-md"
            >
              {/* Icon + Title inside green box (neutral background) */}
              <div className="flex items-center gap-2 mb-6 text-neutral-800 dark:text-neutral-100">
                {feature.icon}
                <h3 className="text-lg font-bold">{feature.title}</h3>
              </div>

              {/* Description and Image inside pink gradient 3D box */}
              <div className="relative w-full">
                <PinContainer title={feature.title} href="#" className="w-full">
                  <div className="flex flex-col gap-4 p-4 w-64 h-80 text-sm text-white leading-relaxed rounded-xl">
                    <div className="flex-1">
                      {feature.description}
                    </div>
                    <div className="flex-1">
                      <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </PinContainer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
