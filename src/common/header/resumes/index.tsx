import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

function Resumes() {
  const { t } = useTranslation();
  return (
    <div className={styles.resumes}>
      <a
        className={styles.link}
        href={"/resume/frenchResume.pdf"}
        download="resumePierreAlexandreDelgadoArevalo"
        target="_blank"
      >
        {t("home.resume.american")}
      </a>
      <a
        className={styles.link}
        href={"/resume/frenchResume.pdf"}
        download="cvPierreAlexandreDelgadoArevalo"
        target="_blank"
      >
        {t("home.resume.french")}
      </a>
    </div>
  );
}

export { Resumes };
