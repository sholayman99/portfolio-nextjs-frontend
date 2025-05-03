"use client"

import { MdInterests } from "react-icons/md";
import { motion } from "framer-motion";

const InterestsCard = ({ interests }) => {
    return (
        <div className="p-6 rounded-xl backdrop-blur-sm border border-primary/50 shadow-xl">
            <h2 className="text-2xl font-mono font-semibold text-primary-hover mb-6 flex items-center tracking-tight">
                <MdInterests className=" mr-3 text-2xl" />
                Interests
            </h2>
            <div className="flex flex-wrap gap-2">
                {interests?.map((interest, index) => (
                    <motion.span
                        key={index}
                        className="px-3 py-1.5 bg-white/5 border border-primary/50 rounded-full text-sm  hover:bg-white/10 transition-all"
                        whileHover={{ scale: 1.01 }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * index }}
                        viewport={{ once: true }}
                    >
                        {interest}
                    </motion.span>
                ))}
            </div>
        </div>
    );
};

export default InterestsCard;