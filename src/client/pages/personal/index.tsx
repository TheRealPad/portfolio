import { useTranslation } from "react-i18next";

import { Props } from "./types";
import styles from "./styles.scss";
import { Link } from "react-router-dom";

function Personal(props: Props) {
  return (
    <div className={styles.personal}>
      <h1>This is me</h1>
      <Link to={"/portfolio"}>Home</Link>
    </div>
  );
}

export { Personal };
