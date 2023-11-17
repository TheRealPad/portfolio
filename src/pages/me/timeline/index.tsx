import { TimelineElement } from "./types.ts";
import styles from "./styles.module.scss";

function Timeline() {
  const timelineElements: [TimelineElement] = [
    {
      name: "Epitech",
      description: "Best school in the world",
      type: "SCHOOL",
      startDate: new Date("2020-10-1"),
      endDate: new Date("2025-05-1"),
    },
  ];

  return (
    <div className={styles.timeline}>
      <h1>Voici ma timeline</h1>
    </div>
  );
}

export { Timeline };
