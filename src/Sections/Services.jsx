// src/Sections/Services.jsx
import React from "react";

/*
  Stacking Services section:
  - Outer height = services.length * 100vh
  - Each card is sticky and fills the viewport (h-screen)
  - zIndex = idx + 1 so later cards (when scrolled to) appear on top of earlier ones
  - Images loaded through Vite-safe URLs (new URL(...).href)
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
  const count = SERVICES.length;
  const outerHeightStyle = { height: `${count * 100}vh` };

  return (
    <section id="services" className="w-full bg-white">
      {/* Heading (full-width) */}
      <div className="w-full px-4 md:px-12 lg:px-24 xl:px-32 py-8 md:py-12 max-w-none">
        <p className="text-sm md:text-lg tracking-wide text-[#4b5c5a]">OUR CORE SERVICES</p>
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-serif text-[#1B2D2A] leading-tight mt-2">
          Expertise That Drives <br /> Industrial Performance
        </h2>
      </div>

      {/* stacking area */}
      <div className="w-full relative" style={outerHeightStyle}>
        <div className="w-full h-full">
          {SERVICES.map((s, idx) => {
            const isAlt = idx % 2 === 1;

            return (
              <div
                key={s.id}
                className="w-full min-h-[90vh] md:h-screen md:sticky md:top-0 flex items-center"
                style={{ zIndex: idx + 1 }}
              >
                <div className="w-full grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[90vh] md:h-full">
                  {/* LEFT: image */}
                  <div className="w-full h-[40vh] md:h-full">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover block"
                    />
                  </div>

                  {/* RIGHT: content (centered) */}
                  <div
                    className={`flex items-center justify-center p-6 md:p-16 border-t md:border-t-0 md:border-l border-gray-200 min-h-[50vh] md:min-h-0 ${
                      isAlt ? "bg-[#E6F89B]" : "bg-white"
                    }`}
                  >
                    <div className="max-w-[720px] xl:max-w-[960px] text-left w-full px-4 md:px-0">
                      <h3 className="font-serif text-xl md:text-3xl xl:text-4xl leading-snug text-[#142f2a]">
                        {s.title}
                      </h3>
                      <p className="mt-3 md:mt-4 text-sm md:text-base xl:text-lg text-[#4b5b5b] leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="h-px bg-gray-200" />
    </section>
  );
}
