"use client";

import { motion } from "framer-motion";

const bounceTransition = {
    y: {
        duration: 0.4,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
    },
};

export default function Loader() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center "
        >
            <div className="flex space-x-2">
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: "#64cb47" }}
                        animate={{ y: ["0%", "-100%", "0%"] }}
                        transition={{
                            ...bounceTransition,
                            delay: i * 0.1,
                        }}
                    />
                ))}
            </div>
        </motion.div>
    );
}
