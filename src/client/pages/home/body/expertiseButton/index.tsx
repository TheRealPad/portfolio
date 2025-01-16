import { useTranslation } from "react-i18next";

import { Props } from "./types";
import styles from "./styles.scss";

function ExpertiseButton(props: Props) {
  const { t } = useTranslation();

  return (
    <div className={styles.expertiseButton}>
      <p>{t("home.redirections.expertise")}</p>
    </div>
  );
}

export { ExpertiseButton };
