import React, { useEffect, useState, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";

const Loader = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const textControls = useAnimation(); // Controls text color animation

  // Memoize `onLoadingComplete` to prevent unnecessary re-renders
  const handleLoadingComplete = useCallback(() => {
    setTimeout(onLoadingComplete, 0); // Execute after current render
  }, [onLoadingComplete]);

  useEffect(() => {
    let start;
    const updateProgress = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const newProgress = Math.min(100, (elapsed / 3000) * 100); // Smooth 3s animation

      setProgress(newProgress);

      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        handleLoadingComplete();
      }
    };

    requestAnimationFrame(updateProgress);
  }, [handleLoadingComplete]);

  // Animate text color based on progress
  useEffect(() => {
    textControls.start({ color: progress > 50 ? "#000000" : "#FFFFFF" });
  }, [progress, textControls]);

  return (
    <motion.div
      className="h-screen flex items-center justify-center bg-black relative overflow-hidden"
      initial={{ opacity: 1 }}
      animate={progress === 100 ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 h-full bg-white"
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.3 }}
      />

      {/* Centered Text */}
      <motion.div className="relative z-10 text-center" animate={textControls}>
        <h1 className="text-4xl font-matter font-bold">Shayan K.</h1>
        <p className="text-[16px] mt-2 font-mono">{`<loading ${Math.round(progress)}%>`}</p>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
