import { useNavigate } from "react-router-dom";

import { LanguageSelector } from "./languageSelector";
import { Resumes } from "./resumes";
import { Props } from "./types.ts";
import styles from "./styles.module.scss";

function Header(props: Props) {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <LanguageSelector />
      <h1 onClick={() => navigate("/")}>{props.title}</h1>
      <Resumes />
    </div>
  );
}

export { Header };
