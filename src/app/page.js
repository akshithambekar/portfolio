import Image from "next/image";
import Navbar from "./components/navbar";
import Cursor from "./components/cursor";

export default function Home() {
  return (
    <main>
      <Cursor />
      <div>
        <Navbar />
      </div>
    </main>
  );
}
