"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "work",
        path: "/work",
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
                            link.path === pathname && "text-primary border-b-2 border-primary"
                        }
                     capitalize font-medium transition-all hover:text-primary-hover text-white`}
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

