import { useTranslation } from "react-i18next";

import { DownloadDocumentIcon } from "@common/icons/downloadDocumentIcon";
import { Body } from "./body";
import { Props } from "./types";
import styles from "./styles.scss";

function Home(props: Props) {
  const { t } = useTranslation();

  return (
    <div className={styles.home}>
      <div className={styles.head}>
        <p className={styles.description}>
          <span className={styles.blue}>Software engineer,</span>
          <span className={styles.green}>Front end,</span>
          <span className={styles.yellow}>Back end,</span>
          <span className={styles.red}>Mobile,</span>
          <span>DevOps</span>
        </p>
        {/*<h2>Software engineer, Front end, Back end, Mobile, DevOps</h2>*/}
      </div>
      <Body />
    </div>
  );
}

export { Home };
