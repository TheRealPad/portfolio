import { useTranslation } from "react-i18next";

import { Props } from "./types";
import styles from "./styles.scss";
import { ArrowDownIcon } from "@common/icons/arrowDownIcon";
import React from "react";

function ExpertiseButton(props: Props) {
  const { t } = useTranslation();

  return (
    <div className={styles.expertiseButton}>
      <div className={styles.main}>
        <div className={styles.background}>
          <p>Epitech</p>
        </div>
        <div className={styles.content}>
          <p>{t("home.redirections.expertise")}</p>
          <ArrowDownIcon className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export { ExpertiseButton };
