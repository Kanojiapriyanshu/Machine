// src/Sections/Header.jsx
import { useState } from "react";
import LogoUrl from "../assets/icons/logo.svg"; // adjust path if needed

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative">
      {/* dark top border like screenshot */}
      <div className="w-full border-t-2 border-gray-900" />

      {/* main header area */}
      <div className="bg-white">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-8 h-[86px]">
          {/* Left: Logo + wordmark */}
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-4">
              <img
                src={LogoUrl}
                alt="Energetic logo"
                className="w-14 h-10 object-contain"
                aria-hidden={false}
              />
              <div className="hidden sm:block leading-tight">
                <div className="text-2xl font-serif font-bold text-gray-900 -mb-1">
                  Energetic
                </div>
                <div className="text-base font-serif text-gray-800">
                  Engineering & Co.
                </div>
              </div>
            </a>
          </div>

          {/* Center / Right navigation (desktop) */}
          <nav className="hidden md:flex items-center gap-12">
            <ul className="flex items-center gap-10 text-[18px] font-semibold text-gray-700">
              <li><a href="/about" className="hover:text-gray-900">About</a></li>
              <li><a href="/projects" className="hover:text-gray-900">Projects</a></li>
              <li><a href="/industries" className="hover:text-gray-900">Industries</a></li>
              <li><a href="/services" className="hover:text-gray-900">Services</a></li>
              <li><a href="/clients" className="hover:text-gray-900">Clients</a></li>
            </ul>
          </nav>

          {/* Right: Contact box on desktop + hamburger for mobile */}
          <div className="flex items-center gap-4">
            {/* Contact box (desktop): pale-lime background, full height-ish */}
            <div className="hidden md:block">
              <a
                href="/contact"
                className="inline-block px-8 py-4 font-semibold text-gray-900"
                style={{ backgroundColor: "rgb(232,250,153)" }} /* pale lime */
              >
                Contact us
              </a>
            </div>

            {/* mobile button */}
            <button
              className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" strokeLinejoin="round"/>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* subtle thin divider below header like screenshot */}
        <div className="h-px bg-gray-200" />
      </div>

      {/* Mobile menu (dropdown) */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="max-w-[1400px] mx-auto px-6 py-4">
            <ul className="flex flex-col gap-3 text-gray-800 font-medium">
              <li><a className="block py-2" href="/about" onClick={() => setOpen(false)}>About</a></li>
              <li><a className="block py-2" href="/projects" onClick={() => setOpen(false)}>Projects</a></li>
              <li><a className="block py-2" href="/industries" onClick={() => setOpen(false)}>Industries</a></li>
              <li><a className="block py-2" href="/services" onClick={() => setOpen(false)}>Services</a></li>
              <li><a className="block py-2" href="/clients" onClick={() => setOpen(false)}>Clients</a></li>
              <li className="pt-2">
                <a
                  href="/contact"
                  className="block text-center px-4 py-3 font-semibold"
                  style={{ backgroundColor: "rgb(232,250,153)" }}
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
