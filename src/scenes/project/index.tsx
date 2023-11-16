import styles from "./index.module.scss";
import { Props } from "./types.ts";

function Project(props: Props) {
  return <div className={styles.project}>{props.project.name}</div>;
}

export default Project;
