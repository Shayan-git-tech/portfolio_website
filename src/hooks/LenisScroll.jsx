import React, { useEffect, useRef, useState } from 'react';
import Lenis from '@studio-freight/lenis';

const LenisScroller = ({ children }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const lenisRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.8,
      smoothTouch: true,
      touchMultiplier: 1.5,
      infinite: false,
    });

    const raf = (time) => {
      lenisRef.current.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };

    animationFrameRef.current = requestAnimationFrame(raf);

    const handleScroll = ({ progress }) => {
      setScrollProgress(progress);
    };

    lenisRef.current.on('scroll', handleScroll);

    return () => {
      lenisRef.current.off('scroll', handleScroll);
      lenisRef.current.destroy();
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <>
      {/* Fixed scroll progress bar */}
      <div
        className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50"
        style={{ transform: `scaleX(${scrollProgress})`, transformOrigin: 'left' }}
      />

      {/* Wrap children in a relative container */}
      <div className="relative">
        {children}
      </div>
    </>
  );
};

export default LenisScroller;
