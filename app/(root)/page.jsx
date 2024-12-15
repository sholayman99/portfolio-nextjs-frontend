"use client";

import { FiDownload } from "react-icons/fi";
import Photo from "@/components/Photo";
import {TypeAnimation} from "react-type-animation";
import Socials from "@/components/Socials";




const Home = () => {
    return (
        <section className={"h-full"}>
            <div className={"container mx-auto w-full"}>
                <div
                    className={
                        "flex flex-col gap-y-10 xl:flex-row lg:items-start items-center justify-between xl:pt-8 mx:pb-24"}
                >
                    {/*text*/}
                    <div className="flex flex-col lg:items-start items-center order-2 lg:order-none">
                        <div className="text-3xl md:text-4xl lg:text-6xl text-white font-semibold font-serif">
                            Hello! I'm
                        </div>
                        <div className="text-4xl md:text-5xl lg:text-7xl text-white font-semibold font-serif mt-2">
                            <span className="font-semibold">Md. Sholayman</span>
                        </div>

                        {/* Animated text */}
                        <div className="text-xl lg:text-2xl text-accent font-medium mt-6">
                            <TypeAnimation
                                sequence={[
                                    'MERN Stack Developer',
                                    1500,
                                    'Specialist in React',
                                    1500,
                                    'Full Stack Developer',
                                    1500,
                                    'Next Generation Developer',
                                    1500,
                                ]}
                                speed={50}
                                cursor={true}
                                repeat={Infinity}
                            />
                        </div>
                        <button
                            className={`py-5 px-16 text-lg text-accent hover:text-white bg-primary rounded-full border-[0.1px] hover:bg-primary-hover
                              border-accent/60 hover:border-white flex items-center gap-x-2 mt-16 transition-colors duration-500 ease-in`} >
                            Get Resume <FiDownload/>
                        </button>
                        <div>
                            <Socials />
                        </div>

                    </div>

                    {/*photo*/}
                    <div className={"order-1 lg:order-none mb-8 xl:mb-0"}>
                        <Photo/>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Home;