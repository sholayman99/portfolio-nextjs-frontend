"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

export default function Nav() {
    const pathname = usePathname();
    return (
        <nav className={"flex gap-8"}>
            {links.map((link, index) => {
                return (
                    <Link
                        className={`${
                            link.path === pathname && "text-white border-b-2 border-white"
                        }
                     capitalize font-medium transition-all hover:text-white text-accent`}
                        key={index}
                        href={link.path}
                    >
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}

