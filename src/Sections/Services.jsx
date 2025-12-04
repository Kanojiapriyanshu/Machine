// src/Sections/Services.jsx
import React from "react";

/*
  Services.jsx (updated)
  - Each service row is now an equal 50/50 partition on md+ (image left, content right)
  - Heights are equalized using fixed row height at different breakpoints
  - Right panel alternates background (lime for every second row) like your reference
  - Images are loaded via Vite-safe new URL(...) so they display correctly
*/

const img1 = new URL("../assets/images/img1.png", import.meta.url).href;
const img2 = new URL("../assets/images/img2.png", import.meta.url).href;
const img3 = new URL("../assets/images/img3.png", import.meta.url).href;
const img4 = new URL("../assets/images/img4.png", import.meta.url).href;
const img5 = new URL("../assets/images/img5.png", import.meta.url).href;

const SERVICES = [
  {
    id: 1,
    title: "Mechanical & Piping Works",
    desc:
      "Fabrication, installation, testing, and commissioning of mechanical and piping systems.",
    img: img1,
  },
  {
    id: 2,
    title: "Equipment Installation & Alignment",
    desc:
      "Precision equipment installation, alignment and pre-commissioning services.",
    img: img2,
  },
  {
    id: 3,
    title: "Structural Fabrication & Erection",
    desc:
      "Heavy structural fabrication, erection and site assembly for industrial projects.",
    img: img3,
  },
  {
    id: 4,
    title: "Shutdown & Turnaround Management",
    desc:
      "Planned shutdown execution, resources mobilization, and fast-track turnaround.",
    img: img4,
  },
  {
    id: 5,
    title: "Plant Operation & Maintenance",
    desc:
      "On-going plant operation support, preventive maintenance and reliability programs.",
    img: img5,
  },
];

export default function Services() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12">
        {/* heading */}
        <div className="mb-8">
          <p className="text-xs tracking-wide text-[#4b5c5a]">OUR CORE SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1B2D2A] leading-tight">
            Expertise That Drives <br /> Industrial Performance
          </h2>
        </div>

        {/* stacked rows, each row is a 2-column split (50/50) */}
        <div className="flex flex-col divide-y divide-gray-200">
          {SERVICES.map((s, idx) => {
            const isAlt = idx % 2 === 1; // alternate right panel color
            return (
              <div
                key={s.id}
                className="grid grid-cols-1 md:grid-cols-2 items-stretch"
              >
                {/* LEFT: image (50%) */}
                <div className="w-full">
                  <div className="w-full h-[280px] md:h-[420px] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover block"
                    />
                  </div>
                </div>

                {/* RIGHT: content panel (50%) */}
                <div
                  className={`flex items-center justify-center p-8 border-t md:border-t-0 md:border-l border-gray-200 ${
                    isAlt ? "bg-[#E6F89B]" : "bg-white"
                  }`}
                >
                  <div className="max-w-[360px] text-left">
                    <h3 className="font-serif text-2xl md:text-3xl leading-snug text-[#142f2a]">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-[#4b5b5b]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* thin divider */}
        <div className="h-px bg-gray-200 mt-8" />
      </div>
    </section>
  );
}
