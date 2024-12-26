import Image from "next/image";
import Navbar from "./components/navbar";
import Cursor from "./components/cursor";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main>
      <Cursor />
      <div>
        <Navbar />
        <Skills />
      </div>
    </main>
  );
}