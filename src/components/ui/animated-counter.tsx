"use client";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  from?: number;
  to?: number;
  value: string; // Can be "85%", "24/7", "50", "75+"
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ from = 0, value, duration = 1.5, className }: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  const isPercentage = value.includes("%");
  const isPlus = value.includes("+");
  const isTime = value.includes("/");
  const cleanValue = parseFloat(value.replace(/[^0-9.]/g, ''));

  // Move hooks to top level
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    if (isTime) return value; // For "24/7"
    return Math.round(latest);
  });

  useEffect(() => {
    if (!isInView) return;

    if (isNaN(cleanValue) && !isTime) {
      // If not a number and not a time string, just display the value
      if (nodeRef.current) {
        nodeRef.current.textContent = value;
      }
      return;
    }

    const controls = animate(count, cleanValue, {
      duration: duration,
      ease: "easeOut",
    });

    const unsubscribe = rounded.on("change", (latest) => {
      if (nodeRef.current) {
        let text = latest.toString();
        if (isPercentage) text += "%";
        if (isPlus) text += "+";
        nodeRef.current.textContent = text;
      }
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [isInView, cleanValue, isTime, value, count, rounded, duration, isPercentage, isPlus]);

  return <span ref={nodeRef} className={className}>{value}</span>;
}
