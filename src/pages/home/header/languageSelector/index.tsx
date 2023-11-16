import i18n from "i18next";

import { Language } from "@app/translations/enums/languages.ts";
import styles from "./styles.module.scss";
import classNames from "classnames";

function LanguageSelector() {
  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("pad-portfolio-language", lng ?? "");
  };
  const fullLanguageName = ["Français", "English"];

  return (
    <div className={styles.languageSelector}>
      {Object.values(Language).map((language, index) => (
        <div
          key={index}
          className={classNames(styles.language, {
            [styles.selected]: language === i18n.language,
          })}
          onClick={() => changeLanguage(language)}
        >
          <p>
            {index < fullLanguageName.length
              ? fullLanguageName[index]
              : language}
          </p>
        </div>
      ))}
    </div>
  );
}

export { LanguageSelector };
