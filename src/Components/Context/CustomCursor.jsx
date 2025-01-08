import React, { createContext, useContext, useState, useEffect } from 'react';

const CursorContext = createContext();

export const useCursor = () => {
  return useContext(CursorContext);
};

export const CursorProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
    },
    text: {
      height: 120,
      width: 120,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference"
    },
    all: {
      height: 80,
      width: 80,
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      backgroundColor: "white",
      mixBlendMode: "difference"
    }
  };

  const setTextCursor = () => setCursorVariant("text");
  const setDefaultCursor = () => setCursorVariant("default");
  const setAllCursor = () => setCursorVariant("all");

  return (
    <CursorContext.Provider value={{
      mousePosition,
      cursorVariant,
      variants,
      setTextCursor,
      setDefaultCursor,
      setAllCursor
    }}>
      {children}
    </CursorContext.Provider>
  );
};
