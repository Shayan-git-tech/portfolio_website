import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

const CursorContext = createContext();

export const useCursor = () => {
  return useContext(CursorContext);
};

export const CursorProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  const handleMouseMove = useCallback((e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  }, []);

  useEffect(() => {
    const debouncedMouseMove = debounce(handleMouseMove, 10);
    window.addEventListener("mousemove", debouncedMouseMove);

    return () => {
      window.removeEventListener("mousemove", debouncedMouseMove);
    };
  }, [handleMouseMove]);

  const variants = useMemo(() => ({
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 120,
      width: 120,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgb(255, 255, 255)", // FIXED
      mixBlendMode: "difference"
    },
    all: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "rgb(255, 255, 255)", // FIXED
      mixBlendMode: "difference"
    },
    projects: {
      height: 120,
      width: 120,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "rgb(255, 255, 255)", // FIXED
      color: "red",
      content: "View Live"
    }
  }), [mousePosition]);
  

  const setProjectCursor = useCallback(() => setCursorVariant("projects"), []);
  const setTextCursor = useCallback(() => setCursorVariant("text"), []);
  const setDefaultCursor = useCallback(() => setCursorVariant("default"), []);
  const setAllCursor = useCallback(() => setCursorVariant("all"), []);

  const contextValue = useMemo(() => ({
    mousePosition,
    cursorVariant,
    variants,
    setTextCursor,
    setDefaultCursor,
    setAllCursor,
    setProjectCursor
  }), [mousePosition, cursorVariant, variants, setTextCursor, setDefaultCursor, setAllCursor, setProjectCursor]);

  return (
    <CursorContext.Provider value={contextValue}>
      {children}
    </CursorContext.Provider>
  );
};

// Utility function to debounce another function
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
