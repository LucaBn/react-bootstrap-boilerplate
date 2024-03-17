import { useContext } from "react";

import {
  IThemeContext,
  ThemeContext,
} from "@/components/providers/ThemeProvider/ThemeProvider";

// Define a custom hook to use the theme context
export const useTheme = (): IThemeContext => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
