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
    },
    {
      title: "Join Fitness Challenges",
      description:
        "Participate in exciting challenges like 'Walk Every Day in 2025' to stay motivated.",
      icon: <IconTerminal2 size={28} />,
    },
    {
      title: "Set Daily Goals",
      description:
        "Set and achieve daily step goals to keep your fitness journey on track.",
      icon: <IconAdjustmentsBolt size={28} />,
    },
    {
      title: "Social Sharing",
      description:
        "Share your progress and runs with friends to inspire and compete.",
      icon: <IconHeart size={28} />,
    },
    {
      title: "Event Leaderboards",
      description:
        "Check leaderboards for events like IPL 2025 to see where you stand.",
      icon: <IconRouteAltLeft size={28} />,
    },
    {
      title: "Workout Stats",
      description:
        "View detailed stats like calories burned, distance covered, and weekly averages.",
      icon: <IconCloud size={28} />,
    },
    {
      title: "Chat with Friends",
      description:
        "Stay connected with friends through in-app chat to discuss your fitness journey.",
      icon: <IconHelp size={28} />,
    },
    {
      title: "Explore Trails",
      description:
        "Discover new trails and routes for your runs and walks in your area.",
      icon: <IconCurrencyDollar size={28} />,
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Features Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get you started and keep going...
          </p>
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

              {/* Description inside pink gradient 3D box */}
              <div className="relative w-full">
                <PinContainer title={feature.title} href="#" className="w-full">
                  <div className="p-4 w-64 h-80 text-sm text-white leading-relaxed rounded-xl">
                    {feature.description}
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
