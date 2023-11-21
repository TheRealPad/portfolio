import styles from "./index.module.scss";
import { Props } from "./types.ts";

function TimelineElement({ element }: Props) {
  return <div className={styles.project}>{element.name}</div>;
}

export default TimelineElement;
