import React, { useState, useEffect } from "react";
import MatrixText from "../MatrixText";

interface ProductWithInfoBlurProps {
  category: string;
  koreanCategory: string;
  title: string;
  koreanTitle: string;
  imageUrl?: string;
  className?: string;
  available?: boolean;
  onHoverAction?: () => void;
}

const ProductWithInfoBlur: React.FC<ProductWithInfoBlurProps> = ({
  category,
  koreanCategory,
  title,
  koreanTitle,
  imageUrl = "https://placehold.co/600x400",
  className,
  available,
  onHoverAction,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };

    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);
    return () => window.removeEventListener("resize", checkTouchDevice);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleClick = () => {
    if (!isTouchDevice && available && onHoverAction) {
      onHoverAction();
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`group relative w-full aspect-[1.5] xs:aspect-[0.75] lg:aspect-[0.75] rounded-lg flex items-center justify-center ${
          isTouchDevice ? "cursor-default" : "cursor-none"
        }`}
        onMouseEnter={() => {
          if (!isTouchDevice) {
            setIsVisible(true);
            setIsHovering(true);
          }
        }}
        onMouseLeave={() => {
          if (!isTouchDevice) {
            setIsVisible(false);
            setIsHovering(false);
          }
        }}
        onMouseMove={handleMouseMove}
      >
        <img
          src={imageUrl}
          alt={title}
          className={
            className
              ? `transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] sm:group-hover:blur-xl [filter:drop-shadow(0_25px_8px_rgb(0_0_0_/_0.25))_drop-shadow(0_50px_20px_rgb(0_0_0_/_0.15))] ${className}`
              : "w-full h-full object-contain transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] sm:group-hover:blur-xl [filter:drop-shadow(0_25px_8px_rgb(0_0_0_/_0.25))_drop-shadow(0_50px_20px_rgb(0_0_0_/_0.15))] z-10"
          }
        />

        {isHovering && (
          <div
            className={`opacity-70 border-2 border-dashed absolute pointer-events-none bg-white ${
              !available
                ? "border-gray-400 text-gray-400"
                : "border-black text-black"
            } px-4 py-2 rounded-full text-sm font-medium transition-opacity duration-200 z-[60] whitespace-nowrap w-fit text-center`}
            style={{
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            {available ? "CLICK TO BUY" : "COMING SOON"}
          </div>
        )}

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center p-8 z-50">
          <div
            className={`opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 ${
              isVisible ? "sm:opacity-100" : ""
            }`}
          >
            <div className="flex flex-col gap-4 items-center justify-center transform translate-y-8 sm:group-hover:translate-y-0 transition-transform duration-500 ease-out text-center">
              <div className="text-6xl font-bold mb-2 text-white">
                {isVisible && (
                  <MatrixText
                    text={category}
                    koreanText={koreanCategory}
                    className="text-6xl font-bold text-white"
                  />
                )}
              </div>
              <div className="group/title">
                {isVisible && (
                  <MatrixText
                    text={title}
                    koreanText={koreanTitle}
                    className="text-2xl font-bold text-white"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet text display */}
      <div className="sm:hidden p-4 text-center flex flex-col gap-4 rounded-md relative">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col items-start">
            <MatrixText
              text={category}
              koreanText={koreanCategory}
              className="text-6xl font-bold text-black"
            />
            <MatrixText
              text={title}
              koreanText={koreanTitle}
              className="text-2xl font-bold text-black"
            />
          </div>

          <div
            onClick={available ? onHoverAction : undefined}
            className={`self-center flex text-xs items-center h-fit w-fit py-2 px-4 border-2 border-dashed p-1 rounded-full ${
              !available
                ? "border-gray-400 text-gray-400"
                : "border-black text-black"
            }`}
          >
            <span>{available ? "PRESS TO BUY" : "COMING SOON"}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductWithInfoBlur;
