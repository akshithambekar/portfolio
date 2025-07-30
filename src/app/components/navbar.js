"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const pathName = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="flex flex-shrink-0 text-custom_gray justify-between items-center h-40 max-w-[1280px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48">
            <Link
                href="/"
                className={
                    pathName === "/"
                        ? "text-xl sm:text-2xl drop-shadow-md font-bold text-nowrap subpixel-antialiased text-white"
                        : "text-xl sm:text-2xl drop-shadow-md font-bold text-nowrap subpixel-antialiased hover:text-white"
                }
            >
                <span className="hidden sm:inline">Akshith Ambekar</span>
                <span className="sm:hidden">Akshith</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex">
                <Link
                    href="/projects"
                    className={
                        pathName === "/projects"
                            ? "p-3 text-white italic subpixel-antialiased font-medium text-decoration-line: underline decoration-2"
                            : "p-3 italic subpixel-antialiased hover:text-white hover:transition-colors"
                    }
                >
                    projects
                </Link>
                <Link
                    href="https://www.linkedin.com/in/akshith-ambekar/"
                    target="_blank"
                    className="p-3 italic subpixel-antialiased hover:text-white"
                >
                    linkedin
                </Link>
                <Link
                    href="https://github.com/akshithambekar"
                    target="_blank"
                    className="p-3 italic subpixel-antialiased hover:text-white"
                >
                    github
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-custom_gray hover:text-white"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={
                            isMobileMenuOpen
                                ? "M6 18L18 6M6 6l12 12"
                                : "M4 6h16M4 12h16M4 18h16"
                        }
                    />
                </svg>
            </button>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="absolute top-40 left-0 right-0 bg-[#061626] border-t border-gray-700 md:hidden z-50">
                    <div className="flex flex-col py-4">
                        <Link
                            href="/projects"
                            className={
                                pathName === "/projects"
                                    ? "px-4 py-3 text-white italic subpixel-antialiased font-medium border-l-2 border-white"
                                    : "px-4 py-3 italic subpixel-antialiased hover:text-white hover:transition-colors"
                            }
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            projects
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/akshith-ambekar/"
                            target="_blank"
                            className="px-4 py-3 italic subpixel-antialiased hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            linkedin
                        </Link>
                        <Link
                            href="https://github.com/akshithambekar"
                            target="_blank"
                            className="px-4 py-3 italic subpixel-antialiased hover:text-white"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            github
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
