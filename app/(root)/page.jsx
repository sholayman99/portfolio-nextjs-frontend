"use client";

import { TypeAnimation } from 'react-type-animation';
import me from "@/public/images/me.jpg"

export default function Home() {
    console.log("home page");

    return (
        <div className="container mx-auto flex items-start">
            {/* Static Text */}
            <div>
                <div className="text-6xl text-white font-semibold font-serif">
                    Hello! I'm
                </div>
                <div className="text-7xl text-white font-semibold font-serif">
                    <span className="font-semibold">Md. Sholayman</span>
                </div>

                {/* Animated text */}
                <div className="text-2xl text-accent font-medium mt-4">
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
            </div>

            {/* Image Section */}
            <div className="mt-8">
                {/* Replace with your image component or HTML */}
                <img src={me} alt="Md. Sholayman"/>
            </div>
        </div>
    );
}
