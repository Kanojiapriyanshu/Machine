// src/Sections/Header.jsx
import { useState } from "react";
import LogoUrl from "../assets/icons/logo.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative">

      {/* Top dark line */}
      <div className="w-full border-t-[3px] border-gray-900" />

      {/* Header */}
      <div className="bg-white">
        <div className="max-w-[1440px] xl:max-w-[1920px] mx-auto flex items-center px-6 md:px-10 xl:px-13 h-[86px]">

          {/* LOGO LEFT */}
          <a href="/" className="flex items-center gap-4">
            <img src={LogoUrl} className="w-14 h-10 object-contain" />

            <div className="hidden sm:block leading-tight">
              <div className="text-2xl font-serif font-bold text-gray-900 -mb-1">
                Energetic
              </div>
              <div className="text-base font-serif font-bold text-gray-800">
                Engineering & Co.
              </div>
            </div>
          </a>

          {/* push nav to the right */}
          <div className="flex flex-1" />

          {/* NAV + CONTACT */}
          <div className="flex items-center gap-10">

            {/* NAVIGATION */}
            <nav className="hidden md:flex">
              <ul className="flex items-center gap-10 text-[18px] font-semibold text-gray-700">
                <li><a href="#about" className="hover:text-gray-900">About</a></li>
                <li><a href="#projects" className="hover:text-gray-900">Projects</a></li>
                <li><a href="#industries" className="hover:text-gray-900">Industries</a></li>
                <li><a href="#services" className="hover:text-gray-900">Services</a></li>
                <li><a href="#clients" className="hover:text-gray-900">Clients</a></li>
              </ul>
            </nav>

            {/* CONTACT BUTTON — gives mail popup */}
            <a
              href="mailto:info@energeticengineering.in"
              className="hidden md:flex items-center justify-center px-12 xl:px-16 py-4 font-semibold text-gray-900"
              style={{ backgroundColor: "rgb(232,250,153)" }}
            >
              Contact us
            </a>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen((s) => !s)}
              className="md:hidden p-2 text-gray-700"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6h18" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 18h18" />
                  </>
                )}
              </svg>
            </button>

          </div>
        </div>

        {/* Bottom divider */}
        <div className="h-px bg-gray-200" />
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4">
            <ul className="flex flex-col gap-3 text-gray-800 font-medium">
              <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
              <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
              <li><a href="#industries" onClick={() => setOpen(false)}>Industries</a></li>
              <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
              <li><a href="#clients" onClick={() => setOpen(false)}>Clients</a></li>

              <li className="pt-2">
                <a
                  href="mailto:info@energeticengineering.in"
                  style={{ backgroundColor: "rgb(232,250,153)" }}
                  className="block py-3 text-center font-semibold"
                  onClick={() => setOpen(false)}
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
          <div className="h-px bg-gray-200" />
        </div>
      )}
    </header>
  );
}
