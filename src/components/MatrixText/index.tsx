import React, { useEffect, useState } from "react";

interface MatrixTextProps {
  text: string;
  koreanText: string;
  className?: string;
}

const MatrixText: React.FC<MatrixTextProps> = ({
  text,
  koreanText,
  className = "",
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start animation when component mounts
    setIsAnimating(true);
  }, []);

  useEffect(() => {
    if (!isAnimating) return;

    const textLength = text.length;
    const totalDuration = 4000; // 4 seconds total for the full sequence
    const startTime = Date.now();
    const updateInterval = 30; // Update every 30ms for smoother animation

    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / totalDuration, 1);

      if (progress >= 1) {
        clearInterval(interval);
        setDisplayText(text);
        setIsAnimating(false);
        return;
      }

      // Define the animation phases
      const phase = Math.floor(progress * 4); // 0-3 for the four phases
      const phaseProgress = (progress * 4) % 1; // Progress within current phase

      const newText = Array.from({ length: textLength }, (_, i) => {
        // Calculate a wave effect based on position and progress
        const wavePosition = (i / textLength + phaseProgress) % 1;
        const waveIntensity = Math.sin(wavePosition * Math.PI * 2);

        // Phase 0: English to Korean glitch
        if (phase === 0) {
          if (waveIntensity > 0.7) {
            return Math.random() < 0.5 ? koreanText[i] : text[i];
          }
          return text[i];
        }
        // Phase 1: Korean
        else if (phase === 1) {
          return koreanText[i];
        }
        // Phase 2: Korean to English glitch
        else if (phase === 2) {
          if (waveIntensity > 0.7) {
            return Math.random() < 0.5 ? text[i] : koreanText[i];
          }
          return koreanText[i];
        }
        // Phase 3: English
        else {
          return text[i];
        }
      }).join("");

      setDisplayText(newText);
    }, updateInterval);

    return () => clearInterval(interval);
  }, [isAnimating, text, koreanText]);

  return <div className={className}>{displayText}</div>;
};

export default MatrixText;
