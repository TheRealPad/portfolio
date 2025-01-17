import { useWindowDimensions } from "@components/getWindowDimensions";
import { DownloadResume } from "./downloadResume";
import { Settings } from "./settings";
import { Accounts } from "./accounts";
import { Props } from "./types";
import styles from "./styles.scss";

function Header(props: Props) {
  const { width } = useWindowDimensions();

  return width >= 768 ? (
    <header className={styles.header}>
      <Settings />
      <Accounts />
      <DownloadResume />
    </header>
  ) : (
    <div className={styles.mobile}>
      <div className={styles.top}>
        <Settings />
        <DownloadResume />
      </div>
      <Accounts />
    </div>
  );
}

export { Header };
