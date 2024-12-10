"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


const links = [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
];

function MobileNav() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-white" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Add DialogTitle with VisuallyHidden to meet Radix UI's accessibility requirement */}
                {/*<VisuallyHidden asChild>*/}
                {/*    <DialogTitle>Navigation Menu</DialogTitle>*/}
                {/*</VisuallyHidden>*/}

                <div className="mt-10 mb-16 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            MS<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col items-center justify-center gap-8">
                    {links.map((link, index) => (
                        <Link
                            className={`${
                                link.path === pathname && "text-white border-b-2 border-white"
                            } capitalize font-medium transition-all hover:text-white text-accent`}
                            href={link.path}
                            key={index}
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