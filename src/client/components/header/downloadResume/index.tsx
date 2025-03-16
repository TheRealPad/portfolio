import { DownloadDocumentIcon } from "@common/icons/downloadDocumentIcon";
import { useTranslation } from "react-i18next";

import { Props } from "./types";
import styles from "./styles.scss";

function DownloadResume(props: Props) {
  const { t } = useTranslation();

  return (
    <div className={styles.downloadResume}>
      <a href={"/portfolio/resume.pdf"} download className={styles.download}>
        <DownloadDocumentIcon className={styles.icon} />
        <p className={styles.title}>{t("header.downloadResume")}</p>
      </a>
    </div>
  );
}

export { DownloadResume };
