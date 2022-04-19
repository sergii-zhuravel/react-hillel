import { useMemo, useState } from "react";
import themeContext from "./themeContext";
const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(THEMES.LIGHT);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      THEMES,
    }),
    [theme, setTheme, THEMES]
  );

  return <themeContext.Provider>{children}</themeContext.Provider>;
}
