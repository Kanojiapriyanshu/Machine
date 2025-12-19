import React from "react";

const heroVideoUrl = new URL("../assets/videos/Hero_video.mp4", import.meta.url).href;
const headerPosterUrl = new URL("../assets/images/header.jpg", import.meta.url).href;

export default function Hero() {
  return (
    <>
      {/* ================= HERO TEXT ================= */}
      <section className="w-full bg-white">

        {/* EDGE-TO-EDGE FRAME */}
        <div className="w-full border-y border-gray-200">

          {/* IMPORTANT: NO vertical padding here */}
          <div className="max-w-[1440px] mx-auto">

            {/* GRID DEFINES FULL HEIGHT */}
            <div className="grid grid-cols-[2fr_1px_1fr] items-stretch">

              {/* LEFT — HEADING */}
              <div className="px-8 py-40 flex items-center">
                <h1
                  className="font-serif text-[#16202a]"
                  style={{
                    fontSize: "65px",
                    lineHeight: "1.05",
                    maxWidth: "920px",
                  }}
                >
                  <span className="block">
                    High-Impact Engineering for
                  </span>
                  <span className="block mt-2">
                    Critical Industrial Operations
                  </span>
                </h1>
              </div>

              {/* VERTICAL DIVIDER — TOUCHES TOP & BOTTOM */}
              <div className="bg-gray-200" />

              {/* RIGHT — CONTENT */}
              <div className="px-8 py-40 flex items-center">
                <div>
                  <p className="text-[#5b6f6d] text-lg leading-relaxed max-w-[320px]">
                    Turnarounds, maintenance, and complete engineering solutions
                    executed with zero downtime.
                  </p>

                  <a
                    href="#learn"
                    className="mt-6 inline-flex items-center gap-2 text-[#16202a] font-medium"
                  >
                    <span>Learn more</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
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
        </div>
      </section>

      {/* ================= HERO VIDEO ================= */}
      <section className="w-full">
        <div className="w-full h-[55vh] md:h-[60vh] lg:h-[90vh] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            src={heroVideoUrl}
            poster={headerPosterUrl}
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