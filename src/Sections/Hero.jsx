import React from "react";

/* ✅ Resolve video and poster correctly in Vite */
const heroVideoUrl = new URL("../assets/videos/Hero_video.mp4", import.meta.url).href;
// ❗ Only use this line if header.jpg actually exists.
// If you don't have header.jpg, REMOVE this line and remove poster={headerPosterUrl}.
const headerPosterUrl = new URL("../assets/images/header.jpg", import.meta.url).href;

export default function Hero() {
  return (
    <>
      {/* ================= HERO TEXT SECTION ================= */}
      <section className="w-full bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-20">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

            {/* LEFT — Heading */}
            <div className="md:col-span-2 flex items-center">
              <h1 className="font-serif text-gray-800 leading-tight">
                <span className="block text-3xl sm:text-4xl md:text-[56px] lg:text-[72px] xl:text-[80px]">
                  High-Impact Engineering for
                </span>

                <span className="block text-4xl sm:text-5xl md:text-[56px] lg:text-[72px] xl:text-[80px]">
                  Critical Industrial Operations
                </span>
              </h1>
            </div>

            {/* RIGHT — Description */}
            <div className="md:col-span-1 flex">
              <div className="w-full border-l-2 border-gray-200 pl-8 flex flex-col justify-center">
                <p className="text-gray-600 text-lg md:text-xl max-w-md">
                  Turnarounds, maintenance, and complete engineering solutions executed with zero downtime.
                </p>

                <a
                  href="#learn"
                  className="mt-6 inline-flex items-center gap-2 text-gray-900 font-medium"
                >
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Divider under text */}
        <div className="h-px bg-gray-200" />
      </section>

      {/* ================= HERO VIDEO SECTION ================= */}
      <section className="w-full">
        <div className="w-full h-[55vh] md:h-[60vh] lg:h-[90vh] overflow-hidden">

          <video
            className="w-full h-full object-cover"
            src={heroVideoUrl}
            poster={headerPosterUrl}   // ❗ REMOVE if no poster image
            autoPlay
            muted
            loop
            playsInline
          />

        </div>
      </section>
    </>
  );
}
