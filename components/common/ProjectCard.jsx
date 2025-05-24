import React from 'react';
import {motion} from "framer-motion";
import Link from "next/link";

const ProjectCard = ({index, project, length}) => {
    return (
        <Link href="/" className={"cursor-pointer"}>
            <motion.div

                className="relative h-[250px] w-[340px] rounded-2xl overflow-hidden group border border-[#64ff4c]/20 shadow-lg hover:shadow-[0_0_20px_3px_rgba(100,255,76,0.3)] transition-all duration-500"
                initial={{opacity: 0, y: 40}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{
                    boxShadow: "0 0 25px -5px rgba(100, 255, 76, 0.4)"
                }}
            >
                <img
                    src={project.cover}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end"
                    initial={{opacity: 0}}
                    whileHover={{opacity: 1}}
                    transition={{duration: 0.4}}
                >
                    <div className="transform translate-y-5 group-hover:translate-y-0 transition-transform duration-500">
                        <h2 className="text-[#64ff4c] text-xl font-bold mb-2">
                            {project.title}
                        </h2>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tools.split(",").slice(0, 3).map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-white/10 px-3 py-1 rounded-full text-xs text-gray-200 backdrop-blur-sm">{tech}</span>
                            ))}
                        </div>
                        <div className="flex justify-end items-center mt-4">
                            <span className="text-xs text-gray-400">{index + 1}/{length}</span>
                        </div>

                    </div>
                </motion.div>
            </motion.div>
        </Link>
    );
};

export default ProjectCard;