"use client";

import React, { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
  duration?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  yOffset = 24,
  duration = 0.55,
  className = "",
  ...props
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
