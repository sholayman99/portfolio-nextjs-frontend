"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

function Photo() {
    return (
        <div className="relative w-full">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
                }}
                className="relative flex items-center justify-center"
            >
                {/* Circle with Inner Shadow */}
                <motion.div
                    className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[380px] lg:h-[380px] rounded-full
                    flex items-center justify-center"
                >
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { delay: 0.5, duration: 0.4, ease: "easeInOut" },
                        }}
                        className="relative w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[350px] rounded-full overflow-hidden"
                    >
                        <Image
                            src={"/images/me.png"}
                            alt="Photo description"
                            priority
                            quality={100}
                            className="object-cover"
                            fill={true}
                        />
                    </motion.div>
                </motion.div>

                {/* Animated SVG Circle */}
                <motion.svg
                    className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#ffffff"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
}

export default Photo;
