// import React, { createContext, useContext, useState, useEffect } from "react";

// // Create Context
// const DarkModeContext = createContext();

// // Custom Hook
// export const useDarkMode = () => useContext(DarkModeContext);

// // Provider Component
// export const DarkModeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(false);

//   // Apply dark mode class to <html> when state changes
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };
