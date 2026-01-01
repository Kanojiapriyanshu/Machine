// src/Sections/About.jsx
import React from "react";

export default function About() {
  return (
    <section id="about" className="w-full bg-white">

      {/* FULL-WIDTH FRAME */}
      <div className="w-full border-y border-gray-200 mt-20">

        <div className="max-w-[1440px] xl:max-w-[1920px] mx-auto">

          {/* 50 / 50 GRID WITH CONNECTED DIVIDER */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] items-stretch">

            {/* LEFT SIDE */}
            <div className="px-6 md:px-12 lg:px-20 xl:px-27 py-12 md:py-24 xl:py-32 flex items-center">
              <h2
                className="font-serif text-[#1f2933] text-[2.5rem] md:text-[4.6rem] xl:text-[6.1rem]"
                style={{
                  fontWeight: 300,
                  lineHeight: 1.05,
                }}
              >
                About us
              </h2>
            </div>

            {/* VERTICAL DIVIDER — EDGE TO EDGE */}
            <div className="hidden md:block bg-gray-200" />

            {/* RIGHT SIDE */}
            <div className="px-6 md:px-12 lg:px-20 xl:px-27 py-12 md:py-20 xl:py-27 flex items-center border-t md:border-t-0 border-gray-200">
              <div className="w-full border border-gray-200">

                {/* TEXT BLOCK */}
                <div className="px-6 md:px-8 py-6">
                  <p className="text-[#6b7a79] text-[15px] leading-relaxed mb-5">
                    Energetic Engineering & Co. is a trusted name in industrial
                    project execution, offering fabrication, erection,
                    mechanical works, piping, commissioning, and plant
                    maintenance services. Since 2006, backed by over 20+ years
                    of engineering experience, we have supported major
                    industries with reliable, cost-efficient, and on-time
                    solutions.
                  </p>

                  <p className="text-[#6b7a79] text-[15px] leading-relaxed">
                    Energetic Engineering & Co. is led by a strong management
                    team ensuring quality, compliance, and on-time project
                    delivery.
                  </p>
                </div>

                {/* GREEN DIRECTOR STRIP */}
                <div className="grid grid-cols-2 border-t border-gray-200">
                  <div className="bg-[#E8FA99] px-6 py-5 border-r border-gray-200">
                    <div className="text-[11px] tracking-wide text-[#6b7a79] mb-1">
                      MANAGING DIRECTOR
                    </div>
                    <div className="font-serif text-lg text-[#163033]">
                      Quasar Alam
                    </div>
                  </div>

                  <div className="bg-[#E8FA99] px-6 py-5">
                    <div className="text-[11px] tracking-wide text-[#6b7a79] mb-1">
                      GENERAL MANAGER
                    </div>
                    <div className="font-serif text-lg text-[#163033]">
                      Fakhre Alam
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
