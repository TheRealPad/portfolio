import { timelineElements } from "./init.ts";
import { Line } from "./line";
import styles from "./styles.module.scss";

function monthsBetweenDates(startDate: Date, endDate: Date): number {
  const startYear = startDate.getFullYear();
  const startMonth = startDate.getMonth();
  const endYear = endDate.getFullYear();
  const endMonth = endDate.getMonth();

  return (endYear - startYear) * 12 + endMonth - startMonth;
}

function Timeline() {
  const startDate = timelineElements.sort((a, b) => {
    if (a.startDate > b.startDate) return 1;
    if (a.startDate < b.startDate) return -1;
    return 0;
  })[0].startDate;
  const endDate = timelineElements.sort((a, b) => {
    if (a.endDate < b.endDate) return 1;
    if (a.endDate > b.endDate) return -1;
    return 0;
  })[0].endDate;
  const totalMonths = monthsBetweenDates(startDate, endDate);
  const schools = timelineElements.filter((elem) => elem.type === "SCHOOL");
  const works = timelineElements.filter((elem) => elem.type === "WORK");

  return (
      <div className={styles.timeline}>
        <div className={styles.timelineDescription}>
          {timelineElements.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
          }).map((elem, index) => (
              <div key={index} className={styles.description}>
                <div
                    style={{
                      width: "0",
                      height: "0",
                      minWidth: "10px",
                      minHeight: "10px",
                      borderRadius: "24px",
                      backgroundColor: elem.color,
                    }}
                />
                <p>{elem.name}</p>
              </div>
          ))}
        </div>
        <div className={styles.lines}>
          <Line totalMonths={totalMonths} elements={schools} endDate={endDate} />
          <Line totalMonths={totalMonths} elements={works} endDate={endDate} />
        </div>
      </div>
  );
}

export { Timeline };
