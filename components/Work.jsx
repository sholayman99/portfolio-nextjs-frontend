"use client"

import React from 'react';
import CommonTitle from "@/components/common/CommonTitle";
import {useQuery} from "@tanstack/react-query";
import { fetchWork} from "@/api";

const Work = () => {
    const { isLoading, isError, data, error, refetch } = useQuery({
        queryKey: ["work"],
        queryFn: fetchWork,
    });
    console.log(data);
    return (
        <section id="work" className="lg:pt[120px] md:pt-[90px] pt-[70px]  leading-relaxed">
            <CommonTitle title="MY WORK" />
        </section>
    );
};

export default Work;