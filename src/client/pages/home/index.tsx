import { useTranslation } from "react-i18next";

import { updateLanguage } from "@app/translations/utils";
import { Language } from "@app/translations/languages";
import { Props } from "./types";
import styles from "./styles.scss";
import { Link } from "react-router-dom";

function Home(props: Props) {
  const { t } = useTranslation();

  return (
    <div className={styles.home}>
      <h1>{t("welcome")}</h1>
      <p>{t("description")}</p>
      <Link to={"/portfolio/me"}>Me</Link>
      <button onClick={() => updateLanguage(Language.EN)}>English</button>
      <button onClick={() => updateLanguage(Language.FR)}>Français</button>
    </div>
  );
}

export { Home };
