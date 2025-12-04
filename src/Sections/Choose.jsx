import React from "react";

/* Icons (place these files in src/assets/icons/) */
import IconHours from "../assets/icons/HourglassMedium.svg";
import IconCertificate from "../assets/icons/Certificate.svg";
import IconTimer from "../assets/icons/Timer.svg";
import IconUsers from "../assets/icons/Users.svg";
import IconHardHat from "../assets/icons/HardHat.svg";

/* Certification badges (place these in src/assets/images/) */
import Cert1 from "../assets/icons/image 33.svg";
import Cert2 from "../assets/icons/image 34.svg";
import Cert3 from "../assets/icons/image 35.svg";

export default function Choose() {
  const features = [
    {
      id: 1,
      icon: IconCertificate,
      title: "Strong Quality & HSE Compliance",
      desc:
        "We operate with strict adherence to industry safety standards, quality protocols, and compliance frameworks to ensure zero incidents and seamless project execution.",
    },
    {
      id: 2,
      icon: IconUsers,
      title: "Experienced Engineers & Certified Workforce",
      desc:
        "Our multi-disciplinary team includes certified engineers, supervisors, welders, riggers, and technicians trained for high-risk industrial environments.",
    },
    {
      id: 3,
      icon: IconTimer,
      title: "On-Time & Reliable Project Delivery",
      desc:
        "With structured planning, experienced supervision, and optimized workflows, we consistently deliver projects on schedule even during critical shutdowns.",
    },
    {
      id: 4,
      icon: IconHardHat,
      title: "Pan-India Execution Capabilities",
      desc:
        "We execute mechanical, piping, structural, and maintenance projects across India with rapid mobilization and efficient resource deployment.",
    },
    {
      id: 5,
      icon: IconHours,
      title: "Decades of Industrial Experience",
      desc:
        "With over 20+ years of field-proven industrial expertise, we have become a trusted partner for power, petrochemical, chemical, manufacturing, and heavy engineering clients.",
    },
  ];

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 py-16">
        {/* Grid: left(5 cols) | divider(1) | right(6 cols) */}
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* LEFT block */}
          <div className="col-span-12 md:col-span-5">
            <div className="pr-6 md:pr-12">
              <div className="text-sm tracking-wider text-[#6b7a79]">WHY CHOOSE US</div>

              <h2
                className="font-serif text-[#1f2b2d] mt-4"
                style={{
                  fontSize: "2.8rem",
                  lineHeight: 1.05,
                  fontWeight: 700,
                  maxWidth: "520px",
                }}
              >
                The Strength Behind <br /> Our Engineering
              </h2>

              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-3 text-black font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
              >
                <span>Contact us</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Certification badges aligned at bottom-left */}
              <div className="mt-10 md:mt-16 flex items-center gap-6">
                <img src={Cert1} alt="certification 1" className="w-20 h-auto" />
                <img src={Cert2} alt="certification 2" className="w-20 h-auto" />
                <img src={Cert3} alt="certification 3" className="w-20 h-auto" />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block col-span-1">
            <div className="h-full border-l border-gray-200" />
          </div>

          {/* RIGHT: features list */}
          <div className="col-span-12 md:col-span-6">
            <div className="space-y-8">
              {features.map((f) => (
                <div key={f.id} className="flex gap-6 items-start">
                  {/* icon */}
                  <div className="flex-shrink-0 pt-1 w-12">
                    <img src={f.icon} alt={`${f.title} icon`} className="w-8 h-8 md:w-10 md:h-10" />
                  </div>

                  {/* text */}
                  <div>
                    <h3 className="text-[16px] md:text-[18px] font-semibold text-[#1f2b2d]">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-[#4b5b5f] text-sm md:text-[14px] leading-relaxed max-w-[720px]">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* bottom divider like in design */}
      <div className="h-px bg-gray-200" />
    </section>
  );
}
