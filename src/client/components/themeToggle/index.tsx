import { useContext } from "react";
import classNames from "classnames";

import { ThemeContext } from "@app/theme";
import { SunIcon } from "@common/icons/sunIcon";
import { MoonIcon } from "@common/icons/moonIcon";
import { Props } from "./types";
import styles from "./styles.scss";

function ThemeToggle(props: Props) {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ThemeToggle must be used within a ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <div
      className={classNames(styles.themeToggle, {
        [styles.active]: theme === "dark",
      })}
      onClick={toggleTheme}
    >
      <div className={styles.ball}>
        <SunIcon className={styles.sunIcon} />
        <MoonIcon className={styles.moonIcon} />
      </div>
    </div>
  );
}

export { ThemeToggle };
