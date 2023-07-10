import React, { createContext, useEffect, useState } from "react";
import { DarkModeContextValue, initialContextValue } from "./interfaces/darkMode";
const DarkModeContext = createContext<DarkModeContextValue>(initialContextValue);
export const DarkModeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
    const [darkMode, setDarkMode] = useState(() => {
        const storedDarkMode = localStorage.getItem("darkMode");
        return storedDarkMode ? JSON.parse(storedDarkMode) : false;
      });
    
      useEffect(() => {
        localStorage.setItem("darkMode", JSON.stringify(darkMode));
      }, [darkMode]);
  const value: DarkModeContextValue = {
    darkMode,
    setDarkMode
  };
 
  return <DarkModeContext.Provider value={value}>{children}</DarkModeContext.Provider>;
};

export default DarkModeContext;