"use client";
import { useContext, useState, useEffect, ReactNode, createContext } from 'react';

const defaultColor = '#7c3aed'; // Tailwind violet-600

type ThemeContextType = {
  color: string;
  setColor: (color: string) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  color: defaultColor,
  setColor: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [color, setColor] = useState(defaultColor);

  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', color);
  }, [color]);

  return (
    <ThemeContext.Provider value={{ color, setColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext); 