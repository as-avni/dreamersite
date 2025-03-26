import { useEffect, useState } from "react";
import Image from "next/image";

export default function CustomCursor() {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

    <Image
      src="/cursor.png"
      alt="Custom Cursor"
      width={40}
      height={40}
      className="fixed pointer-events-none"
      style={{
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
        position: "absolute",
      }}
    />
    />
  );
}