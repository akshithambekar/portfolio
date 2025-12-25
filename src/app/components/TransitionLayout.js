"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Footer from "@/app/components/footer";

export default function TransitionLayout({ children }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <div key={pathname}>
                {children}
                <Footer />
            </div>
        </AnimatePresence>
    );
}
