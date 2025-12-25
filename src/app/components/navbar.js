"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
    const pathName = usePathname();
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.style.setProperty(
                "color-scheme",
                savedTheme
            );
        } else {
            const isDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            const defaultTheme = isDark ? "dark" : "light";
            setTheme(defaultTheme);
            document.documentElement.style.setProperty(
                "color-scheme",
                defaultTheme
            );
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        if (newTheme === "dark") {
            document.documentElement.style.setProperty("color-scheme", "dark");
        } else {
            document.documentElement.style.setProperty("color-scheme", "light");
        }
    };

    return (
        <header className="max-w-[860px] mx-auto px-4 sm:px-0">
            <div className="flex items-center justify-center h-20 mt-12 md:mt-20">
                <span className="text-4xl font-black">
                    akshith ambekar
                </span>
            </div>
            <nav className="flex justify-center items-center pb-6">
                <div className="flex items-center gap-4 md:gap-8">
                    <Link
                        href="/"
                        className={`relative group text-base md:text-lg hover:opacity-100 transition-opacity duration-300 ${
                            pathName == "/" ? "opacity-100" : "opacity-80"
                        }`}
                    >
                        home
                        <span
                            className={`absolute left-0 -bottom-1 h-0.5 w-full bg-current origin-center transition-[transform,opacity] duration-300 ease-in-out ${
                                pathName == "/"
                                    ? "scale-x-100 opacity-100"
                                    : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                            }`}
                        />
                    </Link>
                    <Link
                        href="/projects"
                        className={`relative group text-base md:text-lg hover:opacity-100 transition-opacity duration-300 ${
                            pathName == "/projects"
                                ? "opacity-100"
                                : "opacity-80"
                        }`}
                    >
                        projects
                        <span
                            className={`absolute left-0 -bottom-1 h-0.5 w-full bg-current origin-center transition-[transform,opacity] duration-300 ease-in-out ${
                                pathName == "/projects"
                                    ? "scale-x-100 opacity-100"
                                    : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                            }`}
                        />
                    </Link>
                    <Link
                        href="/thoughts"
                        className={`relative group text-base md:text-lg hover:opacity-100 transition-opacity duration-300 ${
                            pathName == "/thoughts"
                                ? "opacity-100"
                                : "opacity-80"
                        }`}
                    >
                        thoughts
                        <span
                            className={`absolute left-0 -bottom-1 h-0.5 w-full bg-current origin-center transition-[transform,opacity] duration-300 ease-in-out ${
                                pathName == "/thoughts"
                                    ? "scale-x-100 opacity-100"
                                    : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                            }`}
                        />
                    </Link>
                    <Link
                        href="/photos"
                        className={`relative group text-base md:text-lg hover:opacity-100 transition-opacity duration-300 ${
                            pathName == "/photos" ? "opacity-100" : "opacity-80"
                        }`}
                    >
                        photos
                        <span
                            className={`absolute left-0 -bottom-1 h-0.5 w-full bg-current origin-center transition-[transform,opacity] duration-300 ease-in-out ${
                                pathName == "/photos"
                                    ? "scale-x-100 opacity-100"
                                    : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                            }`}
                        />
                    </Link>
                    <Link
                        href="/contact"
                        className={`relative group text-base md:text-lg hover:opacity-100 transition-opacity duration-300 ${
                            pathName == "/contact"
                                ? "opacity-100"
                                : "opacity-80"
                        }`}
                    >
                        contact
                        <span
                            className={`absolute left-0 -bottom-1 h-0.5 w-full bg-current origin-center transition-[transform,opacity] duration-300 ease-in-out ${
                                pathName == "/contact"
                                    ? "scale-x-100 opacity-100"
                                    : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                            }`}
                        />
                    </Link>
                </div>
                <button onClick={toggleTheme} className="ml-4 md:ml-8 relative">
                    <Sun
                        className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-300 ${
                            theme === "dark"
                                ? "opacity-80 hover:opacity-100 transition-opacity duration-300 rotate-0 scale-100"
                                : "opacity-0 rotate-90 scale-75"
                        }`}
                    />
                    <Moon
                        className={`w-4 h-4 md:w-5 md:h-5 absolute inset-0 transition-all duration-300 ${
                            theme === "light"
                                ? "opacity-80 hover:opacity-100 transition-opacity duration-300 rotate-0 scale-100"
                                : "opacity-0 -rotate-90 scale-75"
                        }`}
                    />
                </button>
            </nav>
            <div className="border-b border-current opacity-50 mt-1 mb-4 md:mb-8 mx-auto max-w-lg"></div>
        </header>
    );
}
1;
