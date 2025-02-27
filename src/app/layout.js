import { Inter_Tight, Archivo, DM_Sans} from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter_tight = Inter_Tight({
  subsets: ["latin"],
});

export const metadata = {
  title: "Akshith's Portfolio",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter_tight.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
