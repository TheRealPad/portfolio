import { useContext } from "react";

import { ThemeContext } from "@app/theme";
import { Props } from "./types";
import styles from "./styles.scss";

function ThemeToggle(props: Props) {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeToggle must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <div className={styles.themeToggle}>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}

export { ThemeToggle };
