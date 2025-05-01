import { motion } from "framer-motion";

const AboutSkeleton = () => {
    return (
        <div className="font-inter text-[15px] leading-relaxed tracking-wide text-white">
            {/* Content Skeleton */}
            <div className="space-y-3 mb-8">
                <div className="h-4 bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                <div className="h-4 bg-gray-700 rounded w-2/3"></div>
            </div>

            <div className="md:flex gap-8 items-start">
                {/* Left Column Skeleton */}
                <div className="md:w-2/3 space-y-6">
                    {/* Skills Skeleton */}
                    <div className="p-6 rounded-xl bg-gray-800/40 border border-gray-700/50">
                        <div className="h-8 w-48 bg-gray-700 rounded mb-6"></div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {[...Array(6)].map((_, i) => (
                                <div key={i} className="h-12 bg-gray-700 rounded-lg"></div>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills Skeleton */}
                    <div className="p-6 rounded-xl bg-gray-800/40 border border-gray-700/50">
                        <div className="h-8 w-48 bg-gray-700 rounded mb-6"></div>
                        <div className="flex flex-wrap gap-2">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="h-8 w-24 bg-gray-700 rounded-full"></div>
                            ))}
                        </div>
                    </div>

                    {/* Work Experience Skeleton */}
                    <div className="p-6 rounded-xl bg-gray-800/40 border border-gray-700/50">
                        <div className="h-8 w-48 bg-gray-700 rounded mb-6"></div>
                        <div className="space-y-4">
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="p-4 bg-gray-700/30 rounded-lg">
                                    <div className="h-6 w-3/4 bg-gray-700 rounded mb-2"></div>
                                    <div className="h-4 w-1/2 bg-gray-700 rounded mb-3"></div>
                                    <div className="space-y-2">
                                        <div className="h-3 w-full bg-gray-700 rounded"></div>
                                        <div className="h-3 w-5/6 bg-gray-700 rounded"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column Skeleton */}
                <div className="md:w-1/3 space-y-6 mt-6 md:mt-0">
                    {/* Personal Info Skeleton */}
                    <div className="p-6 rounded-xl bg-gray-800/40 border border-gray-700/50">
                        <div className="h-8 w-48 bg-gray-700 rounded mb-6"></div>
                        <div className="space-y-3">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="h-12 bg-gray-700 rounded-lg"></div>
                            ))}
                        </div>
                    </div>

                    {/* Interests Skeleton */}
                    <div className="p-6 rounded-xl bg-gray-800/40 border border-gray-700/50">
                        <div className="h-8 w-48 bg-gray-700 rounded mb-6"></div>
                        <div className="flex flex-wrap gap-2">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="h-8 w-20 bg-gray-700 rounded-full"></div>
                            ))}
                        </div>
                    </div>

                    {/* Qualification Skeleton */}
                    <div className="p-6 rounded-xl bg-gray-800/40 border border-gray-700/50">
                        <div className="h-8 w-48 bg-gray-700 rounded mb-6"></div>
                        <div className="h-16 bg-gray-700 rounded-lg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSkeleton;