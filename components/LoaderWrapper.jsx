"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Loader from "./Loader";

export default function LoaderWrapper({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer);
    }, [pathname, searchParams]);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && <Loader />}
            </AnimatePresence>

            {!isLoading && children}
        </>
    );
}