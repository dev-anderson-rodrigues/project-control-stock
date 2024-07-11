import { ReactNode, createContext, useContext } from "react";
import { theme } from "../styles/theme";

type ThemeContextType = {
  theme: typeof theme;
  children: ReactNode;
};
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children, theme }: ThemeContextType) => {
  return (
    <ThemeContext.Provider value={{ theme, children }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeProvider, useTheme };
