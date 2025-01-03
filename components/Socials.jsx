"use client";

import { fetchSocials } from "@/api/social";
import { useQuery } from "@tanstack/react-query";
import SocialsSkeleton from "@/app/skeletons/SocialsSkeleton";

const Socials = () => {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['socials'],
        queryFn: fetchSocials,
    });

    console.log(data);

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
                    <div
                        className="relative group w-[38px] h-[38px] rounded-full cursor-pointer flex items-center justify-center">
                        {/* Background Effect */}
                        <div
                            className="absolute inset-0 bg-accent rounded-full transition-transform scale-110 opacity-100 group-hover:scale-100 group-hover:bg-white"></div>
                        {/* Icon or Content */}
                        <div
                            dangerouslySetInnerHTML={{__html: item.icon}}
                            className="relative text-white transition-opacity duration-300 group-hover:opacity-100 opacity-70"
                        ></div>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Socials;
