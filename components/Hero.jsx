import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FiDownload } from 'react-icons/fi';
import Socials from '@/components/Socials';
import Photo from '@/components/Photo';
import CommonButton from '@/components/common/CommonButton';

const Hero = () => {
    return (
        <section id={"home"} className="relative flex flex-col xl:flex-row items-center justify-between xl:pt-12 pt-10 overflow-hidden">

            {/* Content container */}
            <div className=" w-full flex flex-col xl:flex-row items-center xl:items-start justify-between space-y-20 lg:space-y-0  relative z-10">
                {/* Text section */}
                <div className="order-2 xl:order-none flex flex-col items-center xl:items-start text-center xl:text-left">
                    <div className="text-lg md:text-xl lg:txt-2xl xl:text-3xl uppercase leading-tight text-primary tracking-wide font-medium font-mono">
                        Hello! I'm
                    </div>
                    <div className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-snug text-white font-semibold font-inter  mt-6 mb-2">
                        <span>Md<span className={"text-primary-hover"}>.</span>Sholayman</span>
                    </div>

                    {/* Animated text */}
                    <div className="text-xl lg:text-3xl bg-gradient-to-r from-primary font-serif to-white bg-clip-text text-transparent  mb-6">
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
                            wrapper="span"
                            speed={50}
                            cursor={true}
                            repeat={Infinity}
                            style={{ display: 'inline-block' }}
                        />
                    </div>

                    {/* Socials & Download CV Button */}
                    <div className="mt-6 flex justify-center xl:justify-start space-x-4">
                        <Socials
                            containerStyles="bg-gray-800 hover:bg-primary/80 transition-all"
                            iconStyles="text-white"
                        />
                    </div>
                    <div className="mt-6">
                        <CommonButton
                            text="Download CV"
                            icon={FiDownload}
                        />
                    </div>
                </div>

                {/* Photo section */}
                <div className="order-1 xl:order-none  flex justify-center xl:justify-end">
                    <Photo/>
                </div>
            </div>
        </section>
    );
};

export default Hero;