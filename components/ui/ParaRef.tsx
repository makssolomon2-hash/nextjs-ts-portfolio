"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const text = " Hi, I'm Maks, frontend developer based in Poland.";

export default function Hero() {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.fromTo(paragraphRef.current, {
      opacity: 0,
      y: 50,
      duration: 300,
      stagger: 3,
      ease: "power3.out",
    },{
      opacity: 100,
      y: 0,
    });
  }, []);

  

  useGSAP(() => {
    gsap.from(".letter", {
      y: 20,
      delay:2,
      opacity: 0,
      rotateX: 30,
      stagger: 0.03,
      duration: 0.5,
      ease: "back.out(2)",
    });
  });

  return (
    <section>
      {/* <p ref={paragraphRef} className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-10 opacity-0"> 
        Hi, I&apos;m Maks, frontend developer based in Poland. 
      </p> */}

       <h1>
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="letter text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-10"
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
    </h1>
    </section>
  );
}