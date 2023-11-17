import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

function Buttons() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={styles.buttons}>
      <button className={styles.button} onClick={() => navigate("/me")}>
        <p>{t("home.meRedirection")}</p>
      </button>
      <button
        className={styles.button}
        onClick={() => {
          navigate("/projects");
        }}
      >
        <p>{t("home.projectRedirection")}</p>
      </button>
    </div>
  );
}

export { Buttons };
