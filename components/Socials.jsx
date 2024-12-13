"use client";

import { fetchSocials } from "@/api/social";
import { useQuery } from "@tanstack/react-query";

const Socials = () => {
    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['socials'],
        queryFn: fetchSocials,
    });

    console.log(data);

    if (isLoading) {
        return <div>Loading socials...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="flex gap-x-5 mt-10">
            {data.map((item, i) => (
                <div key={i}>
                    <div
                        dangerouslySetInnerHTML={{ __html: item.icon }}
                        className={`social-icon rounded-full hover:bg-white w-[38px] h-[38px] flex items-center justify-center
                        transition-all ease-[cubic-bezier(0.25, 0.8, 0.25, 1)] duration-700 cursor-pointer opacity-70
                        hover:scale-105 hover:opacity-100 hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)]`}
                    />
                </div>
            ))}
        </div>
    );
};

export default Socials;
