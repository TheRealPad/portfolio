import { useTranslation } from "react-i18next";

import { Props } from "./types";
import styles from "./styles.scss";
import { DownloadDocument } from "@common/icons/downloadDocument";

function Home(props: Props) {
  const { t } = useTranslation();

  return (
    <div className={styles.home}>
      <h1>Pierre-Alexandre Delgado</h1>
      <h2>Software engineer, Front end, Back end, Mobile, DevOps</h2>
      <div className={styles.download}>
        <DownloadDocument className={styles.icon} />
        <h2>Download resume</h2>
      </div>
    </div>
  );
}

export { Home };
