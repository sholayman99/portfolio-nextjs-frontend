import React from 'react';
import {TypeAnimation} from "react-type-animation";
import {FiDownload} from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import CommonButton from "@/components/CommonButton";


const Intro = () => {
    return (
        <div className={"container mx-auto w-full"}>
            <div className={"flex flex-col gap-y-10 xl:flex-row lg:items-start items-center justify-between xl:pt-8 mx:pb-24"}>
                {/*text*/}
                <div className="flex flex-col lg:items-start items-center order-2 lg:order-none">
                    <div className="text-3xl md:text-4xl lg:text-6xl text-white font-semibold font-serif">
                        Hello! I'm
                    </div>
                    <div className="text-4xl md:text-5xl lg:text-7xl text-white font-semibold font-serif mt-2">
                        <span className="font-semibold">Md. Sholayman</span>
                    </div>

                    {/* Animated text */}
                    <div className="text-xl lg:text-2xl text-accent font-medium my-6">
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
                    <CommonButton
                        icon={FiDownload}

                    >
                    </CommonButton>
                    <div>
                        <Socials/>
                    </div>

                </div>

                {/*photo*/}
                <div className={"order-1 lg:order-none mb-8 xl:mb-0"}>
                    <Photo/>
                </div>
            </div>
        </div>
    );
};

export default Intro;


