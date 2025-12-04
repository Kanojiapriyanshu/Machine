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
    <section id="industries" className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 py-14">
        {/* grid: left list (8 cols) | divider (1 col) | right block (3 cols) */}
        <div className="grid grid-cols-12 gap-6">
          {/* LEFT list */}
          <div className="col-span-12 md:col-span-8">
            <div className="space-y-10">
              {items.map((item) => (
                <div key={item.id} className="flex items-start gap-6">
                  {/* icon column - fixed width so icons align vertically */}
                  <div className="w-12 flex-shrink-0 mt-1">
                    <img
                      src={item.icon}
                      alt={`${item.title} icon`}
                      className="w-8 h-8 md:w-10 md:h-10"
                      style={{ display: "block" }}
                    />
                  </div>

                  {/* text */}
                  <div className="flex-1">
                    <h3 className="text-[20px] md:text-[22px] font-medium text-[#1f2b2d]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-[15px] text-[#465656] leading-relaxed max-w-[740px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider: shown only md+ (thin full-height line) */}
          <div className="hidden md:block col-span-1">
            <div className="h-full border-l border-gray-200" />
          </div>

          {/* RIGHT bloc */}
          <div className="col-span-12 md:col-span-3 flex items-start">
            <div className="pl-6 md:pl-10 pt-2">
              <div className="text-sm tracking-wider text-[#6b7a79]">WHAT WE DO</div>

              <h2
                className="font-serif text-[#1f2b2d] mt-4"
                style={{
                  fontSize: "3.2rem",
                  lineHeight: 1.05,
                  fontWeight: 700,
                  maxWidth: "520px",
                }}
              >
                Industries We serve
              </h2>

              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-3 text-black font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
              >
                <span>Contact us</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* thin bottom border to match design */}
      <div className="h-px bg-gray-200" />
    </section>
  );
}
