import React from "react";

const features = [
  {
    image: "/images/features/socialnet.png",
    title: "Fitness - Social Network",
    text: "With our latest upcoming update, we will be introducing Trails, Steppps' very own social network. Follow, Get Followed, Share, Like, Comment and thrive...",
    href: "/strategy",
  },
  {
    image: "/images/features/challenges.png",
    title: "Team Challenges",
    text: "If you're not one for the individual steps challenges, then group/team challenges might be your thing. Register with one of the IPL team challenges and swing for the fences.",
    href: "/results",
  },
  {
    image: "/images/features/progress.png",
    title: "Personal Challenges",
    text: "If Individual or Team challenges are not your thing and you like it more low key, try out our Premium Feature of setting up Personal Challenges. You're in control!",
    href: "/expertise",
  },
  {
    image: "/images/features/discover.png",
    title: "Various Fun Challenges",
    text: "Open/Free, Premium, Team Challenges - whichever fancies your style. Come register and be part of a community that is waiting to walk together and stay fit together.",
    href: "/awards",
  },
  {
    image: "/images/features/chat.png",
    title: "Chat with fellow Steppp'ers",
    text: "For Premium Subscribers, you can chat with other steppp'ers in Premium Challenges. Make key connections, solve each others' questions, help each other out and thrive!",
    href: "/support",
  },
  {
    image: "/images/features/week.png",
    title: "Keep Track - Day/Week/Month",
    text: "Stay on-track with the daily, weekly and monthly widgets being updated. These can be shared as and when you like with friends and family, with just a tap!",
    href: "/support",
  },
];

const CardSection: React.FC = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-10 pt-20 pb-40 bg-white dark:bg-gray-900"
    >
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-white">Features</h2>
        <p className="text-base text-white mt-2 mb-10">
          To get you started and keep going
        </p>
      </div>

      {/* Cards: 2 Rows of 3 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-20 max-w-6xl">
        {features.map((feature, index) => {
          // Logic: cards in odd positions go up/down
          const isTopRow = index < 3;
          const offset = (index % 2 === 0 && isTopRow) || (index % 2 === 1 && !isTopRow) ? "translate-y-5" : "-translate-y-5";

          return (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg text-center hover:shadow-2xl transition duration-300 overflow-hidden hover:scale-115 transform ${offset}`}
            >
              <a href={feature.href}>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-[450px] object-contain rounded-t-xl"
                />
              </a>
              <div className="p-4">
                <h3 className="text-lg font-bold text-[#203d44] mb-2">{feature.title}</h3>
                <p className="text-[#64748b] text-sm">{feature.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardSection;