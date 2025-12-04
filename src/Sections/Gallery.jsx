import React from "react";

/**
 * Gallery.jsx
 * - Place at: src/Sections/Gallery.jsx
 * - Put images in: src/assets/images/
 *   (I used filenames from your screenshot: 1.png, 2.png, ..., 11.png, profile.png)
 * - Usage: import Gallery from "./Sections/Gallery"; <Gallery />
 */

/* IMPORT IMAGES (adjust names if your actual filenames differ) */
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import img6 from "../assets/images/6.png";
import img7 from "../assets/images/7.png";
import img8 from "../assets/images/8.png";
import img9 from "../assets/images/9.png";
import img10 from "../assets/images/10.png";
import img11 from "../assets/images/11.png";

const IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

export default function Gallery() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 pt-12 pb-6">
        {/* Header: left label + big serif title; right description */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-6">
          {/* Left label + big title */}
          <div className="md:col-span-5">
            <div className="text-sm tracking-wider text-[#6b7a79] mb-4">AT A GLANCE</div>
            <h2
              className="font-serif text-[#16202a]"
              style={{ fontSize: "3.4rem", lineHeight: 1.02, fontWeight: 700 }}
            >
              Gallery
            </h2>
          </div>

          {/* Right description */}
          <div className="md:col-span-7">
            <p className="text-[#4b5b5b] text-lg leading-relaxed max-w-[740px]">
              This Gallery is a curated space where our projects come together to reflect intention, clarity,
              and the craft that defines our work. Each visual captures the design decisions, thought process,
              and simplicity that shape our creative identity.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee / continuous gallery */}
      <div className="w-full overflow-hidden">
        {/* Outer container sets visible height of images */}
        <div className="relative">
          {/* The inner marquee uses duplicated images for infinite seamless loop */}
          <div className="marquee flex items-stretch">
            {[...IMAGES, ...IMAGES].map((src, i) => (
              <div
                key={i}
                className="mx-4 flex-shrink-0"
                style={{ width: "330px" }} /* fixed width for consistent columns; tune if you want wider */
              >
                <div className="h-[420px] bg-gray-100 overflow-hidden border border-gray-100">
                  <img
                    src={src}
                    alt={`gallery-${i}`}
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline CSS for marquee animation */}
      <style>{`
        /* marquee: move from -50% -> 0 so movement is left -> right (continuous) */
        .marquee {
          display: flex;
          align-items: stretch;
          /* ensure the marquee is twice the width of the viewport content because we duplicated the array */
          animation: marquee-rt 28s linear infinite;
          will-change: transform;
          /* Smooth backface */
        }

        /* pause on hover */
        .marquee:hover { animation-play-state: paused; }

        @keyframes marquee-rt {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        /* make sure images don't get selected while dragging */
        .marquee img { user-select: none; -webkit-user-drag: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; }
      `}</style>
    </section>
  );
}
