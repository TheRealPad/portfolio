import { updateLanguage } from "@app/translations/utils";
import { Language } from "@app/translations/languages";
import { useWindowDimensions } from "@components/getWindowDimensions";
import { ThemeToggle } from "@components/themeToggle";
import { ListSelect } from "@common/listSelect";
import { Links } from "./links";
import { Props } from "./types";
import styles from "./styles.scss";

function Header(props: Props) {
  const { width } = useWindowDimensions();

  return width >= 1000 ? (
    <header className={styles.header}>
      <div className={styles.name}>
        <h1>TheRealPad</h1>
      </div>
      <Links className={styles.links} />
      <div className={styles.settings}>
        <button onClick={() => updateLanguage(Language.EN)}>English</button>
        <button onClick={() => updateLanguage(Language.FR)}>Français</button>
        <ThemeToggle />
      </div>
    </header>
  ) : (
    <div>
      <div className={styles.name}>
        <h1>TheRealPad</h1>
      </div>
      <div className={styles.settings}>
        <button onClick={() => updateLanguage(Language.EN)}>English</button>
        <button onClick={() => updateLanguage(Language.FR)}>Français</button>
        <ThemeToggle />
      </div>
      <ListSelect>
        {() => ({
          input: <div>Custom Input</div>,
          list: <Links className={styles.linksMobile} />,
        })}
      </ListSelect>
    </div>
  );
}

export { Header };
