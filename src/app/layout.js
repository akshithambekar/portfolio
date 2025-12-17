import { Inter_Tight, Host_Grotesk, Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter_tight = Inter_Tight({
    subsets: ["latin"],
});

const switzer = localFont({
    src: [
        {
            path: "../../public/fonts/switzer/Switzer-Thin.otf",
            weight: "100",
            style: "normal",
        },
        {
            path: "../../public/fonts/switzer/Switzer-ThinItalic.otf",
            weight: "100",
            style: "italic",
        },
        {
            path: "../../public/fonts/switzer/Switzer-Extralight.otf",
            weight: "200",
            style: "normal",
        },
        {
            path: "../../public/fonts/switzer/Switzer-ExtralightItalic.otf",
            weight: "200",
            style: "italic",
        },
        {
            path: "../../public/fonts/switzer/Switzer-Light.otf",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/fonts/switzer/Switzer-LightItalic.otf",
            weight: "300",
            style: "italic",
        },
        {
            path: "../../public/fonts/switzer/Switzer-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/switzer/Switzer-Italic.otf",
            weight: "400",
            style: "italic",
        },
        {
            path: "../../public/fonts/switzer/Switzer-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/fonts/switzer/Switzer-MediumItalic.otf",
            weight: "500",
            style: "italic",
        },
        {
            path: "../../public/fonts/switzer/Switzer-Semibold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "../../public/fonts/switzer/Switzer-SemiboldItalic.otf",
            weight: "600",
            style: "italic",
        },
        {
            path: "../../public/fonts/switzer/Switzer-Bold.otf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../../public/fonts/switzer/Switzer-BoldItalic.otf",
            weight: "700",
            style: "italic",
        },
        {
            path: "../../public/fonts/switzer/Switzer-Extrabold.otf",
            weight: "800",
            style: "normal",
        },
        {
            path: "../../public/fonts/switzer/Switzer-ExtraboldItalic.otf",
            weight: "800",
            style: "italic",
        },
        {
            path: "../../public/fonts/switzer/Switzer-Black.otf",
            weight: "900",
            style: "normal",
        },
        {
            path: "../../public/fonts/switzer/Switzer-BlackItalic.otf",
            weight: "900",
            style: "italic",
        },
    ],
    display: "swap",
});

export const hg = Host_Grotesk({
    subsets: ["latin"],
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
            <body className={`${hg.className} antialiased`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
