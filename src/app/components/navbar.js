"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const pathName = usePathname();
    return (
        <div className="flex flex-shrink-0 text-custom_gray justify-between items-center h-48 max-w-[1280px] mx-auto px-48">
            <Link href="/" className="text-3xl font-semibold text-nowrap subpixel-antialiased">Akshith Ambekar</Link>
            <div>
            <Link href="/projects" className={pathName === "/projects" ? "p-4 italic subpixel-antialiased font-bold text-decoration-line: underline" : "p-4 italic subpixel-antialiased text-decoration-line: underline"}>projects</Link>
            <Link href="/resume" className={pathName === "/resume" ? "p-4 italic subpixel-antialiased font-bold text-decoration-line: underline" : "p-4 italic subpixel-antialiased text-decoration-line: underline"}>resume</Link>
            </div>
        </div>
    )
}