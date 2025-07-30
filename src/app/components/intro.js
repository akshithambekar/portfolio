"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const TypewriterAnimation = ({ text, typingSpeed }) => {
    const [displayedChars, setDisplayedChars] = useState([]);
    const [hasPlayed, setHasPlayed] = useState(false);

    useEffect(() => {
        if (hasPlayed) {
            setDisplayedChars(text.split(""));
            return;
        }
        const timeouts = text.split("").map((char, index) => {
            return setTimeout(() => {
                setDisplayedChars((prev) => {
                    if (prev.length === index) {
                        return [...prev, char];
                    }
                    return prev;
                });
                if (index === text.length - 1) {
                    setHasPlayed(true);
                }
            }, typingSpeed * 1000 * index);
        });
        return () => timeouts.forEach(clearTimeout);
    }, [text, typingSpeed, hasPlayed]);

    const caretVariants = {
        blink: {
            opacity: [1, 1, 0, 0],
            transition: {
                duration: 1,
                repeat: Infinity,
                times: [0, 0.5, 0.5, 1],
                ease: "linear",
            },
        },
    };

    return (
        <div className="inline-flex items-center">
            <span>{displayedChars.join("")}</span>
            <motion.span
                className="inline-block w-1 h-10 ml-1 bg-white"
                variants={caretVariants}
                animate="blink"
            />
        </div>
    );
};

export default function Intro() {
    return (
        <div>
            <div className="flex flex-col justify-center items-center min-h-[620px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-44 pt-12 md:pt-24 subpixel-antialiased text-custom_gray mx-auto max-w-[1260px]">
                <h1 className="text-3xl sm:text-4xl md:text-5xl text-white text-center font-bold drop-shadow-2xl">
                    <TypewriterAnimation
                        text="Hi, I'm Akshith."
                        typingSpeed={0.075}
                    />
                </h1>
                <p className="pt-6 text-base sm:text-lg text-center max-w-[730px] px-4">
                    I'm a software engineer studying computer science at George
                    Mason University, fueled by a passion for building low-cost
                    solutions that can revolutionize everyday life.
                </p>
                <div className="pt-10 pb-20 w-full max-w-[600px] px-4">
                    <Image
                        src="/IMG_6646.jpg"
                        alt="My picture"
                        width={600}
                        height={200}
                        className="w-full h-auto border-radius rounded-lg"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
