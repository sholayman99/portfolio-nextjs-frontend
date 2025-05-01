"use client"

import { FiAward } from "react-icons/fi";
import { motion } from "framer-motion";

const QualificationCard = ({ qualification }) => {
    console.log(qualification)
    return (
        <div className="p-6 backdrop-blur border border-gray-700/50 shadow-xl">
            <h2 className="text-2xl font-mono font-semibold text-white mb-6 flex items-center tracking-tight">
                <FiAward className="text-accent mr-3 text-2xl" />
                Qualification
            </h2>
            <motion.p
                className="bg-gray-800/40 p-3 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
            >
                {qualification}
            </motion.p>
        </div>
    );
};

export default QualificationCard;