import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { works } from "./data";
import { Props } from "./types";
import styles from "./styles.scss";

function Work(props: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={styles.work}>
      <div className={styles.projects}>
        {works
          .sort((a, b) => {
            if (a.startDate < b.startDate) return 1;
            if (a.startDate > b.startDate) return -1;
            return 0;
          })
          .map((work, key) => (
            <div className={styles.project} key={key}>
              <p className={styles.title}>{t(work.title)}</p>
              <p className={styles.subtitle}>{work.company}</p>
              <div className={styles.technologies}>
                {work.technologies.map((technology, technoKey) => (
                  <div className={styles.techno} key={technoKey}>
                    <p>{technology}</p>
                  </div>
                ))}
              </div>
              <p>{t(work.description)}</p>
            </div>
          ))}
      </div>
      <div className={styles.buttonBox}>
        <div className={styles.button} onClick={() => navigate("/portfolio")}>
          <p>{t("work.back")}</p>
        </div>
      </div>
    </div>
  );
}

export { Work };
