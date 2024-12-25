"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
    const pathName = usePathname();
    return (
        <div className="flex flex-shrink-0 text-custom_gray justify-between items-center h-48 max-w-[1280px] mx-auto px-48">
            <Link href="/" className={pathName === "/" ? "text-3xl drop-shadow-md font-bold text-nowrap subpixel-antialiased text-white" : "text-3xl drop-shadow-md font-semibold text-nowrap subpixel-antialiased hover:font-bold"}>Akshith Ambekar</Link>
            <div>
                <Link href="/projects" className={pathName === "/projects" ? "p-4 text-white italic subpixel-antialiased font-medium text-decoration-line: underline decoration-2" : "p-4 italic subpixel-antialiased hover:text-white transition-colors"}>projects</Link>
                <Link href="/resume" className={pathName === "/resume" ? "p-4 text-white italic subpixel-antialiased font-medium text-decoration-line: underline decoration-2" : "p-4 italic subpixel-antialiased hover:text-white"}>resume</Link>
            </div>
        </div>
    )
}