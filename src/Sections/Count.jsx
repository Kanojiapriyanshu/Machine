import React from "react";

// metric data
const METRICS = [
  { id: 1, value: "100M" },
  { id: 2, value: "25+" },
  { id: 3, value: "1200+" },
  { id: 4, value: "98%" },
  { id: 5, value: "100+" },
  { id: 6, value: "300+" },
  { id: 7, value: "1500000Hrs" },
  { id: 8, value: "200+" },
];

export default function Count() {
  return (
    <section className="w-full bg-white overflow-hidden py-6">
      <div className="relative w-full">
        {/* Inner scrolling container */}
        <div className="animate-marquee whitespace-nowrap flex items-center">

          {/* Duplicate list for seamless scroll */}
          {[...METRICS, ...METRICS].map((m, idx) => (
            <div
              key={idx}
              className="mx-10 inline-block text-center"
            >
              <div
                className="font-serif text-[#16202a] font-bold"
                style={{ fontSize: "28px", lineHeight: 1 }}
              >
                {m.value}
              </div>
              
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
