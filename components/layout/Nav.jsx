"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const links = [
    { name: "home", path: "#home" },
    { name: "about", path: "#about" },
    { name: "work", path: "#work" },
    { name: "services", path: "#services" },
    { name: "contact", path: "#contact" },
];

export default function Nav() {
    const [activeHash, setActiveHash] = useState("");

    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash || "#home");
        };

        // Initial hash on load
        handleHashChange();

        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    return (
        <nav className="flex gap-8">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.path}
                    className={`capitalize font-medium transition-all hover:text-primary-hover text-white ${
                        activeHash === link.path ? "text-primary border-b-2 border-primary" : ""
                    }`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
}
