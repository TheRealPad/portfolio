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
        <div className={styles.description}>
          <p className={styles.blue}>Software engineer,</p>
          <p className={styles.green}>Front end,</p>
          <p className={styles.yellow}>Back end,</p>
          <p className={styles.red}>Mobile,</p>
          <p>DevOps</p>
        </div>
        {/*<h2>Software engineer, Front end, Back end, Mobile, DevOps</h2>*/}
      </div>
      <Body />
    </div>
  );
}

export { Home };
