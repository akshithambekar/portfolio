import { Inter_Tight, Host_Grotesk, Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

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
                <Navbar />
                {children}
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
