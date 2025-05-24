"use client";

import React from "react";
import CommonTitle from "@/components/common/CommonTitle";
import {useQuery} from "@tanstack/react-query";
import {fetchWork} from "@/api";
import {motion} from "framer-motion";
import ProjectsSkeleton from "@/app/skeletons/ProjectsSkeleton";
import ProjectCard from "@/components/common/ProjectCard";
import CommonButton from "@/components/common/CommonButton";

const Work = () => {
    const {data, isLoading, isError} = useQuery({
        queryKey: ["work"],
        queryFn: fetchWork,
    });

    if (isLoading) return <ProjectsSkeleton/>;
    if (isError)
        return (
            <div className="text-center py-20 text-red-500">
                Error loading projects
            </div>
        );

    const projects = data.projects;

    return (
        <section id="work" className="py-20 relative overflow-hidden">


            <div>
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{amount: 0.2, once: false}}
                    transition={{duration: 1, ease: "easeInOut"}}
                >
                    <CommonTitle title="SELECTED WORK"/>

                    <div className="flex flex-wrap items-center justify-center gap-6 py-10">
                        {projects?.slice(0,5)?.map((project, index) => (
                            <ProjectCard key={index} index={index} project={project} length={projects.length}/>
                        ))}
                    </div>
                    {/* View All Button */}
                    <motion.div className="flex justify-center mt-8">
                        <CommonButton text="View all"/>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Work;