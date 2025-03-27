// "use client";

// import { useEffect, useState } from "react";

// export default function CustomCursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const moveCursor = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     document.documentElement.style.cursor = "none";
//     document.body.style.cursor = "none";

//     window.addEventListener("mousemove", moveCursor);

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//       document.documentElement.style.cursor = "default";
//       document.body.style.cursor = "default";
//     };
//   }, []);

//   return (
//     <div
//       className="custom-cursor"
//       style={{
//         top: `${position.y}px`,
//         left: `${position.x}px`,
//       }}
//     />
//   );
// }