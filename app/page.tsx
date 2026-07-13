import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden w-full sm:px-10 px-5">
      <div className="w-full">
          <Hero/>
      </div>
    </main>
  );
}
