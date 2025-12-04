import React from "react";

/**
 * Hero.jsx
 * Place this file at src/Sections/Hero.jsx
 * - Headline text can be edited to match exact line breaks like the screenshot.
 * - Replace /assets/header.mp4 with your real video (put it in public/assets/header.mp4)
 */

export default function Hero() {
  return (
    <>
      {/* HERO TEXT AREA */}
      <section className="w-full bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 py-20">
          {/* Grid: left big headline (2/3) and right info (1/3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {/* LEFT: Headline (spans 2 columns on md+) */}
            <div className="md:col-span-2 flex items-center">
              <h1
                className="font-serif text-gray-800 leading-tight"
                // emulate the two-line look by inserting a <br /> at the desired place
              >
                <span className="block text-3xl sm:text-4xl md:text-[56px] lg:text-[72px] xl:text-[80px]">
                  High-Impact Engineering for
                </span>
                <span className="block text-4xl sm:text-5xl md:text-[56px] lg:text-[72px] xl:text-[80px]">
                  Critical Industrial Operations
                </span>
              </h1>
            </div>

            {/* RIGHT: vertical divider + description */}
            <div className="md:col-span-1 flex">
              <div className="w-full border-l-2 border-gray-200 pl-8 flex flex-col justify-center">
                <p className="text-gray-600 text-lg md:text-xl max-w-md">
                  Turnarounds, maintenance, and complete engineering solutions executed with zero downtime.
                </p>

                <a
                  href="#learn"
                  className="mt-6 inline-flex items-center gap-2 text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
                >
                  <span>Learn more</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* thin light divider across bottom of the text area (matches screenshot) */}
        <div className="h-px bg-gray-200" />
      </section>

      {/* FULL-WIDTH HERO VIDEO (dummy) */}
      <section className="w-full">
        <div className="w-full h-[55vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src="../assets/videos/Hero_video.mp4"
            poster="/assets/header.jpg"
            autoPlay
            muted
            loop
            playsInline
            aria-label="Decorative background video"
          />
        </div>
      </section>
    </>
  );
}
