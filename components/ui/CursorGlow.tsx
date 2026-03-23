"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer green glow */}
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          left: springX,
          top: springY,
          width: 400,
          height: 400,
          x: -200,
          y: -200,
          background: "radial-gradient(circle 200px, rgba(0,255,148,0.05), transparent)",
        }}
      />
      {/* Inner violet glow */}
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          left: springX,
          top: springY,
          width: 200,
          height: 200,
          x: -100,
          y: -100,
          background: "radial-gradient(circle 100px, rgba(108,71,255,0.03), transparent)",
        }}
      />
    </>
  );
}
