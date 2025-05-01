import React from 'react';
import { TypeAnimation } from "react-type-animation";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import CommonButton from "@/components/common/CommonButton";

const Hero = () => {
    return (
        <div className="relative flex flex-col gap-y-10 xl:flex-row lg:items-start items-center justify-between xl:pt-8 overflow-hidden">

            {/* Content container */}
            <div className="container mx-auto px-4 flex flex-col xl:flex-row items-center justify-between relative z-10">
                {/* Text section */}
                <div className="flex flex-col lg:items-start items-center order-2 xl:order-none xl:w-1/2">
                    <div className="text-3xl md:text-4xl lg:text-6xl text-white font-semibold font-serif">
                        Hello! I'm
                    </div>
                    <div className="text-4xl md:text-5xl lg:text-7xl text-white font-semibold font-serif mt-2">
                        <span className="font-semibold">Md. Sholayman</span>
                    </div>
                    {/* Animated text */}
                    <div className="text-xl lg:text-2xl text-accent font-medium mt-4">
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
                    <div className="mt-5 mb-10">
                        <Socials />
                    </div>
                    <CommonButton icon={FiDownload}>
                        Download CV
                    </CommonButton>
                </div>

                {/* Photo section */}
                <div className="order-1 xl:order-none mb-8 xl:mb-0 xl:w-1/2 flex justify-center xl:justify-end">
                    <Photo />
                </div>
            </div>
        </div>
    );
};

export default Hero;