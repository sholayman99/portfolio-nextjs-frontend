"use client";

const SocialsSkeleton = () => {
    return (
        <div className="flex gap-x-5 mt-10 animate-pulse">
            {[...Array(5)].map((_, i) => (
                <div key={i}>
                    <div
                        className="relative w-[38px] h-[38px] rounded-full bg-gray-700 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gray-600 rounded-full"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SocialsSkeleton;