"use client"

import { FiAward } from "react-icons/fi";
import { motion } from "framer-motion";

const QualificationCard = ({ qualification }) => {
    return (
        <div className="p-6 backdrop-blur border border-primary/50 shadow-xl rounded-lg">
            <h2 className="text-2xl font-mono font-semibold text-primary-hover mb-6 flex items-center tracking-tight">
                <FiAward className=" mr-3 text-2xl" />
                Qualifications
            </h2>

            <div className="space-y-4">
                {qualification.map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-white/5 border border-primary/50 p-4 rounded-lg"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        viewport={{ once: true }}
                    >
                            <p className="text-white text-[15px]">{item.degree}</p>
                            <p className="text-primary">{item.department}</p>
                            <p className="text-gray-300 text-sm">{item.institution}</p>
                            {/*<p className="text-white">{item.passingYear}</p>*/}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default QualificationCard;