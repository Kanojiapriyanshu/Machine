import React from "react";

// IMPORT ALL IMAGES HERE
import ImgDEE from "../assets/icons/Frame 23.png";
import ImgHPCL from "../assets/icons/image 8 (1).png";
import ImgToyo from "../assets/icons/image 8.png";
import ImgIndianOil from "../assets/icons/image 9.png";
import ImgEIL from "../assets/icons/image 16.png";
import ImgBHEL from "../assets/icons/image 18.png";
import ImgKSS from "../assets/icons/image 20.png";
import ImgHRRL from "../assets/icons/image 21.png";
import ImgMRPL from "../assets/icons/image 24.png";
import ImgAnother1 from "../assets/icons/image 25.png";
import ImgHMEL from "../assets/icons/image 26.png";
import ImgGreenLogo from "../assets/icons/image 28.png";

export default function Clients() {
  return (
    <section id="clients" className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 py-10">
        
        {/* Heading */}
        <div className="mb-8">
          <div className="text-sm tracking-wider text-[#6b7a79]">OUR CLIENTS</div>

          <h2
            className="font-serif text-[#16202a] mt-4"
            style={{ fontSize: "3rem", lineHeight: 1.05, fontWeight: 700 }}
          >
            Companies we have
            <br />
            worked with
          </h2>
        </div>

        {/* Grid */}
        <div className="mt-6 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">

            {/* 1 IndianOil */}
            <ClientBox img={ImgIndianOil} />

            {/* 2 HRRL */}
            <ClientBox img={ImgHRRL} />

            {/* 3 BHEL */}
            <ClientBox img={ImgBHEL} />

            {/* 4 EIL */}
            <ClientBox img={ImgEIL} />

            {/* 5 DEE */}
            <ClientBox img={ImgDEE} />

            {/* 6 KSS */}
            <ClientBox img={ImgKSS} />

            {/* 7 MRPL */}
            <ClientBox img={ImgMRPL} />

            {/* 8 TOYO */}
            <ClientBox img={ImgToyo} />

            {/* 9 HPCL */}
            <ClientBox img={ImgHPCL} />

            {/* 10 Another Logo */}
            <ClientBox img={ImgAnother1} />

            {/* 11 HMEL */}
            <ClientBox img={ImgHMEL} />

            {/* 12 Green Logo */}
            <ClientBox img={ImgGreenLogo} />

          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="h-px bg-gray-200" />
    </section>
  );
}

// SMALL REUSABLE BOX
function ClientBox({ img }) {
  return (
    <div className="min-h-[220px] flex items-center justify-center border-r border-b border-gray-200 bg-white p-8">
      <div className="w-full h-full flex items-center justify-center border border-gray-100 p-6">
        <img
          src={img}
          alt="client"
          className="max-h-[90px] max-w-full object-contain"
        />
      </div>
    </div>
  );
}
