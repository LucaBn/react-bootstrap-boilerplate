import React, { createContext, useEffect, useState } from "react";

import { ThemeList } from "@/constants/themes";
import { IGenericComponent } from "@/typings/components";
import {
  readFromLocalStorage,
  writeToLocalStorage,
} from "@/utils/local-storage";
export interface IThemeContext {
  theme: ThemeList;
  changeTheme: (newTheme: ThemeList) => void;
}

const LS_THEME_VARIABLE = `Theme`;

const defaultCreateContextValue = {
  theme: ThemeList.Dark,
  changeTheme: () => {},
};

export const ThemeContext = createContext<IThemeContext>(
  defaultCreateContextValue
);

export const ThemeProvider: React.FC<IGenericComponent> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeList>(ThemeList.Dark);

  useEffect(() => {
    const storedPmjTheme = readFromLocalStorage(LS_THEME_VARIABLE);

    switch (storedPmjTheme) {
      case ThemeList.Dark:
        setTheme(ThemeList.Dark);
        break;
      case ThemeList.Light:
        setTheme(ThemeList.Light);
        break;
      default:
        break;
    }
  }, []);

  const changeTheme = (newTheme: ThemeList) => {
    setTheme(newTheme);
    writeToLocalStorage(LS_THEME_VARIABLE, newTheme);
  };

  const themeValues: IThemeContext = {
    theme,
    changeTheme,
  };

  return (
    <ThemeContext.Provider value={themeValues}>
      {children}
    </ThemeContext.Provider>
  );
};
