import React from "react";
import { useTranslation } from "react-i18next";

import { CommandPromptIcon } from "@common/icons/commandPromptIcon";
import { Props } from "./types";
import styles from "./styles.scss";

function ExperienceButton(props: Props) {
  const { t } = useTranslation();

  return (
    <div className={styles.experienceButton}>
      <div className={styles.main}>
        <div className={styles.content}>
          <p>{t("home.redirections.experience")}</p>
          <CommandPromptIcon className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export { ExperienceButton };
