import React from "react";
import Icon1 from "../assets/icons/V1.svg";
import Icon2 from "../assets/icons/V2.svg";
import Icon3 from "../assets/icons/V3.svg";
import Icon4 from "../assets/icons/V4.svg";
import Icon5 from "../assets/icons/V5.svg";

const items = [
  {
    id: 1,
    icon: Icon1,
    title: "Power & Energy",
    desc:
      "We provide mechanical, piping, structural, and maintenance services for power plants, ensuring reliable operation and uninterrupted energy generation.",
  },
  {
    id: 2,
    icon: Icon2,
    title: "Petrochemical & Chemicals",
    desc:
      "We deliver structural, piping, equipment installation, erection, and shutdown services for petrochemical and chemical plants with safe, efficient, and compliance-driven execution.",
  },
  {
    id: 3,
    icon: Icon3,
    title: "Manufacturing",
    desc:
      "Our teams handle fabrication, machinery installation, repair works, and plant maintenance to enhance productivity and operational efficiency.",
  },
  {
    id: 4,
    icon: Icon4,
    title: "Heavy Engineering",
    desc:
      "We execute large-scale structural fabrication, heavy equipment erection, and mechanical works designed for heavy engineering environments.",
  },
  {
    id: 5,
    icon: Icon5,
    title: "Infrastructure Projects",
    desc:
      "From structural steel works to industrial sheds and civil support, we contribute to infrastructure projects with precision engineering and timely delivery.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="industries" className="w-full bg-white mt-20">

      {/* OUTER CONNECTED FRAME */}
      <div className="w-full border-y border-gray-200">

        <div className="max-w-[1440px] xl:max-w-[1920px] mx-auto px-8 md:px-12 lg:px-20 xl:px-27">

          {/* FLEX GRID */}
          <div className="flex flex-col md:flex-row">

            {/* LEFT (50%) */}
            <div className="w-full md:w-1/2 py-8 md:py-14 pr-0 md:pr-12">
              <div className="space-y-10">
                {items.map((item) => (
                  <div key={item.id} className="flex items-start gap-6">
                    
                    <div className="w-12 flex-shrink-0 mt-1">
                      <img
                        src={item.icon}
                        alt={`${item.title} icon`}
                        className="w-8 h-8 md:w-6 md:h-10"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-[20px] md:text-[22px] font-medium text-[#1f2b2d]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm md:text-[15px] text-[#465656] leading-relaxed max-w-[720px]">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* VERTICAL CONNECTED DIVIDER */}
            <div className="hidden md:flex justify-center">
              <div className="w-px bg-gray-200 h-full" />
            </div>

            {/* RIGHT (50%) */}
            <div className="w-full md:w-1/2 py-8 md:py-14 pl-0 md:pl-12 flex items-start border-t md:border-t-0 border-gray-200 pt-8 md:pt-0 mt-14">
              <div>
                <div className="text-sm tracking-wider text-[#6b7a79]">
                  WHAT WE DO
                </div>

                <h2
                  className="font-serif text-[#1f2b2d] mt-4 text-[2rem] md:text-[3.2rem] xl:text-[4.3rem]"
                  style={{
                    lineHeight: 1.05,
                    fontWeight: 300,
                    maxWidth: "520px",
                  }}
                >
                  Industries We serve
                </h2>

                <a
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-3 text-black font-medium"
                >
                  <span>Contact us</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
