'use client';

import { useState } from 'react';
import clsx from 'clsx';

export default function SplitPhotoCard() {
  const [activeCard, setActiveCard] = useState<null | 'active' | 'lazy'>(null);

  // Helper to detect mobile click
  const handleCardClick = (card: 'active' | 'lazy') => {
    if (window.innerWidth < 768) {
      setActiveCard((prev) => (prev === card ? null : card));
    }
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-gray-300 dark:bg-gray-dark px-4">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("/images/hero/tree.png")`,
          opacity: 0.2,
          zIndex: 0,
        }}
      ></div>
      <div className="relative flex flex-col max-w-5xl w-full p-4 z-10">
        <div className="md:hidden text-center mb-8">
          <h1 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight mt-24">
            Where do you belong on your wellness journey?
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center h-auto md:h-[500px] space-y-8 md:space-y-0 md:space-x-8">
          <div className="hidden md:block flex-shrink-0 w-1/4 text-left">
            <h1 className="text-3xl font-bold leading-tight text-black dark:text-white md:text-4xl md:leading-tight -ml-30">
              Where do you belong on your wellness journey?
            </h1>
          </div>

          {/* Active Card */}
          <div className="relative flex-1 flex items-start md:items-center justify-start md:justify-center bg-transparent md:ml-8">
            <div
              className="relative group w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-cover bg-center rounded-full transition-all duration-500 ease-in-out shadow-md md:group-hover:w-[90%] md:group-hover:h-[90%] md:group-hover:rounded-none md:group-hover:shadow-2xl md:group-hover:shadow-black/30"
              style={{
                backgroundImage: `url("/images/hero/active.png")`,
              }}
              onClick={() => handleCardClick('active')}
            >
              <div
                className={clsx(
                  "absolute inset-0 rounded-full z-0 blur-[20px] sm:blur-[30px] scale-x-[0.4] saturate-0 transition-all duration-500 ease-in-out pointer-events-none",
                  {
                    "opacity-0 group-hover:opacity-[0.18] group-hover:blur-[30px] group-hover:saturate-100 group-hover:scale-[2.5] group-hover:-translate-x-[10%]":
                      true,
                    "opacity-[0.18] blur-[30px] saturate-100 scale-[2.5] -translate-x-[10%]":
                      activeCard === 'active',
                  }
                )}
                style={{
                  backgroundImage: `url("/images/hero/active.png")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'bottom',
                  transformOrigin: 'right',
                }}
              ></div>

              <div
                className={clsx(
                  "absolute top-1/2 left-full -translate-y-1/2 md:top-[100%] md:left-0 md:translate-y-4 md:-translate-x-0 text-sm sm:text-base leading-6 transition-all duration-500 z-10 w-40 sm:w-48 md:w-64 text-left pointer-events-none",
                  {
                    "opacity-0 group-hover:opacity-100 group-hover:ml-4 md:group-hover:ml-0 md:group-hover:translate-x-0":
                      true,
                    "opacity-100 ml-4": activeCard === 'active',
                  }
                )}
              >
                {`I’m doing alright. No major issues — and I’d like to keep it that way. I don’t need a coach yelling at me. Just a smart way to stay on track. If that’s walking with some purpose and fun — I’m in.`}
              </div>
            </div>
          </div>

          {/* Lazy Card */}
          <div className="relative flex-1 flex items-start md:items-center justify-start md:justify-center bg-transparent">
            <div
              className="relative group w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-cover bg-center rounded-full transition-all duration-500 ease-in-out shadow-md md:group-hover:w-[90%] md:group-hover:h-[90%] md:group-hover:rounded-none md:group-hover:shadow-2xl md:group-hover:shadow-black/30"
              style={{
                backgroundImage: `url("/images/hero/lazy.png")`,
              }}
              onClick={() => handleCardClick('lazy')}
            >
              <div
                className={clsx(
                  "absolute inset-0 rounded-full z-0 blur-[20px] sm:blur-[30px] scale-x-[0.4] saturate-0 transition-all duration-500 ease-in-out pointer-events-none",
                  {
                    "opacity-0 group-hover:opacity-[0.18] group-hover:blur-[30px] group-hover:saturate-100 group-hover:scale-[2.5] group-hover:-translate-x-[10%]":
                      true,
                    "opacity-[0.18] blur-[30px] saturate-100 scale-[2.5] -translate-x-[10%]":
                      activeCard === 'lazy',
                  }
                )}
                style={{
                  backgroundImage: `url("/images/hero/lazy.png")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'bottom',
                  transformOrigin: 'right',
                }}
              ></div>

              <div
                className={clsx(
                  "absolute top-1/2 left-full -translate-y-1/2 md:top-[100%] md:left-0 md:translate-y-4 md:-translate-x-0 text-sm sm:text-base leading-6 transition-all duration-500 z-10 w-40 sm:w-48 md:w-64 text-left pointer-events-none",
                  {
                    "opacity-0 group-hover:opacity-100 group-hover:ml-4 md:group-hover:ml-0 md:group-hover:translate-x-0":
                      true,
                    "opacity-100 ml-4": activeCard === 'lazy',
                  }
                )}
              >
                {`I’ve been sitting more than I should. My energy’s dropped, the belly’s grown, and honestly — I’m not okay with where this is heading. I’m here to take control, one small step at a time. Let’s walk this back.`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
