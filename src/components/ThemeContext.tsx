"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme] = useState<Theme>("light");

  useEffect(() => {
    // Force light mode matching the Camplify light blue & white template
    document.documentElement.classList.remove("dark");
    localStorage.setItem("ryqon_theme", "light");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
