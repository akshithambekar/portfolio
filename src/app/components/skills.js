"use client";

import { useState, useEffect } from "react";

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState();
    const categories = {
        "languages": [{ name: "Python", years: "5 years" }, { name: "Java", years: "5 years" }, { name: "HTML/CSS", years: "4 years" }, { name: "JavaScript/TypeScript", years: "3 years" }, { name: "C++", years: "2 years" }, { name: "MATLAB", years: "<1 year" }],
        "tools_frameworks": [{ name: "Express.js", years: "2 years" }, { name: "Node.js", years: "2 years" }, { name: "Flask", years: "2 years" }, { name: "NumPy", years: "2 years" }, { name: "React.js", years: "1 year" }, { name: "OpenCV", years: "1 year" }, { name: "Next.js", years: "<1 year" }, { name: "Tailwind CSS", years: "<1 year" }]
    };
    useEffect(() => {
        setActiveCategory("languages");
    }, []);
    return (
        <div className="max-w-[1260px] justify-center items-center h-32 px-44 pt-16 subpixel-antialiased mx-auto">
            <h1 className="text-white text-2xl text-center font-bold underline">Technical Skills</h1>
            <div className="flex items-center justify-center py-5 space-x-4">
                <button onClick={() => setActiveCategory("languages")} className={`font-semibold px-4 py-2 rounded-full transition-colors ${activeCategory === "languages" ? "bg-gray-800 text-white" : "text-custom_gray hover:text-white"}`}>
                    Languages
                </button>
                <button onClick={() => setActiveCategory("tools_frameworks")} className={`font-semibold px-4 py-2 rounded-full transition-colors ${activeCategory === "tools_frameworks" ? "bg-gray-800 text-white" : "text-custom_gray hover:text-white"}`}>
                    Tools and Frameworks
                </button>
            </div>
            <div className="flex flex-col justify-center text-custom_gray max-w-[640px] mx-auto pt-4 pb-4">
                {categories[activeCategory]?.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-1">
                        <p className="order-first text-lg font-semibold">{item.name}</p>
                        <p className="order-last text-sm">{item.years}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}