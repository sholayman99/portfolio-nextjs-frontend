import React from 'react';

function AboutSkeleton() {
    return (
        <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-700 rounded w-3/4"></div>
            {[...Array(4)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-700 rounded"></div>
            ))}
            <div className="grid grid-cols-2 gap-4 mt-8">
                {[...Array(6)].map((_, i) => (
                    <div key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mr-3"></div>
                        <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutSkeleton;