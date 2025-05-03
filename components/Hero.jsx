import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FiDownload } from 'react-icons/fi';
import Socials from '@/components/Socials';
import Photo from '@/components/Photo';
import CommonButton from '@/components/common/CommonButton';

const Hero = () => {
    return (
        <div className="relative flex flex-col xl:flex-row items-center justify-between xl:pt-12 pt-10 overflow-hidden">

            {/* Content container */}
            <div className="container flex flex-col xl:flex-row items-center xl:items-start justify-between space-y-10 xl:space-y-0 xl:space-x-16 relative z-10">
                {/* Text section */}
                <div className="flex flex-col items-center xl:items-start text-center xl:text-left xl:w-1/2">
                    <div className="text-3xl uppercase leading-tight text-primary tracking-wide font-medium font-serif">
                        Hello! I'm
                    </div>
                    <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-snug text-white font-semibold font-mono mt-3">
                        <span>Md<span className={"text-primary-hover"}>.</span> Sholayman</span>
                    </div>

                    {/* Animated text */}
                    <div className="text-xl lg:text-2xl bg-gradient-to-r from-primary to-white bg-clip-text text-transparent  my-6 italic">
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
                <div className="order-1 xl:order-none xl:w-1/2 flex justify-center xl:justify-end">
                    <Photo
                        containerStyles="w-[350px] h-[350px] md:w-[400px] md:h-[400px] border-4 border-primary/20 shadow-xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;