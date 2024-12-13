"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/Loader";

export default function LoaderWrapper({ children }) {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsHydrated(true), 500);
        return () => clearTimeout(timer);
    }, []);

    if (!isHydrated) {
        return <Loader />;
    }

    return <>{children}</>;
}
