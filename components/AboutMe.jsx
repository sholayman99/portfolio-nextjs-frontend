"use client";

import CommonTitle from "@/components/CommonTitle";
import { useQuery } from "@tanstack/react-query";
import { fetchAboutMe } from "@/api/social";
import { FiCalendar, FiCode, FiMail, FiMapPin, FiPhone, FiAward } from "react-icons/fi";
import { motion } from "framer-motion";

const AboutMe = () => {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['about'],
        queryFn: fetchAboutMe,
    });

    if (isLoading) return (
        <div className="min-h-screen flex items-center justify-center bg-[#2A2C39]">
            <div className="animate-pulse text-[#E0E0E0]">Loading...</div>
        </div>
    );

    if (isError) return (
        <div className="min-h-screen flex items-center justify-center bg-[#2A2C39] text-red-400">
            Error: {error.message}
        </div>
    );

    return (
        <div className="min-h-screen text-[#E0E0E0] py-8">
            <div className="container mx-auto">
                <CommonTitle />

                {/* Main Content Card with animation */}
                <motion.div
                    className="mt-6 overflow-hidden"
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    {/* Header */}
                    <div className="border-b border-[#45475A] py-3">
                        <p className="mt-4 text-[#B8B9C5] leading-relaxed">
                            {data?.about?.content}
                        </p>
                    </div>

                    {/* Grid Layout */}
                    <div className="md:flex">
                        {/* Left Column - Skills */}
                        <div className="md:w-2/3 p-8 border-r border-[#45475A]">
                            <div className="flex items-center mb-6">
                                <FiCode className="text-[#76E4F7] text-2xl mr-3" />
                                <h2 className="text-xl font-semibold text-[#E0E0E0]">Technical Skills</h2>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {data?.about?.skills?.map((skill, index) => (
                                    <div key={index} className="flex items-center group">
                                        <div className="w-2 h-2 bg-[#76E4F7] rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                                        <span className="text-[#B8B9C5] group-hover:text-white transition-colors">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Personal Info */}
                        <div className="md:w-1/3 p-8">
                            {/* Personal Info */}
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold text-[#E0E0E0] mb-4 flex items-center">
                                    <FiMapPin className="text-[#76E4F7] mr-2" />
                                    Personal Details
                                </h2>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-[#B8B9C5]">
                                        <FiCalendar className="text-[#76E4F7] mr-3" />
                                        {data?.about?.age} years
                                    </li>
                                    <li className="flex items-center text-[#B8B9C5]">
                                        <FiMail className="text-[#76E4F7] mr-3" />
                                        {data?.about?.email}
                                    </li>
                                    <li className="flex items-center text-[#B8B9C5]">
                                        <FiPhone className="text-[#76E4F7] mr-3" />
                                        {data?.about?.phone}
                                    </li>
                                </ul>
                            </div>

                            {/* Interests */}
                            <div className="mb-8">
                                <h2 className="text-xl font-semibold text-[#E0E0E0] mb-4 flex items-center">
                                    <FiAward className="text-[#76E4F7] mr-2" />
                                    Interests
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {data?.about?.interests?.map((interest, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-[#45475A] text-[#B8B9C5] rounded-full text-sm hover:bg-[#76E4F7] hover:text-[#2A2C39] transition-colors"
                                        >
                                            {interest}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Qualification */}
                            <div>
                                <h2 className="text-xl font-semibold text-[#E0E0E0] mb-2 flex items-center">
                                    <FiAward className="text-[#76E4F7] mr-2" />
                                    Qualification
                                </h2>
                                <p className="text-[#B8B9C5]">{data?.about?.qualification}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default AboutMe;
