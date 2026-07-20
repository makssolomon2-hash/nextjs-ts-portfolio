/* "use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const text = "Dynamic Web Magic with Next.js";

 

  return (
    <h1>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="letter inline-block hero-para max-w-80 text-center text-xs uppercase tracking-widest text-blue-100"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
} */