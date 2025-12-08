import { Inter_Tight, Archivo, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter_tight = Inter_Tight({
    subsets: ["latin"],
});

export const mori = localFont({
    src: [
        {
            path: "../../public/fonts/mori/PPMori-Extralight.otf",
            weight: "200",
            style: "normal",
        },
        {
            path: "../../public/fonts/mori/PPMori-ExtralightItalic.otf",
            weight: "200",
            style: "italic",
        },
        {
            path: "../../public/fonts/mori/PPMori-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/mori/PPMori-RegularItalic.otf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../../public/fonts/mori/PPMori-Semibold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/fonts/mori/PPMori-SemiboldItalic.otf",
            weight: "600",
            style: "italic",
        },
        {
            path: "../../public/fonts/mori/PPMori-Black.otf",
            weight: "900",
            style: "normal",
        },
        {
            path: "../../public/fonts/mori/PPMori-BlackItalic.otf",
            weight: "900",
            style: "italic",
        },
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
            <body className={`${mori.className} antialiased`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
