import React, { useEffect, useState } from "react";
import logo from "../../assets/logo_black.svg";

interface SplashScreenProps {
  onVisibilityChange: (isVisible: boolean) => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onVisibilityChange }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Start fade in immediately
    setIsVisible(true);
    onVisibilityChange(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
      onVisibilityChange(false);
      // Wait for fade out animation to complete before removing from DOM
      setTimeout(() => {
        setShouldRender(false);
      }, 150);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onVisibilityChange]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 bg-white flex items-center justify-center z-50 transition-opacity duration-150 pointer-events-auto ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img src={logo} alt="Hanmade Logo" className="w-32 h-32 animate-pulse" />
    </div>
  );
};

export default SplashScreen;
