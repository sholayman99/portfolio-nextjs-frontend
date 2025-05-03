"use client"

import { FiBriefcase, FiChevronDown, FiChevronUp, FiFilter } from "react-icons/fi";
import { motion } from "framer-motion";
import { formatDate } from "@/lib/utils";
import { useState, useMemo } from "react";

const WorkExperienceCard = ({ workExperience }) => {
    const [showAll, setShowAll] = useState(false);
    const [filter, setFilter] = useState("all"); // 'all', 'current', 'past'

    // Sort experiences by date (newest first)
    const sortedExperiences = useMemo(() => {
        return [...workExperience].sort((a, b) => {
            const dateA = a.endDate ? new Date(a.endDate) : new Date();
            const dateB = b.endDate ? new Date(b.endDate) : new Date();
            return dateB - dateA;
        });
    }, [workExperience]);

    // Filter experiences based on current/past status
    const filteredExperiences = useMemo(() => {
        return sortedExperiences.filter(exp => {
            if (filter === "current") return !exp.endDate;
            if (filter === "past") return exp.endDate;
            return true; // 'all'
        });
    }, [sortedExperiences, filter]);

    // Only show other experiences (excluding the first one) when expanded
    const experiencesToShow = useMemo(() => {
        if (showAll) {
            return filteredExperiences;
        }
        return filteredExperiences.slice(0, 1); // Only show first experience when collapsed
    }, [filteredExperiences, showAll]);

    // Group by year for timeline view
    const experiencesByYear = useMemo(() => {
        return experiencesToShow.reduce((acc, exp) => {
            const year = exp.endDate
                ? new Date(exp.endDate).getFullYear()
                : new Date().getFullYear();
            if (!acc[year]) acc[year] = [];
            acc[year].push(exp);
            return acc;
        }, {});
    }, [experiencesToShow]);

    return (
        <div className="p-6 rounded-xl backdrop-blur-sm border border-primary/50 shadow-xl">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-mono font-semibold text-primary-hover flex items-center tracking-tight">
                    <FiBriefcase className="mr-3 text-2xl" />
                    Work Experience
                </h2>

                {/* Filter Controls */}
                {/*<div className="flex items-center space-x-2">*/}
                {/*    <FiFilter className="text-gray-400" />*/}
                {/*    <select*/}
                {/*        value={filter}*/}
                {/*        onChange={(e) => setFilter(e.target.value)}*/}
                {/*        className="bg-gray-800 text-sm text-white px-2 py-1 rounded border border-gray-700"*/}
                {/*    >*/}
                {/*        <option value="all">All</option>*/}
                {/*        <option value="current">Current</option>*/}
                {/*        <option value="past">Past</option>*/}
                {/*    </select>*/}
                {/*</div>*/}
            </div>

            {/* All Experiences (conditionally rendered based on showAll) */}
            {Object.entries(experiencesByYear).sort(([yearA], [yearB]) => yearB - yearA).map(([year, yearExperiences]) => (
                <div key={year}>
                    <h3 className="text-white text-sm mb-2">{year}</h3>
                    <div className="space-y-4 ml-4 border-l border-primary/50 pl-4">
                        {yearExperiences.map((exp, index) => (
                            <motion.div
                                key={`${year}-${index}`}
                                className="bg-white/5 border border-primary/50 p-4 rounded-lg"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                                viewport={{ once: false }}
                            >
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-semibold text-lg">{exp.title}</h3>
                                        <p className="text-primary">{exp.company}</p>
                                    </div>
                                    <span className="text-xs bg-white/5 text-white  px-2 py-1 rounded">
                                        {!exp.endDate ? <span className={"text-primary"}>Current </span> : "Past"}
                                    </span>
                                </div>
                                <p className="text-xs text-white/90 mb-2">
                                    {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : "Present"} | {exp.location}
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
            ))}

            {/* See All Button (only shown when there are more experiences to show) */}
            {filteredExperiences.length > 1 && (
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="flex items-center text-primary mt-4 text-sm hover:text-white transition-colors"
                >
                    {showAll ? (
                        <>
                            <FiChevronUp className="mr-1" />
                            Show Less
                        </>
                    ) : (
                        <>
                            <FiChevronDown className="mr-1" />
                            See {filteredExperiences.length - 1} More Experiences
                        </>
                    )}
                </button>
            )}

            {/* Empty State */}
            {filteredExperiences.length === 0 && (
                <p className="text-gray-400 text-center py-4">No {filter === "all" ? "" : filter} experiences found</p>
            )}
        </div>
    );
};

export default WorkExperienceCard;