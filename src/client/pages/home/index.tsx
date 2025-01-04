import { Props } from "./types";
import styles from "./styles.scss";

function Home(props: Props) {
  return (
    <div className={styles.home}>
      <p>coucou</p>
    </div>
  );
}

export { Home };
