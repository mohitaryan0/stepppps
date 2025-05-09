import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="bg-white dark:bg-gray-900 text-black dark:text-white py-20 px-4 md:px-20">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left Text and Image */}
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Fitness Should Be Easy <br />
            Fun, and Part of Your Day <br />
            <span className="text-green-500">With Steppps.</span>
          </h2>
          <div className="rounded-lg overflow-hidden mt-10 shadow-xl transition-all duration-300 hover:scale-[1.05]">
            <Image
              src="/images/about/walking.png"
              alt="Team collaboration"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* Right Media and Stats */}
        <div className="flex flex-col justify-between">
          <div className="flex gap-4 mb-8">
            <div className="relative w-[200px] h-[140px] rounded-xl overflow-hidden">
            <a
    href="https://play.google.com/store/apps/details?id=com.mycompany.vruns"
    target="_blank"
    rel="noopener noreferrer"
  >
              <Image
                src="/images/about/google.png"
                alt="Blog 1"
                width={200}
                height={140}
                className="object-contain"  
              />
              </a>
            </div>
            <div className="relative w-[200px] h-[140px] rounded-xl overflow-hidden">
            <a
    href="https://apps.apple.com/us/app/steppps-steps-to-fitness/id6608976790"
    target="_blank"
    rel="noopener noreferrer"
  >
              <Image
                src="/images/about/apple.png"
                alt="Blog 2"
                width={200}
                height={140}
                className="object-contain"
              />
              </a>
              </div>
          </div>

          <p className="text-white-300 mb-6">
            Steppps makes fitness accessible and enjoyable for everyone. Our mission is to help you achieve your health goals through the power of habit, making physical activity a natural part of your daily routine.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
            {[
              { label: "Steps Tracked", value: "100M+" },
              { label: "Active Users", value: "10k+" },
              { label: "Challenges Created", value: "5k+" },
              { label: "Cities Connected", value: "100+" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <Link href="/about" className="inline-flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white text-xl cursor-pointer">
                ▶
              </div>
              <span className="uppercase text-sm tracking-wide">Learn More</span>
            </Link>
            <div className="relative w-[100px] h-[100px] rounded-xl overflow-hidden">
              <Image
                src="/images/about/scan.png"
                alt="Steppps Logo"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
