"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";

interface ThemeContextProps {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext<ThemeContextProps>({
  isDark: true,
  setIsDark: function (value: SetStateAction<boolean>): void {
    throw new Error("Function not implemented.");
  },
});

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(true);

  const value = useMemo(() => ({ isDark, setIsDark }), [isDark]);

  return (
    <ThemeContext.Provider value={value}>
      <div className={isDark ? `dark` : `light`}>{children}</div>
    </ThemeContext.Provider>
  );
};
