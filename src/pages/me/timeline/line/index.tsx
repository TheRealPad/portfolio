import { useWrapperContext } from "@app/wrapper/wrapper.tsx";
import { UseCases } from "@app/wrapper/type.ts";
import { Props } from "./types.ts";
import styles from "./styles.module.scss";

function addMonthsToDate(originalDate: Date, monthsToAdd: number): Date {
  const newDate = new Date(originalDate);
  const currentMonth = newDate.getMonth();

  newDate.setMonth(currentMonth - monthsToAdd);
  return newDate;
}

function Line({ totalMonths, elements, endDate }: Props) {
  const { pushView } = useWrapperContext();
  return (
    <div className={styles.line}>
      {Array.from({ length: totalMonths }, (_, index) => (
        <div key={index} className={styles.lineElement}>
          <div>
            {elements.map((elem, pos) => (
              <div>
                {elem.startDate <= addMonthsToDate(endDate, index) &&
                  elem.endDate >= addMonthsToDate(endDate, index) && (
                    <div
                      onClick={() =>
                        pushView({
                          useCase: UseCases.TimelineElement,
                          data: { element: elem },
                        })
                      }
                      style={{
                        backgroundColor: elem.color,
                        width: "1rem",
                        height: "1rem",
                        marginTop: pos + "rem",
                        cursor: "pointer",
                      }}
                    />
                  )}
              </div>
            ))}
          </div>
        </div>
      )).reverse()}
    </div>
  );
}

export { Line };
