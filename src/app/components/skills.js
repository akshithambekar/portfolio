"use client";

import { useState } from "react";
import Cursor from "./cursor";

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState();
    const categories = {
        "languages": ["Python", "JavaScript", "TypeScript", "C++", "Java", "HTML/CSS", "MATLAB"],
        "tools_frameworks": ["Next.js", "Express.js", "Node.js", "React.js", "Flask", "Tailwind", "Git", "OpenCV", "NumPy"]
    };
    
    return (
        <div className="max-w-[1260px] justify-center items-center h-48 px-44 mx-auto">
            <h1 className="text-custom_gray text-2xl text-center font-bold underline">Technical Skills</h1>
            <div className="flex items-center justify-center py-6 space-x-4">
                <button onClick={() => setActiveCategory("languages")} className={`font-semibold px-4 py-2 rounded-full transition-colors ${activeCategory === "languages" ? "bg-gray-800 text-white" : "text-custom_gray hover:text-white"}`}>
                    Languages
                </button>
                <button onClick={() => setActiveCategory("tools_frameworks")} className={`font-semibold px-4 py-2 rounded-full transition-colors ${activeCategory === "tools_frameworks" ? "bg-gray-800 text-white" : "text-custom_gray hover:text-white"}`}>
                    Tools and Frameworks
                </button>
            </div>
        </div>
    );
}