// src/Sections/Founder.jsx
import React from "react";
import founderImg from "../assets/images/profile.png"; // <- use this if file is in src/assets/images/

export default function Founder() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 py-14">
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* LEFT: framed portrait */}
          <div className="col-span-12 md:col-span-5">
            <div className="bg-white p-6 border border-gray-200 shadow-sm max-w-full">
              <div className="border border-gray-100 p-4 bg-white">
                <img
                  src={founderImg}
                  alt="Quasar Alam, Founder & MD"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="hidden md:block col-span-1">
            <div className="h-full border-l border-gray-200" />
          </div>

          {/* RIGHT: founder message block */}
          <div className="col-span-12 md:col-span-6">
            <div className="border border-gray-200 p-4 bg-white mb-6">
              <h3 className="font-serif text-[#16202a]" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                Founder's Message
              </h3>
            </div>

            <div className="border border-gray-200 p-6 bg-white mb-6">
              <div className="text-[48px] text-[#9aa8a8] leading-none mb-4">“</div>
              <div className="text-[#4b5b5b] text-sm md:text-base leading-relaxed">
                <p>
                  Energetic Engineering & Co. was built on a commitment to deliver safe, reliable, and high-quality engineering solutions.
                </p>
                <p className="mt-3">
                  With over 25 years of industry experience, we ensure every project is executed with precision, disciplined planning, and strict compliance to industry standards.
                </p>
                <p className="mt-3">
                  Our focus remains on strengthening capabilities, empowering skilled teams, and delivering measurable value to our clients across diverse industrial sectors.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="flex-grow-0">
                <a href="/contact" className="inline-block border border-gray-200 bg-white px-6 py-4 text-sm text-[#111827] hover:bg-gray-50">
                  Contact us
                </a>
              </div>

              <div className="flex-1 border border-gray-200 bg-white p-4">
                <div className="font-serif text-lg text-[#122426]">Quasar Alam</div>
                <div className="text-xs text-[#6b7a79] mt-1">
                  Founder & MD, Energetic Engineering Co.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-gray-200" />
    </section>
  );
}
