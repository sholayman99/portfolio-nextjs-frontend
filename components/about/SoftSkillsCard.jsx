"use client"

import { FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";

const SoftSkillsCard = ({ softSkills }) => {
    return (
        <div className="p-6 rounded-xl backdrop-blur-sm border border-primary/50 shadow-xl">
            <h2 className="text-2xl font-mono font-semibold text-primary-hover mb-6 flex items-center tracking-tight">
                <FiUsers className=" mr-3 text-2xl" />
                Soft Skills
            </h2>
            <div className="flex flex-wrap gap-2">
                {softSkills?.map((skill, index) => (
                    <motion.span
                        key={index}
                        className="px-3 py-1.5 bg-white/5 border border-primary/50 rounded-full text-sm  hover:bg-white/10 transition-all"
                        whileHover={{ scale: 1.01 }}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * index }}
                        viewport={{ once: true }}
                    >
                        {skill}
                    </motion.span>
                ))}
            </div>
        </div>
    );
};

export default SoftSkillsCard;