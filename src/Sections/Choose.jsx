import React from "react";

/* Icons */
import IconHours from "../assets/icons/HourglassMedium.svg";
import IconCertificate from "../assets/icons/Certificate.svg";
import IconTimer from "../assets/icons/Timer.svg";
import IconUsers from "../assets/icons/Users.svg";
import IconHardHat from "../assets/icons/HardHat.svg";

/* Certifications */
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

      {/* OUTER CONNECTED FRAME */}
      <div className="w-full border-y border-gray-200">

        <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20">

          {/* TRUE 50–50 LAYOUT */}
          <div className="flex flex-col md:flex-row">

            {/* LEFT SIDE */}
            <div className="w-full md:w-1/2 py-16 pr-0 md:pr-12">
              <div>
                <div className="text-sm tracking-wider text-[#6b7a79] uppercase">
                  WHY CHOOSE US
                </div>

                <h2
                  className="font-serif text-[#1f2b2d] mt-4"
                  style={{
                    fontSize: "2.8rem",
                    lineHeight: 1.05,
                    fontWeight: 300,
                    maxWidth: "520px",
                  }}
                >
                  The Strength Behind <br /> Our Engineering
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

                {/* Certifications */}
                <div className="mt-16 flex items-center gap-6">
                  <img src={Cert1} alt="Certification 1" className="w-20 h-auto" />
                  <img src={Cert2} alt="Certification 2" className="w-20 h-auto" />
                  <img src={Cert3} alt="Certification 3" className="w-20 h-auto" />
                </div>
              </div>
            </div>

            {/* VERTICAL CONNECTED DIVIDER */}
            <div className="hidden md:flex justify-center">
              <div className="w-px bg-gray-200 h-full" />
            </div>

            {/* RIGHT SIDE */}
            <div className="w-full md:w-1/2 py-16 pl-0 md:pl-12">
              <div className="space-y-8">
                {features.map((f) => (
                  <div key={f.id} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 pt-1 w-12">
                      <img
                        src={f.icon}
                        alt={`${f.title} icon`}
                        className="w-8 h-8 md:w-10 md:h-8"
                      />
                    </div>

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
      </div>
    </section>
  );
}
