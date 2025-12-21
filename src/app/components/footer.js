import { PiCopyrightLight } from "react-icons/pi";
import { Github, Linkedin, TwitterX } from "react-bootstrap-icons";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="max-w-[860px] flex flex-col justify-center items-center min-h-[60px] text-custom_gray px-4 sm:px-8 md:px-16 lg:px-24 xl:px-44 pt-12 sm:pt-24 pb-8 sm:pb-10 subpixel-antialiased mx-auto">
            <div className="flex flex-row items-center space-x-1 text-xs sm:text-sm text-center opacity-100 whitespace-nowrap">
                <Link
                    href="https://github.com/akshithambekar"
                    className="relative group flex-shrink-0 text-2xl hover:opacity-100 opacity-80 transition-opacity duration-300"
                    target="_blank"
                >
                    <Github />
                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-current origin-center transition-[transform,opacity] duration-300 ease-in-out scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100" />
                </Link>
                <span className="mx-3 px-1 opacity-60 text-2xl">·</span>
                <Link
                    href="https://www.linkedin.com/in/akshith-ambekar/"
                    className="relative group flex-shrink-0 text-2xl hover:opacity-100 opacity-80 transition-opacity duration-300"
                    target="_blank"
                >
                    <Linkedin />
                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-current origin-center transition-[transform,opacity] duration-300 ease-in-out scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100" />
                </Link>
                <span className="mx-3 px-1 opacity-60 text-2xl">·</span>
                <Link
                    href="https://x.com/akshithambekar"
                    className="relative group flex-shrink-0 text-2xl hover:opacity-100 opacity-80 transition-opacity duration-300"
                    target="_blank"
                >
                    <TwitterX />
                    <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-current origin-center transition-[transform,opacity] duration-300 ease-in-out scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100" />
                </Link>
            </div>
            <div className="border-b border-current opacity-50 w-full max-w-xl mt-4 mb-4"></div>
            <div className="flex flex-row items-center space-x-1 text-xs sm:text-sm text-center opacity-80 whitespace-nowrap">
                <PiCopyrightLight className="flex-shrink-0" />
                <p>
                    2025 Akshith Ambekar. All rights reserved. Last updated on
                    December 8, 2025.
                </p>
            </div>
        </div>
    );
}
