import { useTranslation } from "react-i18next";

import { LanguageSelector } from "./languageSelector";
import styles from "./styles.module.scss";
import { Resumes } from "./resumes";

function Header() {
  const { t } = useTranslation();

  return (
    <div className={styles.header}>
      <LanguageSelector />
      <h1>{t("home.header.title")}</h1>
      <Resumes />
    </div>
  );
}

export { Header };
