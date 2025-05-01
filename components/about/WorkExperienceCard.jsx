"use client"

import { FiBriefcase } from "react-icons/fi";
import { motion } from "framer-motion";
import {formatDate} from "@/lib/utils"

const WorkExperienceCard = ({ workExperience }) => {
    return (
        <div className="p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 shadow-xl">
            <h2 className="text-2xl font-mono font-semibold text-white mb-6 flex items-center tracking-tight">
                <FiBriefcase className="text-accent mr-3 text-2xl" />
                Work Experience
            </h2>
            <div className="space-y-4">
                {workExperience?.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="bg-accent/10 border border-accent/30 p-4 rounded-lg"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        viewport={{ once: true }}
                    >
                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                        <p className="text-accent">{exp.company}</p>
                        <p className="text-sm  mb-2">
                            {formatDate(exp.startDate)} - {formatDate(exp.endDate) || "Present"} | {exp.location}
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-sm text-white/70">
                            {exp.responsibilities.map((resp, i) => (
                                <li key={i}>{resp}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WorkExperienceCard;