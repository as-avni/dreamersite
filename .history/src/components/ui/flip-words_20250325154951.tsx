

import { useState, useEffect } from "react";

export function FlipWords({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150; // Speed of typing
  const deleteSpeed = 150; // Speed of deleting
  const pauseTime = 2000; // Pause before deleting

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
      className="inline-block text-center relative"
      style={{ minWidth: `${longestWord.length}ch` }} // Setting a fixed width
    >
      {displayText}
      <span className="blinking-cursor">|</span>
    </span>
  );
}