// src/Sections/Count.jsx
// Reference design PDF (local): /mnt/data/Energetic_v2_1.pdf

import React from "react";

const METRICS = [
  { value: "100M", label: "Hours of Industrial Assets Installed" },
  { value: "25+", label: "Years of Engineering Excellence" },
  { value: "1200+", label: "MT Piping Fabricated & Installed" },
  { value: "98%", label: "On-Time Project Delivery Rate" },
  { value: "100+", label: "Projects Completed for CPGL & Industrial Plants" },
  { value: "300+", label: "Industrial Projects Delivered" },
  { value: "1500000 Hrs", label: "Man-Hours / Successful Projects" },
  { value: "200+", label: "Skilled & Certified Workforce" },
];

export default function Count() {
  const ANIM_DURATION = 28; // seconds (increase = slower)

  return (
    <section className="w-full bg-white py-6">
      {/* top thin border to match reference */}
      <div className="border-b border-gray-200" />

      <div className="relative overflow-hidden">
        {/* left/right soft fade masks to make items appear/disappear smoothly */}
        <div className="absolute inset-y-0 left-0 w-24 pointer-events-none" style={{background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)"}} />
        <div className="absolute inset-y-0 right-0 w-24 pointer-events-none" style={{background: "linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)"}} />

        {/* marquee wrapper (duplicated items inside) */}
        <div
          className="count-marquee flex items-center"
          onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
          onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
          // touch devices: pause during touchstart
          onTouchStart={(e) => (e.currentTarget.style.animationPlayState = "paused")}
          onTouchEnd={(e) => (e.currentTarget.style.animationPlayState = "running")}
        >
          {[...METRICS, ...METRICS].map((m, idx) => (
            <div
              key={idx}
              className="inline-flex flex-col items-center justify-center px-12 py-6"
              style={{ minWidth: 260 }} // controls spacing / how many visible; tweak if needed
            >
              {/* Large serif number — match the screenshot */}
              <div
                className="font-serif text-[#16202a] font-bold"
                style={{ fontSize: "48px", lineHeight: 1 }}
              >
                {m.value}
              </div>

              {/* Small grey label under number */}
              <div className="text-[#6b7a79] text-sm mt-2 max-w-[220px] text-center leading-tight">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* bottom thin border */}
      <div className="border-t border-gray-200 mt-2" />

      {/* local CSS for marquee + mask behaviors */}
      <style>{`
        .count-marquee {
          display: inline-flex;
          white-space: nowrap;
          align-items: center;
          /* animate left by 50% because content is duplicated */
          animation: marquee-left ${ANIM_DURATION}s linear infinite;
          will-change: transform;
        }

        .count-marquee:hover,
        .count-marquee:active {
          animation-play-state: paused !important;
        }

        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .count-marquee { animation-duration: ${Math.round(ANIM_DURATION * 1.1)}s; }
          .count-marquee > div { min-width: 220px !important; padding-left: 10px; padding-right: 10px; }
        }
        @media (max-width: 640px) {
          .count-marquee { animation-duration: ${Math.round(ANIM_DURATION * 1.25)}s; }
          .count-marquee > div { min-width: 160px !important; padding-left: 8px; padding-right: 8px; }
        }
      `}</style>
    </section>
  );
}
