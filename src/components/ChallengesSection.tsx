'use client'
// Removed Framer Motion import

import { useEffect, useState } from "react"

const challengesData = [
  {
    title: "By Invite Only",
    description: "These challenges are not listed for everyone. You'll need to know the group's name or have a special code to join."
  },
  {
    title: "Flexible Access",
    description: "Some challenges might require a small participation fee, while others could be free—depending on how your group sets it up."
  },
  {
    title: "Shared Goals",
    description: "Together, you'll aim for collective milestones, enjoy friendly competition, and motivate each other toward a healthier lifestyle."
  }
];

export default function ChallengesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector(".challenges-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  return (
    <section 
      className={`bg-[#203d44] text-white ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-100px]"
      } transition-all duration-700`} 
      ref={(el) => el && el.classList.add('challenges-section')}
    >
      <div className="container mx-auto py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8 text-center text-white dark:text-white">Walk Together, Bond Stronger</h2>
          <p className="text-xl text-center text-white dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Group Challenges are exclusive fitness journeys designed for private groups. Whether it&rsquo;s your family, friends, colleagues, or a special community, these challenges bring you closer while keeping you on your toes&mdash;literally!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challengesData.map((challenge, index) => (
              <div
                key={index}
                className="relative"
              >
                <div className="p-6 bg-gradient-to-br from-blue-500 to-green-500 text-white hover:shadow-lg hover:scale-[1.02] transition-all duration-300 rounded-xl overflow-hidden">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">{challenge.title}</h3>
                    <p className="text-white">{challenge.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/challenges" 
              className="inline-flex items-center px-8 py-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 dark:bg-green-700 dark:hover:bg-green-800"
            >
              Create Your Group Challenge
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
