import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  className?: string;
  cursorChar?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 70,
  className = "",
  cursorChar = "_"
}) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [displayText, text, speed]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-blink">{cursorChar}</span>
    </span>
  );
};

export default Typewriter; 