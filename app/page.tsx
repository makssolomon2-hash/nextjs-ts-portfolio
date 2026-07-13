import Image from "next/image";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden w-full sm:px-10 px-5">
      <div className="w-full">
          <FloatingNav navItems={[{name: 'Home', link:'/', icon: <FaHome />}]}/>
          <Hero/>
      </div>
    </main>
  );
}
