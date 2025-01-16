import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Props } from "./types";
import styles from "./styles.scss";

function Body(props: Props) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={styles.body}>
      <div className={styles.left}>
        <div
          className={styles.container}
          onClick={() => navigate("/portfolio/expertise")}
        >
          <p>{t("header.expertise")}</p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div
            className={styles.container}
            onClick={() => navigate("/portfolio/work")}
          >
            <p>{t("header.work")}</p>
          </div>
          <div
            className={styles.container}
            onClick={() => navigate("/portfolio/experience")}
          >
            <p>{t("header.experience")}</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <div
            className={styles.container}
            onClick={() => navigate("/portfolio/contact")}
          >
            <p>{t("header.contact")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Body };
