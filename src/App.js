"use client";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import LenisScroller from "./hooks/LenisScroll";
import Loader from "./Components/Context/Loader";
import Main from "./Components/Main";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LenisScroller>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader key="loader" onLoadingComplete={() => setIsLoading(false)} />
        ) : (
          <Main key="main-content" />
        )}
      </AnimatePresence>
    </LenisScroller>
  );
}
