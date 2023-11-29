import { useTranslation } from "react-i18next";

import { projects } from "../init.ts";
import { Props } from "./types.ts";
import styles from "./styles.module.scss";
import classNames from "classnames";

function Filter({ selectedKeywords, setSelectedKeywords }: Props) {
  const { t } = useTranslation();
  const keywords = [
    ...new Set(projects.map((project) => project.keywords).flat()),
  ];

  return (
    <div className={styles.filter}>
      <div className={styles.keywords}>
        {keywords.map((keyword, index) => (
          <div
            key={index}
            className={classNames(styles.keyword, {
              [styles.selected]: selectedKeywords.includes(keyword),
            })}
            onClick={() => {
              setSelectedKeywords(
                selectedKeywords.includes(keyword)
                  ? selectedKeywords.filter((elem) => elem !== keyword)
                  : [...selectedKeywords, keyword]
              );
            }}
          >
            <p>{keyword}</p>
          </div>
        ))}
      </div>
      <div
        className={styles.resetFilter}
        onClick={() => setSelectedKeywords([])}
      >
        <p>{t("projects.resetFilter")}</p>
      </div>
    </div>
  );
}

export { Filter };
