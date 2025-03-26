// "use client";
// import React, { useCallback, useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const FlipWords = ({
//   words,
//   duration = 3000,
//   className,
// }: {
//   words: string[];
//   duration?: number;
//   className?: string;
// }) => {
//   const [currentWord, setCurrentWord] = useState(words[0]);
//   const [isAnimating, setIsAnimating] = useState<boolean>(false);

//   const startAnimation = useCallback(() => {
//     const word = words[words.indexOf(currentWord) + 1] || words[0];
//     setCurrentWord(word);
//     setIsAnimating(true);
//   }, [currentWord, words]);

//   useEffect(() => {
//     if (!isAnimating)
//       setTimeout(() => {
//         startAnimation();
//       }, duration);
//   }, [isAnimating, duration, startAnimation]);

//   return (
//     <AnimatePresence
//       onExitComplete={() => {
//         setIsAnimating(false);
//       }}
//     >
//       <motion.div
//         initial={{
//           opacity: 0,
//           y: 10,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 100,
//           damping: 10,
//         }}
//         exit={{
//           opacity: 0,
//           y: -40,
//           x: 40,
//           filter: "blur(8px)",
//           scale: 2,
//           position: "absolute",
//         }}
//         className={cn(
//           "z-10 inline-block relative text-left dark:text-neutral-100 px-2",
//           className
//         )}
//         key={currentWord}
//       >
//         {/* edit suggested by Sajal: https://x.com/DewanganSajal */}
//         {currentWord.split(" ").map((word, wordIndex) => (
//           <motion.span
//             key={word + wordIndex}
//             initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
//             animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//             transition={{
//               delay: wordIndex * 0.3,
//               duration: 0.3,
//             }}
//             className="inline-block whitespace-nowrap"
//           >
//             {word.split("").map((letter, letterIndex) => (
//               <motion.span
//                 key={word + letterIndex}
//                 initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
//                 animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//                 transition={{
//                   delay: wordIndex * 0.3 + letterIndex * 0.05,
//                   duration: 0.2,
//                 }}
//                 className="inline-block"
//               >
//                 {letter}
//               </motion.span>
//             ))}
//             <span className="inline-block">&nbsp;</span>
//           </motion.span>
//         ))}
//       </motion.div>
//     </AnimatePresence>
//   );
// };


import { useState, useEffect } from "react";

export function FlipWords({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150; // Speed of typing
  const deleteSpeed = 150; // Speed of deleting
  const pauseTime = 1000; // Pause before deleting

  // Find the longest word for setting a fixed space
  const longestWordLength = Math.max(...words.map(word => word.length));
  const longestWord = words.find(word => word.length === longestWordLength) || words[0];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < words[wordIndex].length) {
      // Typing effect
      timeout = setTimeout(() => {
        setDisplayText(words[wordIndex].slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayText.length === words[wordIndex].length) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting effect
      timeout = setTimeout(() => {
        setDisplayText(words[wordIndex].slice(0, displayText.length - 1));
      }, deleteSpeed);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next word
      setIsDeleting(false);
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words]);

  return (
    <span 
      className="inline-block text-center" 
      style={{ minWidth: `${longestWord.length}ch` }} // Setting a fixed width
    >
      {displayText}
    </span>
  );
}