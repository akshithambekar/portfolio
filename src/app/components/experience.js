"use client";

import { useState, useEffect } from "react";
import { BsCalendar, BsArrowRight } from "react-icons/bs";
// https://react-icons.github.io/react-icons/icons/bs/

const EducationSection = () => {
    return (
        <div className="flex flex-col items-center justify-center py-5 space-x-4">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="flex flex-row items-center">
                        <BsCalendar className="text-gray-500" />
                        <time className="pl-2 text-sm font-normal text-gray-400 dark:text-gray-500">
                            May 2027
                        </time>
                    </div>
                    <h3 className="text-lg pt-1 font-semibold text-gray-900 dark:text-white">
                        George Mason University
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        BS in Computer Science
                    </p>
                </li>
                <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="flex flex-row items-center">
                        <BsCalendar className="text-gray-500" />
                        <time className="pl-2 text-sm font-normal text-gray-400 dark:text-gray-500">
                            June 2024
                        </time>
                    </div>
                    <h3 className="text-lg pt-1 font-semibold text-gray-900 dark:text-white">
                        Thomas Jefferson High School for Science and Technology
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Advanced Studies Diploma
                    </p>
                </li>
            </ol>
        </div>
    );
};

const WorkSection = () => {
    return (
        <div className="flex flex-col items-center justify-center py-5 space-x-4">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="flex flex-row items-center">
                        <BsCalendar className="text-gray-500" />
                        <div className="flex flex-row items-center pl-2 text-sm font-normal text-gray-400 dark:text-gray-500">
                            <span>October 2024</span>
                            <BsArrowRight className="mx-1" />
                            <span>Present</span>
                        </div>
                    </div>
                    <h3 className="text-lg pt-1 font-semibold text-gray-900 dark:text-white">
                        Undergraduate Research Assistant
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        George Mason University
                    </p>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="flex flex-row items-center">
                        <BsCalendar className="text-gray-500" />
                        <div className="flex flex-row items-center pl-2 text-sm font-normal text-gray-400 dark:text-gray-500">
                            <span>June 2024</span>
                            <BsArrowRight className="mx-1" />
                            <span>August 2024</span>
                        </div>
                    </div>
                    <h3 className="text-lg pt-1 font-semibold text-gray-900 dark:text-white">
                        Mathematics and Physics Tutor
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                        Coherence Learning Services
                    </p>
                </li>
                <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <div className="flex flex-row items-center">
                        <BsCalendar className="text-gray-500" />
                        <div className="flex flex-row items-center pl-2 text-sm font-normal text-gray-400 dark:text-gray-500">
                            <span>June 2023</span>
                            <BsArrowRight className="mx-1" />
                            <span>August 2023</span>
                        </div>
                    </div>
                    <h3 className="text-lg pt-1 font-semibold text-gray-900 dark:text-white">
                        Bioinformatics Research Intern
                    </h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Dartmouth-Hitchcock Medical Center
                    </p>
                </li>
            </ol>
        </div>
    );
};

export default function Experience() {
    const [activeCategory, setActiveCategory] = useState();
    const categories = ["education", "work"];
    useEffect(() => {
        setActiveCategory("education");
    }, []);
    return (
        <div className="max-w-[1260px] justify-center items-center h-[560px] px-44 pt-12 subpixel-antialiased mx-auto">
            <h1 className="text-white text-2xl text-center font-bold underline">
                Experience
            </h1>
            <div className="flex items-center justify-center py-5 space-x-8">
                <button
                    onClick={() => setActiveCategory("education")}
                    className={`font-semibold px-4 py-2 rounded-full transition-colors ${
                        activeCategory === "education"
                            ? "bg-gray-800 text-white"
                            : "text-custom_gray hover:text-white"
                    }`}
                >
                    Education
                </button>
                <button
                    onClick={() => setActiveCategory("work")}
                    className={`font-semibold px-4 py-2 rounded-full transition-colors ${
                        activeCategory === "work"
                            ? "bg-gray-800 text-white"
                            : "text-custom_gray hover:text-white"
                    }`}
                >
                    Work
                </button>
            </div>
            {activeCategory === "education" && <EducationSection />}
            {activeCategory === "work" && <WorkSection />}
        </div>
    );
}
