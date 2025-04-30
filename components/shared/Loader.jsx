"use client";

import { motion } from "framer-motion";

const FloatingOrbs = () => {
    const orbs = Array.from({ length: 8 });

    return (
        <div className="relative h-32 w-32">
            {orbs.map((_, i) => (
                <motion.span
                    key={i}
                    className="absolute block h-3 w-3 rounded-full bg-gradient-to-br from-gray-300 to-white shadow-glow"
                    style={{
                        left: `${Math.cos((i * Math.PI * 2) / orbs.length) * 30}px`,
                        top: `${Math.sin((i * Math.PI * 2) / orbs.length) * 30}px`,
                    }}
                    animate={{
                        x: [
                            0,
                            Math.cos((i * Math.PI * 4) / orbs.length) * 10,
                            0
                        ],
                        y: [
                            0,
                            Math.sin((i * Math.PI * 4) / orbs.length) * 10,
                            0
                        ],
                        opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "mirror",
                        delay: i * 0.2
                    }}
                />
            ))}
            <motion.div
                className="absolute inset-0 m-auto h-12 w-12 rounded-full border-4 borderwhite border-t-transparent shadow-lg shadow-blue-500/30"
                animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    rotate: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    },
                    scale: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "mirror"
                    }
                }}
            />
        </div>
    );
};

export default function Loader() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary backdrop-blur-xl gap-8"
        >
            <FloatingOrbs />

            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ delay: 0.3 }}
                className="max-w-md text-center"
            >
                <motion.h2
                    className="text-2xl font-bold bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    Crafting Your Experience
                </motion.h2>
                <motion.p
                    className="mt-2 text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    Loading premium content...
                </motion.p>
            </motion.div>

            <motion.div
                className="h-1.5 w-64 bg-gray-800 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <motion.div
                    className="h-full bg-gradient-to-r from-gray-300 to-white"
                    animate={{
                        x: ["-100%", "100%"],
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut"
                    }}
                />
            </motion.div>
        </motion.div>
    );
}