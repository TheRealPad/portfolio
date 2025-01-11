import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { Props } from "./types";
import styles from "./styles.scss";

function Contact(props: Props) {
  return (
    <div className={styles.contact}>
      <h1>Contact page</h1>
      <p>form pour me contacter, mes reseaux</p>
      <Link to={"/portfolio"}>Home</Link>
    </div>
  );
}

export { Contact };
