"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import LenisScroller from "./hooks/LenisScroll";
import Loader from "./Components/Context/Loader";
import Main from "./Components/Main";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setShowTransition(true);
    }
  }, [isLoading]);

  return (
    <LenisScroller>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <Main
            key="main-content"
            showTransition={showTransition}
            setShowTransition={setShowTransition}
          />
        )}
      </AnimatePresence>
    </LenisScroller>
  );
}
