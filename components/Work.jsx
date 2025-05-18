"use client"

import React from 'react';
import CommonTitle from "@/components/common/CommonTitle";
import { useQuery } from "@tanstack/react-query";
import { fetchWork } from "@/api";

const Work = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["work"],
        queryFn: fetchWork,
    });


    if (isLoading) return <div className="text-center py-20">Loading...</div>;
    if (isError) return <div className="text-center py-20 text-red-500">Error loading projects</div>;

    return (
        <section id="work" className="py-20">
            <CommonTitle title="SELECTED WORK" />

        </section>
    );
};

export default Work;