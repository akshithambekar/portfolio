"use client";

import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const hideCursor = () => {
      setVisible(false);
    };

    const showCursor = () => {
      setVisible(true);
    }

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mouseenter", showCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mouseenter", showCursor);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="custom-cursor fixed bg-white rounded-full pointer-events-none z-50"
      style={{
        width: "10px",  // Custom width for the cursor
        height: "10px", // Custom height for the cursor
        transform: `translate(${position.x - 7.5}px, ${position.y - 7.5}px)`,
      }}
    ></div>
  );
};

export default Cursor;