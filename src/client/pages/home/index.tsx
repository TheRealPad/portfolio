import { useTranslation } from "react-i18next";

import { Props } from "./types";
import styles from "./styles.scss";
import { DownloadDocumentIcon } from "@common/icons/downloadDocumentIcon";

function Home(props: Props) {
  const { t } = useTranslation();

  return (
    <div className={styles.home}>
      <h1>Pierre-Alexandre Delgado</h1>
      <h2>Software engineer, Front end, Back end, Mobile, DevOps</h2>
      <div className={styles.download}>
        <DownloadDocumentIcon className={styles.icon} />
        <h2>Download resume</h2>
      </div>
    </div>
  );
}

export { Home };
