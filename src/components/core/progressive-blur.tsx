"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ProgressiveBlurProps extends HTMLMotionProps<"div"> {
  direction?: "top" | "right" | "bottom" | "left";
  blurLayers?: number;
  blurIntensity?: number;
  className?: string;
}

export function ProgressiveBlur({
  direction = "bottom",
  blurLayers = 8,
  blurIntensity = 0.5,
  className = "",
  ...props
}: ProgressiveBlurProps) {
  const layers = Math.max(blurLayers, 2);
  const step = 1 / layers;

  const directionMap = {
    top: "to top",
    bottom: "to bottom",
    left: "to left",
    right: "to right",
  };

  const gradientDirection = directionMap[direction] || "to bottom";

  return (
    <motion.div
      className={`pointer-events-none relative overflow-hidden ${className}`}
      {...props}
    >
      {Array.from({ length: layers }).map((_, index) => {
        const percentage = (index + 1) / layers;
        const blurValue = Math.pow(percentage, 2) * 40 * blurIntensity;
        const stop1 = Math.max(0, (index * step - step * 0.4) * 100);
        const stop2 = index * step * 100;
        const stop3 = (index + 1) * step * 100;
        const stop4 = Math.min(100, ((index + 1) * step + step * 0.4) * 100);

        return (
          <div
            key={index}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${blurValue.toFixed(2)}px)`,
              WebkitBackdropFilter: `blur(${blurValue.toFixed(2)}px)`,
              maskImage: `linear-gradient(${gradientDirection}, transparent ${stop1}%, black ${stop2}%, black ${stop3}%, transparent ${stop4}%)`,
              WebkitMaskImage: `linear-gradient(${gradientDirection}, transparent ${stop1}%, black ${stop2}%, black ${stop3}%, transparent ${stop4}%)`,
            }}
          />
        );
      })}
    </motion.div>
  );
}
