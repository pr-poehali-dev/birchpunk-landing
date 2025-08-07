import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  erasingSpeed?: number;
  delayBetween?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  className = '',
  typingSpeed = 100,
  erasingSpeed = 50,
  delayBetween = 2000,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (isWaiting) {
      const waitTimer = setTimeout(() => {
        setIsWaiting(false);
        setIsErasing(true);
      }, delayBetween);
      return () => clearTimeout(waitTimer);
    }

    if (!isErasing && currentChar < texts[currentTextIndex].length) {
      const typingTimer = setTimeout(() => {
        setCurrentChar(currentChar + 1);
      }, typingSpeed);
      return () => clearTimeout(typingTimer);
    } else if (!isErasing && currentChar === texts[currentTextIndex].length) {
      setIsWaiting(true);
      return;
    }

    if (isErasing && currentChar > 0) {
      const erasingTimer = setTimeout(() => {
        setCurrentChar(currentChar - 1);
      }, erasingSpeed);
      return () => clearTimeout(erasingTimer);
    } else if (isErasing && currentChar === 0) {
      setIsErasing(false);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }
  }, [currentChar, currentTextIndex, isErasing, isWaiting, texts, typingSpeed, erasingSpeed, delayBetween]);

  return (
    <span className={`${className} typewriter`}>
      {texts[currentTextIndex].substring(0, currentChar)}
    </span>
  );
};

export default TypewriterText;