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
        <header className="max-w-[860px] mx-auto">
            <div className="flex items-center justify-center h-24 mt-20">
                <span className="hidden sm:inline text-5xl font-black">
                    Akshith Ambekar
                </span>
            </div>
            <nav className="flex justify-center items-center pb-6">
                <div className="flex items-center gap-8">
                    <Link
                        href="/"
                        className={`relative group text-lg hover:opacity-100 ${
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
                        href="/work"
                        className={`relative group text-lg hover:opacity-100 ${
                            pathName == "/work" ? "opacity-100" : "opacity-80"
                        }`}
                    >
                        work
                        <span
                            className={`absolute left-0 -bottom-1 h-0.5 w-full bg-current origin-center transition-[transform,opacity] duration-300 ease-in-out ${
                                pathName == "/work"
                                    ? "scale-x-100 opacity-100"
                                    : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                            }`}
                        />
                    </Link>
                    <Link
                        href="/projects"
                        className={`relative group text-lg hover:opacity-100 ${
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
                        href="/photos"
                        className={`relative group text-lg hover:opacity-100 ${
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
                        className={`relative group text-lg hover:opacity-100 ${
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
                <button onClick={toggleTheme} className="ml-8 relative">
                    <Sun
                        size={20}
                        className={`transition-all duration-300 ${
                            theme === "dark"
                                ? "opacity-100 rotate-0 scale-100"
                                : "opacity-0 rotate-90 scale-75"
                        }`}
                    />
                    <Moon
                        size={20}
                        className={`absolute inset-0 transition-all duration-300 ${
                            theme === "light"
                                ? "opacity-100 rotate-0 scale-100"
                                : "opacity-0 -rotate-90 scale-75"
                        }`}
                    />
                </button>
            </nav>
            <div className="border-b border-current opacity-50 mt-1 mb-16 mx-auto max-w-lg"></div>
        </header>
    );
}
1;
