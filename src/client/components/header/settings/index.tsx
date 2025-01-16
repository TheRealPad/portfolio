import React from "react";
import classNames from "classnames";

import { getLanguage, updateLanguage } from "@app/translations/utils";
import { Language } from "@app/translations/languages";
import { ThemeToggle } from "@components/themeToggle";
import { FrenchFlag } from "@common/icons/frenchFlag";
import { UsaFlag } from "@common/icons/usaFlag";
import { Props } from "./types";
import styles from "./styles.scss";

function Settings(props: Props) {
  const [currentLanguage, setCurrentLanguage] = React.useState(getLanguage());

  const changeLanguage = (language: Language) => {
    updateLanguage(language);
    setCurrentLanguage(language);
  };

  return (
    <div className={styles.settings}>
      <ThemeToggle />
      <div className={styles.language}>
        <div
          className={classNames(styles.button, {
            [styles.selected]: currentLanguage === Language.FR,
          })}
          onClick={() => changeLanguage(Language.FR)}
        >
          <FrenchFlag className={styles.flag} />
        </div>
        <div
          className={classNames(styles.button, {
            [styles.selected]: currentLanguage === Language.EN,
          })}
          onClick={() => changeLanguage(Language.EN)}
        >
          <UsaFlag className={styles.flag} />
        </div>
      </div>
    </div>
  );
}

export { Settings };
