import React from "react";

const steps = [
  {
    id: 1,
    number: "01",
    title: "Site Survey & Planning",
    desc:
      "We begin with a detailed assessment of site conditions, drawings, scope, and technical requirements. This includes resource planning, manpower allocation, sequencing,"
  },
  {
    id: 2,
    number: "02",
    title: "Engineering & Fabrication",
    desc:
      "Our fabrication teams execute structural, piping, and mechanical works in controlled environments using approved materials, welding procedures, and QA/QC protocols."
  },
  {
    id: 3,
    number: "03",
    title: "On-Site Execution",
    desc:
      "Our certified workforce handles erection, alignment, welding, equipment installation, and mechanical completion with precision and supervision."
  },
  {
    id: 4,
    number: "04",
    title: "Testing, QA/QC & Handover",
    desc:
      "The final phase involves thorough inspections, pressure tests, NDT, documentation, commissioning support, and safety verification at the time of final delivery."
  }
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white">

      {/* Outer wrapper with top border */}
      <div className="w-full border-t border-gray-200">

        {/* HEADER SECTION (LEFT-ALIGNED EXACTLY LIKE SCREENSHOT) */}
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-10 py-64">

          <div className="max-w-3xl">

            {/* Small top label */}
            <div className="text-sm tracking-wider text-[#6b7a79]">
              HOW IT WORKS
            </div>

            {/* Main heading */}
            <h2
              className="font-serif text-[#16202a] mt-4 leading-tight"
              style={{
                fontSize: "2.8rem",
                fontWeight: 300
              }}
            >
              The Strength Behind
              <br />
              Our Engineering
            </h2>

            {/* Yellow line – aligned under heading */}
            <div className="">
              {/* <div className="w-5 h-1 bg-[#f5c400]"></div> */}
            </div>

          </div>
        </div>

        {/* GRID SECTION (4 STEPS) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t border-b border-gray-200">

          {steps.map((s) => (
            <div
              key={s.id}
              className="bg-white p-10 md:p-12 border-gray-200 border-b sm:border-b md:border-b-0 md:border-r last:border-r-0"
            >
              {/* Step number */}
              <div className="text-2xl md:text-3xl text-gray-300 font-medium">
                {s.number}
              </div>

              {/* Step title */}
              <h3 className="mt-6 text-lg md:text-xl text-[#1f2b2d] font-medium">
                {s.title}
              </h3>

              {/* Step description */}
              <p className="mt-4 text-sm md:text-[15px] text-[#4b5b5f] leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
