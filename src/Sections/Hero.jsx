import React, { useEffect, useRef, useState } from "react";

const heroVideoUrl = new URL("../assets/videos/Hero_video.mp4", import.meta.url).href;
const headerPosterUrl = new URL("../assets/images/header.jpg", import.meta.url).href;

export default function Hero() {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoContainerRef.current) return;

      const rect = videoContainerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const videoHeight = rect.height;
      
      // Calculate scroll progress (0 to 1)
      // Video starts growing when it enters viewport
      // Completes when it's fully scrolled past
      const scrollStart = windowHeight;
      const scrollEnd = -videoHeight;
      const totalScrollDistance = scrollStart - scrollEnd;
      const currentScroll = scrollStart - rect.top;
      const scrollProgress = Math.max(0, Math.min(1, currentScroll / totalScrollDistance));
      
      // Scale from 1 to 2.0 for full screen coverage effect
      // This ensures video covers full screen when scroll completes
      const newScale = 1 + (scrollProgress * 1.0);
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* ================= HERO TEXT ================= */}
      <section className="w-full bg-white">

        {/* EDGE-TO-EDGE FRAME */}
        <div className="w-full border-y border-gray-200">

          {/* IMPORTANT: NO vertical padding here */}
          <div className="max-w-[1440px] xl:max-w-[1920px] mx-auto">

            {/* GRID DEFINES FULL HEIGHT */}
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1px_1fr] items-stretch">

              {/* LEFT — HEADING */}
              <div className="px-6 md:px-8 xl:px-32 py-16 md:py-40 xl:py-53 flex items-center">
                <h1
                  className="font-serif text-[#16202a] text-[32px] md:text-[55px] xl:text-[58px]"
                  style={{
                    lineHeight: "1.05",
                    maxWidth: "920px",
                  }}
                >
                  <span className="block xl:block">
                    High-Impact Engineering for
                  </span>
                  <span className="block mt-2 xl:block">
                    Critical Industrial Operations
                  </span>
                </h1>
              </div>

              {/* VERTICAL DIVIDER — TOUCHES TOP & BOTTOM */}
              <div className="hidden md:block bg-gray-200" />

              {/* RIGHT — CONTENT */}
              <div className="px-6 md:px-8 xl:px-32 py-12 md:py-40 xl:py-53 flex items-center border-t md:border-t-0 border-gray-200">
                <div>
                  <p className="text-[#5b6f6d] text-lg leading-relaxed max-w-[320px]">
                    Turnarounds, maintenance, and complete engineering solutions
                    executed with zero downtime.
                  </p>

                  <a
                    href="#about"
                    onClick={handleLearnMoreClick}
                    className="mt-6 inline-flex items-center gap-2 text-[#16202a] font-medium hover:opacity-80 transition-opacity"
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
      <section className="w-full" ref={videoContainerRef}>
        <div className="w-full h-[55vh] md:h-[60vh] lg:h-[90vh] xl:h-screen overflow-hidden relative">
          <video
            ref={videoRef}
            className="w-full h-full object-cover transition-transform duration-100 ease-out"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "center center",
            }}
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