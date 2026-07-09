import React from 'react'
import {Spotlight} from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";
import {TextGenerateEffect} from "@/components/ui/TextGenerateEffect";

const Hero = () => {
    return (

        <div className=" w-full w-9/12 pt-36 ">
                <div>
                    <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
                    <Spotlight className="-top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
                    <Spotlight className="-top-20 left-80  h-[80vh] w-[50vw]" fill="blue"/>
                    <h1 className=" text-white w-full"> </h1>
                </div>

                <div>
                    <div className=" flex   items-center justify-center  dark:bg-black/[0.03] h-screen w-full ">
                        <div
                            className={cn(
                                "absolute inset-0",
                                "[background-size:40px_40px]",
                                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                            )}
                        />

                         <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black/[0.03]"></div>
                        <div className="flex justify-center pt-0  ">
                            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center a '>
                                <h2 className="uppercase tracking-widest  text-xs text-center text-blue-100 max-w-80">
                                    Dynamic Web Magic with Next.js
                                </h2>

                                <TextGenerateEffect
                                    className=' text-center text-[40px] md:text-5xl lg:text-6xl'
                                    words='Transforming Concepts into Seamless Experiences'
                                />

                                <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                                    Hi, I&apos;m Maks,frontend developer based in Poland.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
        </div>

    )}

export default Hero
