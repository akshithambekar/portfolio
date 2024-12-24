import { Inter_Tight, Archivo, DM_Sans} from "next/font/google";
import "./globals.css";

const inter_tight = Inter_Tight({
  subsets: ["latin"],
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Akshith's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter_tight.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
