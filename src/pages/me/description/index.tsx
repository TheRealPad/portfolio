import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

function Description() {
  const { t } = useTranslation();
  return (
    <div className={styles.description}>
      <div>
        <img className={styles.profilePicture} src={"me.png"} />
      </div>
      <div className={styles.rightBox}>
        <p>{t("me.description")}</p>
      </div>
      <li>{t("me.event.vivatech")}</li>
      <li>{t("me.event.hackaton")}</li>
    </div>
  );
}

export { Description };
