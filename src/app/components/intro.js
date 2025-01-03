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
                ease: "linear"
            }
        }
    };

    return (
        <div className="inline-flex items-center">
          <span>{displayedChars.join('')}</span>
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
            <div className="flex flex-col justify-center items-center h-[620px] px-44 pt-24 subpixel-antialiased text-custom_gray mx-auto max-w-[1260px]">
                <h1 className="text-5xl text-white text-center font-bold drop-shadow-2xl">
                    <TypewriterAnimation text="Hi, I'm Akshith." typingSpeed={0.075} />
                </h1>
                <p className="pt-6 text-lg text-center max-w-[800px]">I'm a skilled software engineer studying computer science at George Mason University, fueled by a passion for tackling intricate problems and building solutions that simplify everyday life.</p>
                <p className="pt-6 text-lg text-center max-w-[800px]">When I'm not building cool stuff at my computer, I spend time keeping fit, sim-racing, and being an amateur photographer.</p>
                <Image src="/IMG_6646.jpg" alt="My picture" width={600} height={200} className="pt-12 py-16 rounded-lg"/>
            </div>
        </div>
    );
}