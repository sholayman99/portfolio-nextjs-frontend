"use client";

import CommonTitle from "@/components/common/CommonTitle";
import { useQuery } from "@tanstack/react-query";
import { fetchAboutMe } from "@/api";
import { motion } from "framer-motion";
import AboutSkeleton from "@/app/skeletons/AboutSkeleton";
import PersonalInfoCard from "@/components/about/PersonalInfoCard";
import InterestsCard from "@/components/about/InterestsCard";
import SkillsCard from "@/components/about/SkillsCard";
import QualificationCard from "@/components/about/QualificationCard";
import SoftSkillsCard from "@/components/about/SoftSkillsCard";
import WorkExperienceCard from "@/components/about/WorkExperienceCard";
import CertificationCard from "@/components/about/CertificationCard";

const AboutMe = () => {
    const { isLoading, isError, data, error, refetch } = useQuery({
        queryKey: ["about"],
        queryFn: fetchAboutMe,
    });

    console.log(data)


    if (isLoading) {
        return (
            <div className="lg:pt-[150px] pt-[120px] font-inter text-[15px] leading-relaxed tracking-wide text-white ">
                <CommonTitle
                    title="ABOUT ME"
                    subtitle="Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology."
                />
                <div className={"mt-12"}>
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
        <section id="about" className="lg:py-[150px] pt-[120px] leading-relaxed">
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

            <div className="grid grid-cols-3 gap-6">

                {/* Left Column - Skills (2/3 width) */}
                <div  className="col-span-2  space-y-6">
                    <motion.div

                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: false }}
                    >
                        <SkillsCard skills={data?.about?.skills} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: false }}
                    >
                        <WorkExperienceCard workExperience={data?.about?.workExperience} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: false }}
                    >
                        <CertificationCard certifications={data?.about?.certifications} />
                    </motion.div>
                </div>
                {/* Right Column - Personal Info (1/3 width) */}
                <div className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        <SoftSkillsCard softSkills={data?.about?.softSkills} />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        <PersonalInfoCard
                            age={data?.about?.calculatedAge}
                            email={data?.about?.email}
                            phone={data?.about?.phone}
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: false }}
                    >
                        <QualificationCard qualification={data?.about?.qualification} />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: false }}
                    >
                        <InterestsCard interests={data?.about?.interests} />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutMe;