import { createContext, useContext } from "react";

export const SectionRefContext = createContext();

export const useSectionRef = () => useContext(SectionRefContext);
