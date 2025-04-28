"use client";

import { fetchSocials } from "@/api/social";
import { useQuery } from "@tanstack/react-query";
import SocialsSkeleton from "@/app/skeletons/SocialsSkeleton";

const Socials = () => {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ["socials"],
        queryFn: fetchSocials,
    });

    if (isLoading) {
        return <SocialsSkeleton />;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="flex gap-x-5 mt-10">
            {data?.map((item, i) => (
                <div key={i}>
                    <div className="relative group w-[38px] h-[38px] rounded-full cursor-pointer flex items-center justify-center hover:scale-110 transition-all duration-300">
                        {/* Glow background (static light) */}
                        <div className="absolute inset-0 bg-[#76E4F7] opacity-30 rounded-full blur-md scale-110"></div>

                        {/* White background on hover */}
                        <div className="absolute inset-0 bg-[#76E4F7] rounded-full transition-all duration-500 scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100"></div>

                        {/* Icon */}
                        <div
                            dangerouslySetInnerHTML={{ __html: item.icon }}
                            className="relative text-[#76E4F7] transition-all duration-500 ease-in-out opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-12"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Socials;
