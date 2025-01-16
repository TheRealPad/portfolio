import { useTranslation } from "react-i18next";

import { Props } from "./types";
import styles from "./styles.scss";

function ContactButton(props: Props) {
  const { t } = useTranslation();

  return (
    <div className={styles.contactButton}>
      <p>{t("home.redirections.contact")}</p>
    </div>
  );
}

export { ContactButton };
