import { useTranslation } from "react-i18next";

import { Props } from "./types";
import styles from "./styles.scss";
import { Link } from "react-router-dom";

function Work(props: Props) {
  return (
    <div className={styles.work}>
      <h1>Work page</h1>
      <Link to={"/portfolio"}>Home</Link>
    </div>
  );
}

export { Work };
