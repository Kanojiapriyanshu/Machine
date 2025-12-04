import React from "react";

/* --- Update these imports if your filenames/paths differ --- */
import Logo from "../assets/icons/logo.svg";
import LinkedInLogo from "../assets/icons/LinkedinLogo.png";
import PhoneIcon from "../assets/icons/Phone.png";
import LandlineIcon from "../assets/icons/table.png";
import EnvelopeIcon from "../assets/icons/Envelope.png";
import GlobeIcon from "../assets/icons/GlobeSimple.png";
import NowtLogo from "../assets/icons/nowt.png";
/* --------------------------------------------------------- */

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 text-[#334746]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12">
        {/* Grid: left column (4) | right/main column (8) */}
        <div className="grid grid-cols-12 gap-6 items-start">

          {/* LEFT: logo + name + short text + social + copyright */}
          <div className="col-span-12 md:col-span-4">
            <div className="flex flex-col h-full">
              <div className="flex items-start gap-4 mb-5">
                <img src={Logo} alt="Energetic logo" className="w-20 h-auto object-contain" />
                <div className="leading-none">
                  <div className="font-serif text-xl text-[#122426] font-semibold">Energetic</div>
                  <div className="font-serif text-base text-[#122426] -mt-1">Engineering & Co.</div>
                </div>
              </div>

              <p className="text-sm text-[#6b7a79] max-w-[320px] mb-6">
                Speak to our engineering specialists for project planning, costing, or execution support.
              </p>

              <div className="mb-6">
                <a
                  href="https://www.linkedin.com"
                  aria-label="LinkedIn"
                  className="inline-block p-2 border border-gray-200 rounded-sm"
                >
                  <img src={LinkedInLogo} alt="LinkedIn" className="w-5 h-5 object-contain" />
                </a>
              </div>

              <div className="text-xs text-[#95a3a2] mt-auto">
                © 2025 Energetic Engineering Co.
                <br />
                All Rights Reserved.
              </div>
            </div>
          </div>

          {/* RIGHT / MAIN: vertical divider on left edge to visually separate */}
          <div className="col-span-12 md:col-span-8">
            <div className="pl-0 md:pl-8 border-l md:border-l md:border-gray-200 md:pl-10">
              {/* top nav centered */}
              <div className="flex justify-center mb-6">
                <nav aria-label="Footer navigation" className="w-full max-w-[720px]">
                  <ul className="flex flex-wrap justify-center gap-8 text-sm text-[#5f6f6e]">
                    <li><a href="/about" className="hover:underline">About</a></li>
                    <li><a href="/clients" className="hover:underline">Clients</a></li>
                    <li><a href="/services" className="hover:underline">Services</a></li>
                    <li><a href="/projects" className="hover:underline">Projects</a></li>
                    <li><a href="/industries" className="hover:underline">Industries</a></li>
                    <li><a href="/gallery" className="hover:underline">Gallery</a></li>
                  </ul>
                </nav>
              </div>

              {/* CONTACT US header and two-column contact block */}
              <div className="max-w-[900px] mx-auto">
                <h4 className="text-sm font-semibold text-[#334746] mb-4">CONTACT US</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#496162] mb-8">
                  {/* Left column: phone numbers */}
                  <div>
                    <div className="flex items-start gap-3 mb-3">
                      <img src={PhoneIcon} alt="mobile" className="w-5 h-5 mt-1 opacity-90" />
                      <div>
                        <a href="tel:+919416208038" className="block hover:underline">+91 9416208038</a>
                        <a href="tel:+911802972737" className="block mt-1 hover:underline">+91 1802 97 2737</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <img src={LandlineIcon} alt="landline" className="w-5 h-5 mt-1 opacity-90" />
                      <div className="text-xs text-[#6b7a79]">
                        (Office lines available during business hours)
                      </div>
                    </div>
                  </div>

                  {/* Right column: email + website */}
                  <div>
                    <div className="flex items-start gap-3 mb-3">
                      <img src={EnvelopeIcon} alt="email" className="w-5 h-5 mt-1 opacity-90" />
                      <a href="mailto:info@energeticengineering.in" className="hover:underline">info@energeticengineering.in</a>
                    </div>

                    <div className="flex items-start gap-3">
                      <img src={GlobeIcon} alt="website" className="w-5 h-5 mt-1 opacity-90" />
                      <a href="https://www.energeticengineering.in" className="hover:underline">www.energeticengineering.in</a>
                    </div>
                  </div>
                </div>

                {/* horizontal divider */}
                <div className="h-px bg-gray-100 mb-8" />

                {/* Two side-by-side location columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-[#6b7a79]">
                  <div>
                    <div className="text-sm font-semibold text-[#334746] mb-2">LOCATION</div>
                    <div className="font-semibold text-[13px] mb-2">PANIPAT (HEAD OFFICE)</div>
                    <div>
                      P O Dadlana, Opposite New Indian Oil Petrol Pump, Refinery Road,
                      <br />
                      Panipat-132103, Haryana, India
                    </div>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-[#334746] mb-2">LOCATION</div>
                    <div className="font-semibold text-[13px] mb-2">BARAUNI (BRANCH OFFICE)</div>
                    <div>
                      Branch office address - At Rupaspur, P.O. Barauni Oil Refinery Distt. Begusarai-
                      <br />
                      851114 Bihar, India
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* bottom thin bar with copyright + designer badge */}
      <div className="w-full border-t border-gray-100 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between text-xs text-[#9aa8a8]">
          <div>© 2025 Energetic Engineering Co. All Rights Reserved.</div>

          <div className="flex items-center gap-4">
            <div className="text-[11px] text-[#9aa8a8]">Designed by</div>
            <img src={NowtLogo} alt="Designed by Nowt" className="h-5 object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
}
