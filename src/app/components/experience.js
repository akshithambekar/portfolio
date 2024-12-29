"use client";

import { useState, useEffect } from "react";
import { BsCalendar } from "react-icons/bs";
// https://react-icons.github.io/react-icons/icons/bs/

const EducationSection = () => {
    return (
        <div className="flex flex-col items-center justify-center py-5 space-x-4">
            <p class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </p>
            <p class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            </p>
        </div>
    )
}

const WorkSection = () => {
    return (
        <div>

        </div>
    )
}

export default function Experience() {
    const [activeCategory, setActiveCategory] = useState();
    const categories = ["education", "work"]
    useEffect(() => {
        setActiveCategory("education");
    }, []);
    return (
        <div className="max-w-[1260px] justify-center items-center h-[1024px] px-44 pt-4 subpixel-antialiased mx-auto">
            <h1 className="text-white text-2xl text-center font-bold underline">Experience</h1>
            <div className="flex items-center justify-center py-5 space-x-8">
                <button onClick={() => setActiveCategory("education")} className={`font-semibold px-4 py-2 rounded-full transition-colors ${activeCategory === "education" ? "bg-gray-800 text-white" : "text-custom_gray hover:text-white"}`}>
                    Education
                </button>
                <button onClick={() => setActiveCategory("work")} className={`font-semibold px-4 py-2 rounded-full transition-colors ${activeCategory === "work" ? "bg-gray-800 text-white" : "text-custom_gray hover:text-white"}`}>
                    Work
                </button>
            </div>
            <div className="flex flex-row items-center justify-center py-4 space-x-4 space-y-4">
                <div className="block max-w-sm px-5 py-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">George Mason University</h5>
                    <p className="font-normal text-custom_gray pb-1">BS in Computer Science</p>
                    <div className="flex flex-row justify-middle items-center text-center">
                        <BsCalendar className="text-gray-500 py-0.25" />
                        <p className="text-gray-500 pl-2 align-bottom">May 2027</p>
                    </div>
                </div>
                <div className="block max-w-sm px-5 py-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">Thomas Jefferson High School for Science and Technology</h5>
                    <p className="font-normal text-custom_gray pb-1">Advanced Studies Diploma</p>
                    <div className="flex flex-row justify-middle items-center text-center">
                        <BsCalendar className="text-gray-500 py-0.25" />
                        <p className="text-gray-500 pl-2 align-bottom">June 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
}