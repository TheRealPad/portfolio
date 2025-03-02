import { useTranslation } from "react-i18next";

import { Props } from "./types";
import styles from "./styles.scss";
import { useNavigate } from "react-router-dom";

interface Work {
  title: string;
  startDate: Date;
  endDate?: Date;
  technologies: string[];
  description: string;
}

function Work(props: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const works: Work[] = [
    {
      title: "ChatApp",
      startDate: new Date(),
      technologies: [
        "React TS",
        "Vite",
        "Docker",
        "Redux",
        "Scss",
        "Websocket",
        "Kotlin Spring Boot",
        "MySQL",
      ],
      description:
        "Chat application using web socket to let user add friends and communicated with them in real time",
    },
  ];

  return (
    <div className={styles.work}>
      <div className={styles.projects}>
        {works.map((work, key) => (
          <div className={styles.project} key={key}>
            <p className={styles.title}>{work.title}</p>
            <div className={styles.technologies}>
              {work.technologies.map((technology, technoKey) => (
                <div className={styles.techno} key={technoKey}>
                  <p>{technology}</p>
                </div>
              ))}
            </div>
            <p>{work.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.buttonBox}>
        <div className={styles.button} onClick={() => navigate("/portfolio")}>
          <p>{t("work.back")}</p>
        </div>
      </div>
    </div>
  );
}

export { Work };
