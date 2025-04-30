"use client";

import CommonTitle from "@/components/common/CommonTitle";
import { useQuery } from "@tanstack/react-query";
import { fetchAboutMe } from "@/api/social";
import { FiCalendar, FiCode, FiMail, FiMapPin, FiPhone, FiAward } from "react-icons/fi";
import { motion } from "framer-motion";
import AboutSkeleton from "@/app/skeletons/AboutSkeleton";

const SectionHeader = ({ icon: Icon, title }) => (
    <motion.h2
        className="text-2xl font-playfair font-semibold text-white mb-6 flex items-center tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
    >
        <Icon className="text-accent mr-3 text-2xl" />
        {title}
    </motion.h2>
);

const AboutMe = () => {
    const { isLoading, isError, data, error, refetch } = useQuery({
        queryKey: ["about"],
        queryFn: fetchAboutMe,
    });

    if (isLoading) {
        return (
            <div className="lg:pt-[150px] pt-[120px] font-inter text-[15px] leading-relaxed tracking-wide text-white p-6">
                <CommonTitle
                    title="ABOUT ME"
                    subtitle="Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology."
                />
                <div className="mt-8">
                    <AboutSkeleton />
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-accent font-inter tracking-wide p-6">
                <p className="mb-4">Error: {error.message}</p>
                <button
                    onClick={() => refetch()}
                    className="px-6 py-2 border border-accent rounded-lg hover:bg-accent/10 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
                >
                    Retry
                </button>
            </div>
        );
    }

    return (
        <section id="about" className="lg:pt-[150px] pt-[120px] leading-relaxed">
            <CommonTitle
                title="ABOUT ME"
                subtitle="Discover more about my background, skills, and professional journey in technology and development."
            />

            {/* Main Content */}
            <motion.div
                className="pb-5 mt-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                <p className="text-base leading-8 text-white/80 font-inter">
                    {data?.about?.content}
                </p>
            </motion.div>

            <div className="md:flex gap-8 items-start mt-8">
                {/* Left Column - Skills (2/3 width) */}
                <motion.div
                    className="md:w-2/3 p-6  rounded-xl backdrop-blur-sm border border-gray-700/50 shadow-xl"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <SectionHeader icon={FiCode} title="Technical Skills" />
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {data?.about?.skills?.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center bg-gray-800/40 p-3 rounded-lg hover:bg-gray-700/50 transition-all duration-300 group"
                                whileHover={{ scale: 1.02 }}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.05 * index }}
                                viewport={{ once: true }}
                            >
                                <div className="w-3 h-3 bg-accent rounded-full mr-3 group-hover:animate-pulse" />
                                <span className="font-medium">{skill}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Column - Personal Info (1/3 width) */}
                <div className="md:w-1/3 space-y-6">
                    {/* Personal Details Card */}
                    <motion.div
                        className="p-6  rounded-xl backdrop-blur-sm border border-gray-700/50 shadow-xl"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeader icon={FiMapPin} title="Personal Details" />
                        <ul className="space-y-3">
                            <motion.li
                                className="flex items-center bg-gray-800/40 p-3 rounded-lg"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <FiCalendar className="text-accent mr-3" />
                                <span>{data?.about?.age} years</span>
                            </motion.li>
                            <motion.li
                                className="flex items-center bg-gray-800/40 p-3 rounded-lg hover:bg-gray-700/50 transition-colors"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 }}
                                viewport={{ once: true }}
                            >
                                <FiMail className="text-accent mr-3" />
                                <a href={`mailto:${data?.about?.email}`} className="hover:text-accent transition-colors">
                                    {data?.about?.email}
                                </a>
                            </motion.li>
                            <motion.li
                                className="flex items-center bg-gray-800/40 p-3 rounded-lg hover:bg-gray-700/50 transition-colors"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <FiPhone className="text-accent mr-3" />
                                <a href={`tel:${data?.about?.phone}`} className="hover:text-accent transition-colors">
                                    {data?.about?.phone}
                                </a>
                            </motion.li>
                        </ul>
                    </motion.div>

                    {/* Interests Card */}
                    <motion.div
                        className="p-6  rounded-xl backdrop-blur-sm border border-gray-700/50 shadow-xl"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeader icon={FiAward} title="Interests" />
                        <div className="flex flex-wrap gap-2">
                            {data?.about?.interests?.map((interest, index) => (
                                <motion.span
                                    key={index}
                                    className="px-3 py-1.5 bg-accent/10 border border-accent/30 rounded-full text-sm text-accent hover:bg-accent/20 transition-all"
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 * index }}
                                    viewport={{ once: true }}
                                >
                                    {interest}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Qualification Card */}
                    <motion.div
                        className="p-6 backdrop-blur border border-gray-700/50 shadow-xl"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <SectionHeader icon={FiAward} title="Qualification" />
                        <motion.p
                            className="bg-gray-800/40 p-3 rounded-lg"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            {data?.about?.qualification}
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;