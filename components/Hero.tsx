"use client";

import {Spotlight} from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";
import {TextGenerateEffect} from "@/components/ui/TextGenerateEffect";
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import ParaRef from './ui/ParaRef';
import HeroText from './ui/HeroText';


import { gsap } from "gsap";
import { useEffect } from "react";



const Hero = () => {

    useEffect(() =>{
        gsap.from(".hero-para",{
            y: 50,
            delay:3.5,
            opacity: 0,
            duration: 3,
            ease: "power3.out", 
        });

        gsap.from(".magic-button",{
            y:-30,
            delay:4.5,
            opacity: 0,
            duration: 2,
            ease: "power2.out",
        });
    }, [])

    return (

        <div className=" w-full w-9/12 pt-36 -z-10">
                <div>
                    <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
                    <Spotlight className="-top-40 left-full h-[80vh] w-[50vw]" fill="purple"/>
                    <Spotlight className="top-24 left-44 h-[80vh] w-[20vw]" fill="blue"/>
                    <h1 className=" text-white w-full"> </h1>
                </div>
                <div className="hero-content flex  h-screen w-full -mt-36 items-center justify-center dark:bg-black/[0.03]">                 
                        <div
                            className={cn(
                                "absolute inset-0",
                                "[background-size:150px_150px]",
                                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] z-0 opacity-[0.4] blur-xs",
                            )}
                        />
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black/[0.03]  "></div>
                        <div className="z-10 flex justify-center pt-0">
                            <div className='flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]'>
                               
                                <h2 className="hero-para max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
                                    Dynamic Web Magic with Next.js
                                </h2>

                            

                                <TextGenerateEffect
                                    className=' text-center text-[40px] md:text-5xl lg:text-6xl'
                                    words='Transforming Concepts into Seamless User Experiences'
                                />

                                <ParaRef/>

                                <a href="#about" className="magic-button">
                                    <MagicButton 
                                        title="Show my work"
                                        icon={<FaLocationArrow />}
                                        position='right'
                                       
                                    />
                                </a>
                            </div>
                        </div>                   
                </div>
        </div>

    )}

export default Hero
