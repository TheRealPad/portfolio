import { useTranslation } from "react-i18next";

import { Props } from "./types";
import styles from "./styles.scss";
import { Link } from "react-router-dom";

function Expertise(props: Props) {
  return (
    <div className={styles.expertise}>
      <h1>Expertise page</h1>
      <p>écoles et autres formations</p>
      <Link to={"/portfolio"}>Home</Link>
    </div>
  );
}

export { Expertise };
