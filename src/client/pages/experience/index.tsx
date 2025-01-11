import { useTranslation } from "react-i18next";

import { Props } from "./types";
import styles from "./styles.scss";
import { Link } from "react-router-dom";

function Experience(props: Props) {
  return (
    <div className={styles.experience}>
      <h1>Experience page</h1>
      <Link to={"/portfolio"}>Home</Link>
    </div>
  );
}

export { Experience };
