"use client";

import { useState, useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs";

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState();
    const categories = {
        languages: [
            { name: "Python", years: "5 years" },
            { name: "Java", years: "5 years" },
            { name: "HTML/CSS", years: "4 years" },
            { name: "JavaScript/TypeScript", years: "3 years" },
            { name: "C++", years: "2 years" },
            { name: "MATLAB", years: "<1 year" },
        ],
        tools_frameworks: [
            { name: "Express.js", years: "2 years" },
            { name: "Node.js", years: "2 years" },
            { name: "Flask", years: "2 years" },
            { name: "NumPy", years: "2 years" },
            { name: "React.js", years: "1 year" },
            { name: "OpenCV", years: "1 year" },
            { name: "Next.js", years: "<1 year" },
            { name: "Tailwind CSS", years: "<1 year" },
        ],
    };
    useEffect(() => {
        setActiveCategory("languages");
    }, []);
    return (
        <div className="max-w-[1260px] justify-center items-center h-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-44 py-8 sm:py-16 subpixel-antialiased mx-auto">
            <h1 className="text-white text-2xl sm:text-3xl text-center font-bold">
                Skills
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center py-5 space-y-2 sm:space-y-0 sm:space-x-4">
                <button
                    onClick={() => setActiveCategory("languages")}
                    className={`font-semibold px-3 sm:px-4 py-2 rounded-full transition-colors text-sm sm:text-base w-full sm:w-auto ${
                        activeCategory === "languages"
                            ? "bg-gray-800 text-white"
                            : "text-custom_gray hover:text-white"
                    }`}
                >
                    Languages
                </button>
                <button
                    onClick={() => setActiveCategory("tools_frameworks")}
                    className={`font-semibold px-3 sm:px-4 py-2 rounded-full transition-colors text-sm sm:text-base w-full sm:w-auto ${
                        activeCategory === "tools_frameworks"
                            ? "bg-gray-800 text-white"
                            : "text-custom_gray hover:text-white"
                    }`}
                >
                    <span className="hidden sm:inline">Tools and Frameworks</span>
                    <span className="sm:hidden">Tools & Frameworks</span>
                </button>
            </div>
            <div className="flex flex-col justify-center text-custom_gray max-w-[640px] mx-auto pt-4 pb-4 px-4">
                {categories[activeCategory]?.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-gray-800 last:border-b-0"
                    >
                        <p className="order-first text-base sm:text-lg font-semibold">
                            {item.name}
                        </p>
                        <p className="order-last text-sm text-gray-400">{item.years}</p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4 px-4">
                <button
                    onClick={() => {
                        const link = document.createElement("a");
                        link.href = "/files/AkshithAmbekar.pdf";
                        link.download = "AkshithAmbekar.pdf";
                        link.click();
                    }}
                    className="flex flex-row items-center gap-[3px] font-semibold px-4 py-2 rounded-full transition-colors text-custom_gray hover:text-white bg-gray-800 w-full sm:w-auto justify-center"
                >
                    Resume
                    <BsArrowUpRight />
                </button>
            </div>
        </div>
    );
}
