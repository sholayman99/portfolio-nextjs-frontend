import React from 'react';
import CommonTitle from "@/components/common/CommonTitle";

const ProjectsSkeleton = () => {
    return (
        <section id="work" className="py-20">
            <CommonTitle title="SELECTED WORK" />
            <div className="flex flex-wrap items-center justify-center gap-6 py-10">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="h-[250px] w-[340px] rounded-2xl border border-[#64ff4c]/10 bg-gray-700 animate-pulse" />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSkeleton;