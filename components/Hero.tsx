import {Spotlight} from "@/components/ui/Spotlight";
import { cn } from "@/lib/utils";
import {TextGenerateEffect} from "@/components/ui/TextGenerateEffect";
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';

const Hero = () => {
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
                               
                                <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
                                    Dynamic Web Magic with Next.js {/* Add GSAP aniumatoons on text */}
                                </h2>

                                <TextGenerateEffect
                                    className=' text-center text-[40px] md:text-5xl lg:text-6xl'
                                    words='Transforming Concepts into Seamless User Experiences'
                                />

                                <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-10"> 
                                    {/* Hi, I&apos;m Maks, frontend developer based in Poland. */} {/* Add GSAP aniumatoons on text */}
                                </p>

                                <a href="#about">
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
