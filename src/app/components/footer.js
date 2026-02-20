"use client";

import { Github, Linkedin, TwitterX } from "react-bootstrap-icons";
import { Copyright } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
    const hideSocialIcons = pathname === "/contact";
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <footer className="max-w-[860px] mx-auto px-4 sm:px-0">
            {!hideSocialIcons && (
                <div className="flex flex-col justify-center items-center min-h-[16px] text-custom_gray px-0 sm:px-8 md:px-16 lg:px-24 xl:px-44 pt-8 sm:pt-12 md:pt-24 subpixel-antialiased">
                    <div className="flex flex-row items-center space-x-1 text-xs sm:text-sm text-center opacity-100 whitespace-nowrap">
                        <Link
                            href="https://github.com/akshithambekar"
                            className="relative group flex-shrink-0 text-xl md:text-2xl hover:opacity-100 opacity-80 transition-opacity duration-300"
                            target="_blank"
                        >
                            <Github />
                            <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-current origin-center transition-[transform,opacity] duration-300 ease-in-out scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100" />
                        </Link>
                        <span className="mx-3 px-1 opacity-60 text-xl md:text-2xl">
                            ·
                        </span>
                        <Link
                            href="https://www.linkedin.com/in/akshith-ambekar/"
                            className="relative group flex-shrink-0 text-xl md:text-2xl hover:opacity-100 opacity-80 transition-opacity duration-300"
                            target="_blank"
                        >
                            <Linkedin />
                            <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-current origin-center transition-[transform,opacity] duration-300 ease-in-out scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100" />
                        </Link>
                        <span className="mx-3 px-1 opacity-60 text-xl md:text-2xl">
                            ·
                        </span>
                        <Link
                            href="https://x.com/akshithambekar"
                            className="relative group flex-shrink-0 text-xl md:text-2xl hover:opacity-100 opacity-80 transition-opacity duration-300"
                            target="_blank"
                        >
                            <TwitterX />
                            <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-current origin-center transition-[transform,opacity] duration-300 ease-in-out scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100" />
                        </Link>
                    </div>
                </div>
            )}
            <div className="border-b border-current opacity-50 mt-4 mb-4 mx-auto max-w-lg"></div>
            <div className="flex flex-col justify-center items-center text-custom_gray px-0 sm:px-8 md:px-16 lg:px-24 xl:px-44 pb-6 sm:pb-8 md:pb-10 subpixel-antialiased">
                <p className="text-xs sm:text-sm text-center opacity-80 sm:whitespace-nowrap">
                    <Copyright className="inline-block w-3 h-3 sm:w-3.5 sm:h-3.5 align-middle mr-1 relative -top-[1.5px]" />
                    {getCurrentYear()} Akshith Ambekar. All rights reserved.
                    Last updated on Feb 19, 2026.
                </p>
            </div>
        </footer>
    );
}
