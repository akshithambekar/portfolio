import Image from "next/image";
import Navbar from "./components/navbar";
import Cursor from "./components/cursor";
import Skills from "./components/skills";
import Intro from "./components/intro";

export default function Home() {
  return (
    <main className="subpixel-antialiased">
      <Cursor />
      <div>
        <Navbar />
        <Intro />
        <Skills />
      </div>
    </main>
  );
}