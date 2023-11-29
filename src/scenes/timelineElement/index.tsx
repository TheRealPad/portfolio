import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";
import { Props } from "./types.ts";

function TimelineElement({ element }: Props) {
  const { t } = useTranslation();

  return (
    <div className={styles.timelineElement}>
      <p className={styles.title}>{element.name}</p>
      <p className={styles.description}>{t(element.description)}</p>
      <div className={styles.dates}>
        <p>{element.startDate.toDateString()}</p>
        <p>{element.endDate.toDateString()}</p>
      </div>
    </div>
  );
}

export default TimelineElement;
