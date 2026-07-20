import Image from "next/image";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from '../components/Grid';

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin"

gsap.registerPlugin(useGSAP,ScrollTrigger,SplitText,TextPlugin);


export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden w-full sm:px-10 px-5">
      <div className="w-full">
          <FloatingNav navItems={[{name: 'Home', link:'/', icon: <FaHome />}]}/>
          <Hero/>
          <Grid />
          
      </div>
    </main>
  );
}
