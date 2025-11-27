"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const StairTransition = () => {
  const TOTAL_STEPS = 6;
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const totalDurationMs = (TOTAL_STEPS * 0.1 + 0.4) * 1000;

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, totalDurationMs);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }
  const reverseIndex = (index) => TOTAL_STEPS - 1 - index;

  const stairAnimation = {
    initial: { y: "0%" },
    animate: {
      y: "-100%",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div className="fixed top-0 left-0 right-0 h-screen w-screen z-50 flex pointer-events-none">
      {[...Array(TOTAL_STEPS)].map((_, index) => (
        <motion.div
          key={index}
          className="h-full w-full bg-white !important"
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          transition={{
            ...stairAnimation.animate.transition,
            delay: reverseIndex(index) * 0.1,
          }}
          style={{ width: `${100 / TOTAL_STEPS}%` }}
        />
      ))}
    </div>
  );
};
export default StairTransition;
