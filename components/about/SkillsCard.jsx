"use client"

import { FiCode } from "react-icons/fi";
import { motion } from "framer-motion";

const SkillsCard = ({ skills }) => {
    return (
        <div className="p-6 rounded-xl backdrop-blur-sm border border-primary/50 shadow-xl">
            <h2 className="text-2xl font-mono font-semibold text-primary-hover mb-6 flex items-center tracking-tight">
                <FiCode className=" mr-3 text-2xl" />
                Technical Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills?.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center bg-white/5 border border-primary/50 hover:bg-white/10 p-3 rounded-lg  transition-all duration-300 group"
                        whileHover={{ scale: 1.01 }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * index }}
                        viewport={{ once: true }}
                    >
                        <div className="w-3 h-3  bg-primary  rounded-full mr-3 group-hover:animate-pulse" />
                        <span className="font-medium  ">{skill}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SkillsCard;