"use client"

import { FiUsers } from "react-icons/fi";
import { motion } from "framer-motion";

const SoftSkillsCard = ({ softSkills }) => {
    return (
        <div className="p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 shadow-xl">
            <h2 className="text-2xl font-mono font-semibold text-white mb-6 flex items-center tracking-tight">
                <FiUsers className="text-accent mr-3 text-2xl" />
                Soft Skills
            </h2>
            <div className="flex flex-wrap gap-2">
                {softSkills?.map((skill, index) => (
                    <motion.span
                        key={index}
                        className="px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-full text-sm  hover:bg-accent/20 transition-all"
                        whileHover={{ scale: 1.05 }}
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