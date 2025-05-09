"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
    { name: "home", path: "#home" },
    { name: "about", path: "#about" },
    { name: "work", path: "#work" },
    { name: "services", path: "#services" },
    { name: "contact", path: "#contact" },
];

function MobileNav() {
    const [activeHash, setActiveHash] = useState("");

    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash || "#home");
        };

        // Set initial hash
        handleHashChange();

        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-primary hover:text-primary-hover" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-10 mb-16 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            MS<span className="text-primary">.</span>
                        </h1>
                    </Link>
                </div>

                <nav className="flex flex-col items-center justify-center gap-8">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.path}
                            className={`capitalize font-medium transition-all hover:text-primary-hover text-white ${
                                activeHash === link.path
                                    ? "text-primary border-b-2 border-primary"
                                    : ""
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}

export default MobileNav;
