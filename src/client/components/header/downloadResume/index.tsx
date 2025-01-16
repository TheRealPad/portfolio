import { DownloadDocumentIcon } from "@common/icons/downloadDocumentIcon";

import { Props } from "./types";
import styles from "./styles.scss";

function DownloadResume(props: Props) {
  return (
    <div className={styles.downloadResume}>
      <div className={styles.download}>
        <DownloadDocumentIcon className={styles.icon} />
        <h2>Download resume</h2>
      </div>
    </div>
  );
}

export { DownloadResume };
