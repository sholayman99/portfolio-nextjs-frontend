"use client";

import { fetchSocials } from "@/api";
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
        <div className="flex gap-x-5">
            {data?.map((item, i) => (
                <div key={i}>
                    <div className="relative group w-[42px] h-[42px] rounded-full cursor-pointer flex items-center justify-center">
                        {/* Glow background with subtle pulse animation */}
                        <div className="absolute inset-0 bg-accent/30 rounded-full blur-md scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-[1.15]"></div>

                        {/* Animated ring effect on hover */}
                        <div className="absolute inset-0 border-2 border-white/20 rounded-full scale-90 group-hover:scale-110 group-hover:border-white/50 transition-all duration-700"></div>

                        {/* Main circle with elegant hover transition */}
                        <div className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-sm scale-95 group-hover:scale-100 group-hover:bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"></div>

                        {/* Icon with perfect color transition */}
                        <div
                            dangerouslySetInnerHTML={{ __html: item.icon }}
                            className="relative transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] opacity-90 group-hover:opacity-100 [&>svg]:w-[20px] [&>svg]:h-[20px] [&>svg]:fill-white group-hover:[&>svg]:fill-black group-hover:[&>svg]:scale-110"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Socials;