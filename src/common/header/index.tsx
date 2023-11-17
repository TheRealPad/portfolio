import { LanguageSelector } from "./languageSelector";
import { Resumes } from "./resumes";
import { Props } from "./types.ts";
import styles from "./styles.module.scss";

function Header(props: Props) {
  return (
    <div className={styles.header}>
      <LanguageSelector />
      <h1>{props.title}</h1>
      <Resumes />
    </div>
  );
}

export { Header };
