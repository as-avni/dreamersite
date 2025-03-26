import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <img
      src="/cursor.png"
      alt="Custom Cursor"
      className="fixed w-10 h-10 pointer-events-none"
      style={{
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}