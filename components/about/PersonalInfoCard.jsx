"use client"

import {FiCalendar, FiMail, FiMapPin, FiPhone} from "react-icons/fi";
import { motion } from "framer-motion";

const PersonalInfoCard = ({ age, email, phone }) => {
    return (
        <div className="p-6 rounded-xl backdrop-blur-sm border border-primary/50 shadow-xl">
            <h2 className="text-2xl font-mono font-semibold text-primary-hover mb-6 flex items-center tracking-tight">
                <FiMapPin className=" mr-3 text-2xl" />
                Personal Details
            </h2>
            <ul className="space-y-3">
                <motion.li
                    className="flex items-center bg-white/5 border border-primary/50 hover:bg-white/10 p-3 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <FiCalendar className="text-primary-hover mr-3" />
                    <span>{age} years</span>
                </motion.li>
                <motion.li
                    className="flex items-center bg-white/5 border border-primary/50 hover:bg-white/10 p-3 rounded-lg  transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    viewport={{ once: true }}
                >
                    <FiMail className="text-primary-hover mr-3" />
                    <a href={`mailto:${email}`} className="hover:text-accent transition-colors">
                        {email}
                    </a>
                </motion.li>
                <motion.li
                    className="flex items-center bg-white/5 border border-primary/50 hover:bg-white/10 p-3 rounded-lg  transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <FiPhone className="text-primary-hover mr-3" />
                    <a href={`tel:${phone}`} className="hover:text-accent transition-colors">
                        {phone}
                    </a>
                </motion.li>
            </ul>
        </div>
    );
};

export default PersonalInfoCard;