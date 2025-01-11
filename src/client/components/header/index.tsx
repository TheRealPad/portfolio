import { Props } from "./types";
import styles from "./styles.scss";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@components/themeToggle";
import { updateLanguage } from "@app/translations/utils";
import { Language } from "@app/translations/languages";

function Header(props: Props) {
  return (
    <header className={styles.header}>
      <Link to={"/portfolio/contact"}>Contact</Link>
      <Link to={"/portfolio/work"}>Work</Link>
      <Link to={"/portfolio/experience"}>Experience</Link>
      <Link to={"/portfolio/expertise"}>Expertise</Link>
      <button onClick={() => updateLanguage(Language.EN)}>English</button>
      <button onClick={() => updateLanguage(Language.FR)}>Français</button>
      <ThemeToggle />
    </header>
  );
}

export { Header };
