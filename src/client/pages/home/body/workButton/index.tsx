import { useTranslation } from "react-i18next";

import { Props } from "./types";
import styles from "./styles.scss";
import { WorkerIcon } from "@common/icons/workerIcon";
import React from "react";

function WorkButton(props: Props) {
  const { t } = useTranslation();

  return (
    <div className={styles.workButton}>
      <div className={styles.main}>
        <div className={styles.content}>
          <p>{t("home.redirections.work")}</p>
          <WorkerIcon className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export { WorkButton };
