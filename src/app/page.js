import Image from "next/image";
import Navbar from "./components/navbar";
import Cursor from "./components/cursor";
import Intro from "./components/intro";
import Experience from "./components/experience";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="subpixel-antialiased">
      <Cursor />
      <div>
        <Navbar />
        <Intro />
        <Experience />
        <Skills />
      </div>
    </main>
  );
}