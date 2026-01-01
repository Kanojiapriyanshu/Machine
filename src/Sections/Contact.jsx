import React from "react";

export default function Contact() {
  return (
    <section className="w-full bg-white relative">

      {/* ====== VERTICAL LINES (3 columns look) ====== */}
      <div className="absolute top-0 bottom-0 left-1/3 w-px bg-gray-200" />
      <div className="absolute top-0 bottom-0 left-2/3 w-px bg-gray-200" />

      <div className="max-w-[1440px] xl:max-w-[1920px] mx-auto px-4 md:px-12 lg:px-20 xl:px-27 py-12 md:py-24 xl:py-32 relative">

        {/* ====== HORIZONTAL LINE TOP ====== */}
        

        <div className="flex justify-center text-center">

          <div className="max-w-[780px]">

            {/* ====== HEADING ====== */}
            <h2
              className="font-serif text-[#16202a] text-[2rem] md:text-[3.6rem] xl:text-[4.8rem]"
              style={{
                lineHeight: "1.1",
                fontWeight: "700",
              }}
            >
              Let's Build Your Next
              <br />
              Industrial Project
            </h2>

            {/* ====== SUB-TEXT ====== */}
            <p className="mt-6 text-sm text-[#546262]">
              Speak to our engineering specialists for project planning,
              costing, or execution support.
            </p>

            {/* ====== BUTTON ====== */}
            <div className="mt-10">
              <a
                href="mailto:info@energeticengineering.in"
                className="inline-block px-10 py-3 text-sm font-medium rounded-sm shadow-sm"
                style={{
                  backgroundColor: "rgb(232,250,153)",
                  color: "#0b0b0b",
                }}
              >
                Contact us
              </a>
            </div>

         

          </div>
        </div>
      </div>
    </section>
  );
}
