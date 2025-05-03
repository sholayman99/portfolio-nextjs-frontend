"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


const links = [
    { name: "home", path: "/" },
    { name: "work", path: "/work" },
    { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
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
                <CiMenuFries className="text-[32px] text-primary hover:text-primary-hover" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* Add DialogTitle with VisuallyHidden to meet Radix UI's accessibility requirement*/}
                {/*<VisuallyHidden asChild>*/}
                {/*    <DialogTitle>Navigation Menu</DialogTitle>*/}
                {/*</VisuallyHidden>*/}

                <div className="mt-10 mb-16 text-center text-2xl">
                    <Link href="/public">
                        <h1 className="text-4xl font-semibold">
                            MS<span className="text-primary">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col items-center justify-center gap-8">
                    {links.map((link, index) => (
                        <Link
                            className={`${
                                link.path === pathname && "text-primary border-b-2 border-primary"
                            } capitalize font-medium transition-all hover:text-primary-hover text-white`}
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