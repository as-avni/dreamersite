"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // Ensure cursor remains hidden
    const hideCursor = () => {
      document.documentElement.style.cursor = "none";
      document.body.style.cursor = "none";

      const elements = document.querySelectorAll("*");
      elements.forEach(el => {
        (el as HTMLElement).style.cursor = "none";
      });
    };

    hideCursor();

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", hideCursor);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: `${position.y}px`,
        left: `${position.x}px`,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <Image src="/cursor.png" alt="Custom Cursor" width={40} height={40} />
    </div>
  );
}