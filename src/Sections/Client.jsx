// src/Sections/Clients.jsx
import React from "react";

// === IMPORT IMAGES ===
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
      
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-10 py-16">

        {/* Heading */}
        <div className="mb-12">
          <p className="text-[13px] tracking-[1.5px] text-[#6b7a79] uppercase">
            Our Clients
          </p>

          <h2 className="mt-4 font-serif text-[#16202a] font-semibold leading-tight"
              style={{ fontSize: "3rem" }}>
            Companies we have<br />worked with
          </h2>
        </div>

        {/* GRID */}
        <div className="border-t border-gray-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 border-l border-gray-200">

            <ClientBox img={ImgIndianOil} />
            <ClientBox img={ImgHRRL} />
            <ClientBox img={ImgBHEL} />
            <ClientBox img={ImgEIL} />

            <ClientBox img={ImgDEE} />
            <ClientBox img={ImgKSS} />
            <ClientBox img={ImgMRPL} />
            <ClientBox img={ImgToyo} />

            <ClientBox img={ImgHPCL} />
            <ClientBox img={ImgAnother1} />
            <ClientBox img={ImgHMEL} />
            <ClientBox img={ImgGreenLogo} />

          </div>
        </div>

      </div>

      <div className="h-px bg-gray-200" />
    </section>
  );
}


// === TEMPLATE BOX ===
function ClientBox({ img }) {
  return (
    <div className="border-r border-b border-gray-200 bg-white w-full h-[220px] flex items-center justify-center">
      <img
        src={img}
        alt="client"
        className="max-h-[95px] max-w-[90%] object-contain"
      />
    </div>
  );
}
