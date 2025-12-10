// src/Sections/About.jsx
import React from "react";

export default function About() {
  return (
    <section id="about" className="w-full bg-white">
      {/* top thin line across full width */}
      <div className="h-px bg-gray-200" />

      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-12 gap-6 items-stretch">
          {/* LEFT: title, vertically centred */}
          <div className="col-span-12 md:col-span-5 flex items-center">
            <h2
              className="font-serif text-[#1f2933]"
              style={{
                fontSize: "4.4rem",
                fontWeight: 300,
                lineHeight: 1.05,
              }}
            >
              About us
            </h2>
          </div>

          {/* RIGHT: outlined box (text + directors) */}
          <div className="col-span-12 md:col-span-7 flex items-stretch">
            <div className="w-full border border-gray-200 flex flex-col">
              {/* top text part */}
              <div className="px-6 md:px-8 py-6">
                <p className="text-[#324547] text-[15px] md:text-[16px] leading-relaxed mb-4">
                  Energetic Engineering &amp; Co. is a trusted name in industrial
                  project execution, offering fabrication, erection, mechanical
                  works, piping, commissioning, and plant maintenance services.
                  Since 2006, backed by over 20+ years of engineering experience,
                  we have supported major industries with reliable,
                  cost-efficient, and on-time solutions.
                </p>

                <p className="text-[#324547] text-[15px] md:text-[16px] leading-relaxed">
                  Energetic Engineering &amp; Co. is led by a strong management
                  team ensuring quality, compliance, and on-time project delivery.
                </p>
              </div>

              {/* bottom green directors bar */}
              <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-200">
                <div className="bg-[rgb(232,250,153)] p-5 md:p-6 border-r border-gray-200">
                  <div className="text-[11px] tracking-wide text-[#6b7a79] mb-1">
                    MANAGING DIRECTOR
                  </div>
                  <div className="font-serif text-xl md:text-2xl text-[#163033]">
                    Quasar Alam
                  </div>
                </div>

                <div className="bg-[rgb(232,250,153)] p-5 md:p-6">
                  <div className="text-[11px] tracking-wide text-[#6b7a79] mb-1">
                    GENERAL MANAGER
                  </div>
                  <div className="font-serif text-xl md:text-2xl text-[#163033]">
                    Fakhre Alam
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom thin line across full width */}
      <div className="h-px bg-gray-200" />
    </section>
  );
}
