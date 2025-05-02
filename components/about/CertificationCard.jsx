"use client"

import { FiFilter, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { FaCertificate } from "react-icons/fa";

const CertificationCard = ({ certifications }) => {
    const [showAll, setShowAll] = useState(false);
    const [filter, setFilter] = useState("current"); // 'current', 'completed', 'all'

    // Filter certifications based on dropdown selection
    const filteredCertifications = useMemo(() => {
        return certifications.filter(cert => {
            if (filter === "current") return cert.timeline.includes("Present");
            if (filter === "completed") return !cert.timeline.includes("Present");
            return true; // 'all' shows everything
        });
    }, [certifications, filter]);

    // Determine what to display based on showAll state
    const displayCertifications = showAll ? certifications : filteredCertifications;

    return (
        <div className="p-6 backdrop-blur border border-gray-700/50 shadow-xl rounded-lg">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-mono font-semibold text-white flex items-center tracking-tight">
                    <FaCertificate className="text-accent mr-3 text-2xl" />
                    Certifications
                </h2>

                {/* Filter Controls (independent of showAll) */}
                {/*<div className="flex items-center space-x-2">*/}
                {/*    <FiFilter className="text-gray-400" />*/}
                {/*    <select*/}
                {/*        value={filter}*/}
                {/*        onChange={(e) => setFilter(e.target.value)}*/}
                {/*        className="bg-gray-800 text-sm text-white px-2 py-1 rounded border border-gray-700"*/}
                {/*    >*/}
                {/*        <option value="current">Current</option>*/}
                {/*        <option value="completed">Completed</option>*/}
                {/*        <option value="all">All</option>*/}
                {/*    </select>*/}
                {/*</div>*/}
            </div>

            <div className="space-y-4">
                {displayCertifications.length > 0 ? (
                    displayCertifications.map((certification, index) => (
                        <motion.div
                            key={index}
                            className="bg-accent/10 border p-4 rounded-lg border-l-4 border-accent"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * index }}
                            viewport={{ once: true }}
                        >
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {certification.title}
                                </h3>
                                {certification.timeline.includes("Present") ? (
                                    <span className="text-xs bg-accent/20 text-white px-2 py-1 rounded">
                                        Current
                                    </span>
                                ) : (
                                    <span className="text-xs bg-gray-600/20 text-gray-300 px-2 py-1 rounded">
                                        Completed
                                    </span>
                                )}
                            </div>
                            <div className={"flex items-start justify-between"}>
                            <div>
                                <div className="flex items-start">
                                    <span className="text-accent font-medium min-w-[90px]">Institute:</span>
                                    <span className="text-white">{certification.institute}</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-accent font-medium min-w-[90px]">Batch:</span>
                                    <span className="text-white">{certification.batch}</span>
                                </div>
                            </div>
                                <div className="flex justify-end">
                                    <span className="text-accent text-sm">{certification.timeline}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <p className="text-gray-400 text-center py-4">
                        No {filter === "all" ? "" : filter} certifications found
                    </p>
                )}
            </div>

            {/* See All Button - shows ALL certifications when clicked */}
            {!showAll && certifications.length > 0 && (
                <button
                    onClick={() => setShowAll(true)}
                    className="flex items-center text-accent mt-4 text-sm hover:text-white transition-colors"
                >
                    <FiChevronDown className="mr-1" />
                    See  {certifications.length} More Certifications
                </button>
            )}

            {/* Show Less Button - returns to filtered view */}
            {showAll && (
                <button
                    onClick={() => setShowAll(false)}
                    className="flex items-center text-accent mt-4 text-sm hover:text-white transition-colors"
                >
                    <FiChevronUp className="mr-1" />
                    Show Filtered View
                </button>
            )}
        </div>
    );
};

export default CertificationCard;