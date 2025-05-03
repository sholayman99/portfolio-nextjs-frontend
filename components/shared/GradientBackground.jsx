"use client";

import React, { ReactNode } from 'react';



const GradientBackground = ({ children, className = '' }) => {
    return (
        <div className={`relative min-h-screen w-full overflow-hidden ${className}`}>
            {/* Main gradient background */}
            <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-primary/10 to-gray-900 -z-50" />

            {/* Subtle animated gradient overlay */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent animate-pulse-slow -z-40" />

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default GradientBackground;