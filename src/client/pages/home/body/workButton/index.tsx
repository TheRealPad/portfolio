import { useTranslation } from "react-i18next";

import { Props } from "./types";
import styles from "./styles.scss";

function WorkButton(props: Props) {
  const { t } = useTranslation();

  return (
    <div className={styles.workButton}>
      <p>{t("home.redirections.work")}</p>
    </div>
  );
}

export { WorkButton };
