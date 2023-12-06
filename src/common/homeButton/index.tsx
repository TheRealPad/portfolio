import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

function HomeButton() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <button className={styles.homeButton} onClick={() => navigate("/")}>
      {t("common.home")}
    </button>
  );
}

export { HomeButton };
