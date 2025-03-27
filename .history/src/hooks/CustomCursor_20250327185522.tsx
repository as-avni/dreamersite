"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
const [position, setPosition] = useState({ x: 0, y: 0 });

useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    // Ensure all elements hide the cursor
    document.documentElement.style.cursor = "none";
    document.body.style.cursor = "none";

    const elements = document.querySelectorAll("*");
    elements.forEach(el => {
        (el as HTMLElement).style.cursor = "none";
    });

    window.addEventListener("mousemove", moveCursor);

    return () => {
        window.removeEventListener("mousemove", moveCursor);
        document.documentElement.style.cursor = "default";
        document.body.style.cursor = "default";
        elements.forEach(el => {
            (el as HTMLElement).style.cursor = "default";
        });
    };
}, []);

return (
    <div
    className="custom-cursor"
    style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
        backgroundImage: "url('/path-to-your-image.png')", // Update with the actual path
        backgroundSize: "cover",
        width: "40px", // Adjust size as needed
        height: "40px",
    }}
    />
);
}