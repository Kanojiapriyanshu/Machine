import React, { useState } from "react";

/* ---- Import your images ---- */
import p1 from "../assets/images/p1.png";
import p2 from "../assets/images/p2.png";
import p3 from "../assets/images/p3.png";
import p4 from "../assets/images/p4.png";

export default function Projects() {
  const [showTable, setShowTable] = useState(false);

  return (
    <section id="projects" className="w-full bg-white py-12 px-6 md:px-20">

      {/* ================= HEADER ================= */}
      <div className="flex justify-between items-start w-full mb-10">
        <div>
          <p className="text-xs tracking-wide text-[#4b5c5a] mb-2">OUR PROJECTS</p>
          <h2 className="text-[42px] leading-tight font-serif text-[#1B2D2A]">
            Our Concurrent <br /> Projects
          </h2>
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setShowTable(!showTable)}
          className="flex items-center gap-2 text-sm text-[#1B2D2A] hover:text-black transition"
        >
          {showTable ? "Show Images" : "View Last 3yr Projects"}
          <span className="text-lg">↗</span>
        </button>
      </div>

      {/* Subtitle */}
      <p className="text-sm text-[#5b6f6d] mt-2 mb-10 max-w-2xl">
        View the latest projects highlighting our execution capabilities — hover any image to view a short caption.
      </p>

      {/* ====================== IMAGE GRID WITH LINES ====================== */}
      {!showTable && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

          {/* Card 1 */}
          <div className="relative group w-full h-[400px] overflow-hidden border border-gray-300">
            <img src={p1} alt="project 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end p-5 text-white text-lg font-medium">
              Shutdown Job – SRU Block IOCL
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group w-full h-[400px] overflow-hidden border border-gray-300">
            <img src={p2} alt="project 2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end p-5 text-white text-lg font-medium">
              On-Site Lifting Operation – HRRL
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group w-full h-[400px] overflow-hidden border border-gray-300">
            <img src={p3} alt="project 3" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end p-5 text-white text-lg font-medium">
              Fabrication & Piping – IOCL
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative group w-full h-[400px] overflow-hidden border border-gray-300">
            <img src={p4} alt="project 4" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end p-5 text-white text-lg font-medium">
              Mechanical Execution – MRPL
            </div>
          </div>

        </div>
      )}

      {/* ====================== TABLE SECTION ====================== */}
      {showTable && (
        <div className="mt-10 overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100 text-left text-gray-700">
              <tr>
                <th className="p-3 border">S.NO</th>
                <th className="p-3 border">WO NO.</th>
                <th className="p-3 border">NAME OF WORK</th>
                <th className="p-3 border">CLIENT NAME</th>
                <th className="p-3 border">WO VALUE</th>
                <th className="p-3 border">WO DATE</th>
                <th className="p-3 border">COMPLETION DATE</th>
              </tr>
            </thead>

            <tbody>
              
              <tr>
                <td className="border p-3">01</td>
                <td className="border p-3">DEE/TPL/HRRL/EEC/01</td>
                <td className="border p-3">
                  WORK ORDER FOR ERECTION OF PIPING FOR DCU AT HRRL, PACHHADRA, DISST-BARMER
                </td>
                <td className="border p-3">DEE PIPING HRRL</td>
                <td className="border p-3">89,50,480.00</td>
                <td className="border p-3">21.06.2021</td>
                <td className="border p-3">OCT-22</td>
              </tr>

              <tr>
                <td className="border p-3">02</td>
                <td className="border p-3">28708885</td>
                <td className="border p-3">
                  Shutdown Maintenance Jobs — Furnaces, Reactors, Columns, Vessels, Heat Exchangers & Misc. Piping jobs of VDU 1(U-31) at Haldia Refinery
                </td>
                <td className="border p-3">IOCL HALDIA REFINERY</td>
                <td className="border p-3">3,41,39,297.05</td>
                <td className="border p-3">28.03.2023</td>
                <td className="border p-3">OCT-23</td>
              </tr>

              <tr>
                <td className="border p-3">03</td>
                <td className="border p-3">280000976</td>
                <td className="border p-3">
                  Replacement of Complete Assembly of Main & Acid Gas Flare Tip and Molecular Seal of PR, PRE & PX-PTA Block – IOCL Panipat
                </td>
                <td className="border p-3">IOCL PANIPAT REFINERY</td>
                <td className="border p-3">2,99,74,130.18</td>
                <td className="border p-3">21.07.2022</td>
                <td className="border p-3">MAR-24</td>
              </tr>

              <tr>
                <td className="border p-3">04</td>
                <td className="border p-3">27928046</td>
                <td className="border p-3">
                  Replacement of Packinox Heat Exchanger and repair of leaky Packinox at DHDT Unit – IOCL Panipat
                </td>
                <td className="border p-3">IOCL PANIPAT REFINERY</td>
                <td className="border p-3">6,33,84,589.96</td>
                <td className="border p-3">24.06.2022</td>
                <td className="border p-3">MAR-24</td>
              </tr>

            </tbody>
          </table>
        </div>
      )}

    </section>
  );
}
