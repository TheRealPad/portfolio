import { useState } from "react";
import classNames from "classnames";

import { useTranslation } from "react-i18next";
import { Props } from "./types.ts";
import styles from "./styles.module.scss";

function Project(props: Props) {
  const { t } = useTranslation();
  const [displayAll, setDisplayAll] = useState<boolean>(false);

  return (
    <div
      className={classNames(styles.project, {
        [styles.displayAll]: displayAll,
      })}
      onClick={() => setDisplayAll(!displayAll)}
    >
      <p>{props.project.title}</p>
      <p>{t(props.project.description)}</p>
      {props.project.isTeamProject && props.project.groupSize && (
        <p>Team size: {props.project.groupSize}</p>
      )}
      {props.project.link && (
        <a href={props.project.link} target="_blank">
          access project here
        </a>
      )}
      {props.project.github && (
        <a className={styles.link} href={props.project.github} target="_blank">
          github
        </a>
      )}
      <div className={styles.keywords}>
        {props.project.keywords.map((keyword, index) => (
          <div key={index} className={styles.keyword}>
            <p>{keyword}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { Project };
