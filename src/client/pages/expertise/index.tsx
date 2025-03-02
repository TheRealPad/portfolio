import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Props } from "./types";
import styles from "./styles.scss";

function Expertise(props: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={styles.expertise}>
      <h1 className={styles.title}>{t("expertise.epitech.title")}</h1>
      <h2>{t("expertise.epitech.subtitle")}</h2>
      <p>
        <Trans i18nKey="expertise.epitech.paragraphs.one">
          <strong></strong>
        </Trans>
      </p>
      <p>
        <Trans i18nKey="expertise.epitech.paragraphs.two">
          <strong></strong>
        </Trans>
      </p>
      <p>
        <Trans i18nKey="expertise.epitech.paragraphs.three">
          <strong></strong>
        </Trans>
      </p>
      <h1 className={styles.title}>{t("expertise.sfsu.title")}</h1>
      <h2>{t("expertise.sfsu.subtitle")}</h2>
      <p>{t("expertise.sfsu.introduction")}</p>
      <ul className={styles.list}>
        <li>
          <Trans i18nKey="expertise.sfsu.classes.ethic">
            <strong></strong>
          </Trans>
        </li>
        <li>
          <Trans i18nKey="expertise.sfsu.classes.analysis">
            <strong></strong>
          </Trans>
        </li>
        <li>
          <Trans i18nKey="expertise.sfsu.classes.database">
            <strong></strong>
          </Trans>
        </li>
        <li>
          <Trans i18nKey="expertise.sfsu.classes.software">
            <strong></strong>
          </Trans>
        </li>
        <li>
          <Trans i18nKey="expertise.sfsu.classes.admin">
            <strong></strong>
          </Trans>
        </li>
        <li>
          <Trans i18nKey="expertise.sfsu.classes.paradigms">
            <strong></strong>
          </Trans>
        </li>
      </ul>
      <p>{t("expertise.sfsu.conclusion")}</p>
      <div className={styles.buttonBox}>
        <div className={styles.button} onClick={() => navigate("/portfolio")}>
          <p>{t("expertise.back")}</p>
        </div>
      </div>
    </div>
  );
}

export { Expertise };
