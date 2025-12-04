import React from "react";

/**
 * Contact.jsx
 * Place at: src/Sections/Contact.jsx
 *
 * - Uses the Playfair Display serif via .font-serif from index.css (see below).
 * - Button uses the same pale-lime color used elsewhere (inline style).
 * - Layout: 12-column grid, center column with left/right subtle dividers to match screenshot.
 */

export default function Contact() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-16">
        {/* Use grid to create left gutter | center column | right gutter */}
        <div className="grid grid-cols-12 items-center">
          {/* left gutter column (shows subtle vertical border at center area edges) */}
          <div className="col-span-12 md:col-span-3">
            {/* empty gutter to visually match screenshot */}
          </div>

          {/* center content column */}
          <div className="col-span-12 md:col-span-6 flex justify-center">
            <div className="w-full max-w-[720px] text-center">
              {/* top subtle horizontal line like screenshot */}
              <div className="h-px bg-gray-200 mb-8" />

              {/* Big centered headline */}
              <h2
                className="font-serif text-[#16202a] mx-auto"
                style={{
                  fontSize: "3.2rem", /* ~52px (tune if you want larger) */
                  lineHeight: 1.02,
                  fontWeight: 700,
                  maxWidth: "760px",
                }}
              >
                Let’s Build Your Next
                <br />
                Industrial Project
              </h2>

              {/* small supporting text */}
              <p className="mt-4 text-sm md:text-base text-[#546262]">
                Speak to our engineering specialists for project planning, costing, or execution support.
              </p>

              {/* CTA button */}
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-block px-8 py-3 font-medium rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{ backgroundColor: "rgb(232,250,153)", color: "#0b0b0b" }}
                >
                  Contact us
                </a>
              </div>

              {/* bottom subtle horizontal divider */}
              <div className="h-px bg-gray-200 mt-12" />
            </div>
          </div>

          {/* right gutter column */}
          <div className="col-span-12 md:col-span-3">
            {/* empty gutter */}
          </div>
        </div>
      </div>
    </section>
  );
}
