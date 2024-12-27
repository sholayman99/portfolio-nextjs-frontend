"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import {FiDownload} from "react-icons/fi";
import {MdKeyboardDoubleArrowRight} from "react-icons/md";

function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full bg-primary  text-white z-50 transition-shadow ${
                scrolled ? "shadow-md" : "shadow-none"
            }`}
        >
            <div className={"container mx-auto py-6 lg:py-8 xl:py-10 2xl:py-12 flex items-center justify-between"}>
                {/* Logo */}
                <Link href={"/"}>
                    <h1 className={"text-4xl font-semibold"}>
                        MS<span className={"text-accent"}>.</span>
                    </h1>
                </Link>
                {/* Desktop Nav & Hire Me Button */}
                <div className={"hidden xl:flex items-center gap-8"}>
                     <Nav />
                    <Link href={"/"}>
                        <Button variant={"outline"}>
                            Hire me <MdKeyboardDoubleArrowRight />
                        </Button>
                    </Link>
                </div>
                {/* Mobile Nav */}
                <div className={"xl:hidden"}>
                    <MobileNav/>
                </div>
            </div>
        </header>
    );
}

export default Header;
