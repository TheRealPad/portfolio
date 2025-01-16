import { updateLanguage } from "@app/translations/utils";
import { Language } from "@app/translations/languages";
import { ThemeToggle } from "@components/themeToggle";
import { Props } from "./types";
import styles from "./styles.scss";

function Settings(props: Props) {
  return (
    <div className={styles.settings}>
      <button onClick={() => updateLanguage(Language.EN)}>English</button>
      <button onClick={() => updateLanguage(Language.FR)}>Français</button>
      <ThemeToggle />
    </div>
  );
}

export { Settings };
