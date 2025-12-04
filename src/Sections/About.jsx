// src/Sections/About.jsx
import React from "react";

export default function About() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 py-20">
        {/* Grid: left big title (approx 1/2) | right content (1/2) */}
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* LEFT: Big serif title */}
          <div className="col-span-12 md:col-span-6 flex items-start">
            <h2
              className="font-serif text-[#1f2933]"
              style={{
                fontSize: "5rem", /* tuned for look in screenshot */
                lineHeight: 1.02,
                fontWeight: 700,
                maxWidth: "680px",
              }}
            >
              About us
            </h2>
          </div>

          {/* RIGHT: bordered content + director cards */}
          <div className="col-span-12 md:col-span-6">
            {/* Bordered text card */}
            <div className="border border-gray-200 p-6 md:p-8">
              <p className="text-[#324547] text-[16px] md:text-[17px] leading-relaxed mb-6">
                Energetic Engineering & Co. Is A Trusted Name In Industrial Project Execution,
                Offering Fabrication, Erection, Mechanical Works, Piping, Commissioning, And Plant
                Maintenance Services. Since 2006, Backed By Over 20+ Years Of Engineering Experience,
                We Have Supported Major Industries With Reliable, Cost-Efficient, And On-Time Solutions.
              </p>

              <p className="text-[#324547] text-[16px] md:text-[17px] leading-relaxed mb-0">
                Energetic Engineering & Co. Is Led By A Strong Management Team Ensuring Quality,
                Compliance, And On-Time Project Delivery.
              </p>

              {/* Director cards container: placed directly under the text inside same bordered box */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-0">
                <div
                  className="bg-[rgb(232,250,153)] p-6 border-t border-r border-gray-200"
                  style={{ borderTopWidth: "1px" }}
                >
                  <div className="text-xs tracking-wide text-[#47524a]">MANAGING DIRECTOR</div>
                  <div className="mt-3 font-serif text-2xl text-[#163033]">Quasar Alam</div>
                </div>

                <div className="bg-[rgb(232,250,153)] p-6 border-t border-gray-200">
                  <div className="text-xs tracking-wide text-[#47524a]">GENERAL MANAGER</div>
                  <div className="mt-3 font-serif text-2xl text-[#163033]">Fakhre Alam</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* subtle bottom divider like screenshot */}
      <div className="h-px bg-gray-200" />
    </section>
  );
}
