import { useWindowDimensions } from "@components/getWindowDimensions";
import { DownloadResume } from "./downloadResume";
import { Settings } from "./settings";
import { Accounts } from "./accounts";
import { Props } from "./types";
import styles from "./styles.scss";

function Header(props: Props) {
  const { width } = useWindowDimensions();

  return width >= 1000 ? (
    <header className={styles.header}>
      <DownloadResume />
      <Accounts />
      <Settings />
    </header>
  ) : (
    <div>
      <DownloadResume />
      <Accounts />
      <Settings />
    </div>
  );
}

export { Header };
