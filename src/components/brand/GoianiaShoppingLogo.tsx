// Hello World
"use client";

import { type CSSProperties } from "react";
import Image from "next/image";

export interface GoianiaShoppingLogoProps {
  className?: string;
  style?: CSSProperties;
  theme?: "dark" | "light";
  priority?: boolean;
}

export function GoianiaShoppingLogo({
  className = "w-full h-auto",
  style,
  theme = "dark",
  priority = false,
}: GoianiaShoppingLogoProps) {
  const imgSrc =
    theme === "dark"
      ? "/brand/goiania-shopping-white.png"
      : "/brand/goiania-shopping-dark.png";

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={style}
    >
      <Image
        src={imgSrc}
        alt="Goiânia Shopping"
        width={1024}
        height={343}
        className="w-full h-auto object-contain select-none"
        priority={priority}
      />
    </div>
  );
}

export interface GoianiaShoppingAnimatedLogoProps {
  className?: string;
  style?: CSSProperties;
  symbolVisible?: boolean;
  textVisible?: boolean;
  theme?: "dark" | "light";
}

export function GoianiaShoppingAnimatedLogo({
  className = "w-full max-w-[380px] h-auto",
  style,
  symbolVisible = true,
  textVisible = true,
  theme = "dark",
}: GoianiaShoppingAnimatedLogoProps) {
  const imgSrc =
    theme === "dark"
      ? "/brand/goiania-shopping-white.png"
      : "/brand/goiania-shopping-dark.png";

  return (
    <div
      className={`relative flex flex-col items-center justify-center w-full transition-all duration-700 ease-out ${className}`}
      style={style}
    >
      <div
        className="relative w-full transition-all duration-700 ease-out"
        style={{
          opacity: textVisible ? 1 : symbolVisible ? 0.6 : 0,
          transform: textVisible
            ? "translateY(0) scale(1)"
            : symbolVisible
            ? "translateY(10px) scale(0.96)"
            : "translateY(25px) scale(0.9)",
          filter: textVisible
            ? "drop-shadow(0 4px 20px rgba(255,255,255,0.2))"
            : "none",
        }}
      >
        <Image
          src={imgSrc}
          alt="Goiânia Shopping"
          width={1024}
          height={343}
          className="w-full h-auto object-contain select-none"
          priority
        />
      </div>
    </div>
  );
}
