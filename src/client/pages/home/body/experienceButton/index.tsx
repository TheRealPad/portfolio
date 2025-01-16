import { useTranslation } from "react-i18next";

import { Props } from "./types";
import styles from "./styles.scss";

function ExperienceButton(props: Props) {
  const { t } = useTranslation();

  return (
    <div className={styles.experienceButton}>
      <p>{t("home.redirections.experience")}</p>
    </div>
  );
}

export { ExperienceButton };
