// src/Sections/Founder.jsx
import React from "react";
import founderImg from "../assets/images/profile.png";

export default function Founder() {
  return (
    <section className="w-full bg-white mt-10">

      {/* OUTER EDGE-TO-EDGE FRAME */}
      <div className="border-y border-gray-200 w-full">

        <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">

          {/* GRID WITH CONNECTED VERTICAL LINE */}
          <div className="grid grid-cols-12">

            {/* LEFT: IMAGE */}
            <div className="col-span-12 md:col-span-5 py-14">
              <div className="border border-gray-200 p-6 bg-white">
                <div className="border border-gray-100 p-4">
                  <img
                    src={founderImg}
                    alt="Quasar Alam, Founder & MD"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* VERTICAL LINE (CONNECTED) */}
            <div className="hidden md:flex col-span-1 justify-center">
              <div className="w-px bg-gray-200 h-full" />
            </div>

            {/* RIGHT: CONTENT */}
            <div className="col-span-12 md:col-span-6 py-14 flex flex-col">

              {/* TITLE BOX */}
              <div className="border border-gray-200 px-6 py-4 mb-6">
                <h3 className="font-serif text-[#16202a] text-[36px] font-weight-400">
                  Founder’s Message
                </h3>
              </div>

              {/* MESSAGE */}
              <div className="border border-gray-200 px-6 py-6 mb-6">
                <div className="text-[98px] text-[#9AA8A8] leading-none mb-4">“</div>

                <div className="text-[#8F9FA3] text-sm md:text-[15px] leading-relaxed space-y-4">
                  <p>
                    Energetic Engineering & Co. was built on a commitment to deliver
                    safe, reliable, and high-quality engineering solutions.
                  </p>

                  <p>
                    With over 25 years of industry experience, we ensure every
                    project is executed with precision, disciplined planning, and
                    strict compliance to industry standards.
                  </p>

                  <p>
                    Our focus remains on strengthening capabilities, empowering
                    skilled teams, and delivering measurable value to our clients
                    across diverse industrial sectors.
                  </p>
                </div>
              </div>

              {/* CTA + NAME */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch">

                <a
                  href="/contact"
                  className="border border-gray-200 px-6 py-4 text-sm text-[#111827] hover:bg-gray-50 text-center"
                >
                  Contact us
                </a>

                <div className="flex-1 border border-gray-200 px-6 py-4">
                  <div className="font-serif text-lg text-[#122426]">
                    Quasar Alam
                  </div>
                  <div className="text-xs text-[#8F9FA3] mt-1">
                    Founder & MD, Energetic Engineering Co.
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
