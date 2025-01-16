import React from "react";
import classNames from "classnames";

import { getLanguage, updateLanguage } from "@app/translations/utils";
import { Language } from "@app/translations/languages";
import { ThemeToggle } from "@components/themeToggle";
import { FrenchFlagIcon } from "client/common/icons/frenchFlagIcon";
import { UsaFlagIcon } from "client/common/icons/usaFlagIcon";
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
          <FrenchFlagIcon className={styles.flag} />
        </div>
        <div
          className={classNames(styles.button, {
            [styles.selected]: currentLanguage === Language.EN,
          })}
          onClick={() => changeLanguage(Language.EN)}
        >
          <UsaFlagIcon className={styles.flag} />
        </div>
      </div>
    </div>
  );
}

export { Settings };
