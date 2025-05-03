"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "@/components/layout/Nav";
import MobileNav from "@/components/layout/MobileNav";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import CommonButton from "@/components/common/CommonButton";

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
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? " backdrop-blur-xl shadow-md py-4"
                    : "shadow-none py-6 lg:py-8 xl:py-10 2xl:py-12"
            }`}
        >
            <div className="container mx-auto flex items-center justify-between px-4">
                {/* Logo */}
                <Link href="/">
                    <h1 className={`text-4xl font-semibold transition-all duration-300 ${
                        scrolled ? "scale-90" : "scale-100"
                    }`}>
                        MS<span className="text-primary">.</span>
                    </h1>
                </Link>

                {/* Desktop Nav & Hire Me CommonButton */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <CommonButton
                            icon={MdKeyboardDoubleArrowRight}
                            text="Hire me"
                            size="md"
                        />
                    </Link>
                </div>

                {/* Mobile Nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}

export default Header;