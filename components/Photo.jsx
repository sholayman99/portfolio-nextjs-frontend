"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Photo() {
    return (
        <div className="relative w-full h-full flex items-center justify-end">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 0.2, duration: 0.6, ease: "easeInOut" },
                }}
                className="relative flex items-center justify-center"
            >
                {/* Glowing Background Circle */}
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{
                        scale: 1,
                        transition: { delay: 0.3, duration: 0.8, ease: "easeInOut" }
                    }}
                    className="absolute w-[380px] h-[380px] rounded-full bg-[#80DB66] opacity-10 blur-xl"
                />

                {/* Main Circle Container */}
                <motion.div
                    className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[380px] lg:h-[380px] rounded-full
                    flex items-center justify-center border-4 border-[#80DB66]/20 shadow-lg shadow-[#80DB66]/10"
                    initial={{ rotate: -15 }}
                    animate={{
                        rotate: 0,
                        transition: { delay: 0.4, duration: 0.7, type: "spring" }
                    }}
                >
                    {/* Image Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            transition: {
                                delay: 0.6,
                                duration: 0.5,
                                ease: "backOut"
                            },
                        }}
                        className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[330px] lg:h-[350px] rounded-full overflow-hidden
                        border-2 border-[#80DB66]/30 shadow-inner shadow-[#80DB66]/10"
                    >
                        <Image
                            src={"/images/me.png"}
                            alt="Profile Photo"
                            priority
                            quality={100}
                            className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                            fill={true}
                        />
                    </motion.div>
                </motion.div>

                {/* Animated SVG Circles */}
                <motion.svg
                    className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px] z-10"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#80DB66"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{
                            strokeDasharray: "24 10 0 0",
                            opacity: 0
                        }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                            opacity: 1
                        }}
                        transition={{
                            delay: 0.8,
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "linear"
                        }}
                    />

                    {/* Additional decorative circle */}
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="230"
                        stroke="#80DB66"
                        strokeWidth="2"
                        strokeOpacity="0.4"
                        strokeDasharray="10 5"
                        initial={{
                            rotate: 45,
                            opacity: 0
                        }}
                        animate={{
                            rotate: -360,
                            opacity: 0.6
                        }}
                        transition={{
                            delay: 1,
                            duration: 30,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "linear"
                        }}
                    />
                </motion.svg>

                {/* Floating dots */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-[#80DB66]"
                        initial={{
                            opacity: 0,
                            scale: 0
                        }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            scale: [0, 1.2, 0],
                            x: Math.sin(i * 45 * (Math.PI/180)) * 200,
                            y: Math.cos(i * 45 * (Math.PI/180)) * 200
                        }}
                        transition={{
                            delay: 1.2 + i * 0.1,
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </motion.div>
        </div>
    );
}

export default Photo;