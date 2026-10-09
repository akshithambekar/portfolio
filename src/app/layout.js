import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/app/components/navbar";
import TransitionLayout from "@/app/components/TransitionLayout";

const ppMori = localFont({
    src: [
        { path: "../../public/fonts/PPMori-Extralight.otf", weight: "200", style: "normal" },
        { path: "../../public/fonts/PPMori-Regular.otf", weight: "400", style: "normal" },
        { path: "../../public/fonts/PPMori-Semibold.otf", weight: "600", style: "normal" },
        { path: "../../public/fonts/PPMori-Black.otf", weight: "900", style: "normal" },
    ],
    display: "swap",
});

export const metadata = {
    title: "Akshith's Portfolio",
    description: "Akshith's Portfolio",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${ppMori.className} antialiased`}>
                <Navbar />
                <TransitionLayout>{children}</TransitionLayout>
                <Analytics />
            </body>
        </html>
    );
}
