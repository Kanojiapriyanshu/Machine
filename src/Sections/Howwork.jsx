import React from "react";

/**
 * HowItWorks.jsx
 * Place at: src/Sections/HowItWorks.jsx
 *
 * Uses Tailwind CSS. Make sure src/index.css includes the font import and @tailwind directives.
 * Layout: 12-column grid where left title occupies full width above, then below a 4-column row of steps.
 */

const steps = [
  {
    id: 1,
    number: "01",
    title: "Site Survey & Planning",
    desc:
      "We begin with a detailed assessment of site conditions, drawings, scope, and technical requirements. This includes resource planning, manpower allocation, sequencing,",
  },
  {
    id: 2,
    number: "02",
    title: "Engineering & Fabrication",
    desc:
      "Our fabrication teams execute structural, piping, and mechanical works in controlled environments using approved materials, welding procedures, and QA/QC protocols.",
  },
  {
    id: 3,
    number: "03",
    title: "On-Site Execution",
    desc:
      "Our certified workforce handles erection, alignment, welding, equipment installation, and mechanical completion with precision and supervision.",
  },
  {
    id: 4,
    number: "04",
    title: "Testing, QA/QC & Handover",
    desc:
      "The final phase involves thorough inspections, pressure tests, NDT, documentation, commissioning support, and safety verification at the time of final delivery.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 py-12">
        {/* Title area */}
        <div className="mb-8">
          <div className="text-sm tracking-wider text-[#6b7a79]">HOW IT WORKS</div>
          <h2
            className="font-serif text-[#16202a] mt-4"
            style={{ fontSize: "2.6rem", lineHeight: 1.05, fontWeight: 700 }}
          >
            The Strength Behind
            <br />
            Our Engineering
          </h2>
        </div>

        {/* thin divider above steps */}
        <div className="h-px bg-gray-200" />

        {/* Steps row */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 border-t border-gray-100">
          {steps.map((s, idx) => (
            <div
              key={s.id}
              className={`relative bg-white p-10 md:p-12 border-b border-gray-100 ${
                idx < 3 ? "md:border-r md:border-gray-100" : ""
              }`}
            >
              {/* Number in pale gray */}
              <div className="text-2xl md:text-3xl text-gray-300 font-medium">{s.number}</div>

              <h3 className="mt-6 text-lg md:text-xl text-[#1f2b2d] font-medium">
                {s.title}
              </h3>

              <p className="mt-4 text-sm md:text-[15px] text-[#4b5b5f] leading-relaxed max-w-[320px]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* bottom divider */}
        <div className="h-px bg-gray-200 mt-6" />
      </div>
    </section>
  );
}
