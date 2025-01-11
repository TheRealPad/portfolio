import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { updateLanguage } from "@app/translations/utils";
import { Language } from "@app/translations/languages";
import { ThemeToggle } from "@components/themeToggle";
import { Props } from "./types";
import styles from "./styles.scss";

function Home(props: Props) {
  const { t } = useTranslation();

  return (
    <div className={styles.home}>
      <h1>Pierre-Alexandre Delgado</h1>
      <h2>Software engineer, Front end, Back end, Mobile, DevOps</h2>
      <ThemeToggle />
      <Link to={"/portfolio/me"}>Me</Link>
      <button onClick={() => updateLanguage(Language.EN)}>English</button>
      <button onClick={() => updateLanguage(Language.FR)}>Français</button>
    </div>
  );
}

export { Home };
