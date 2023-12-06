import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Header } from "@common/header";
import { HomeButton } from "@common/homeButton";
import { Filter } from "./filter";
import { projects } from "./init.ts";
import styles from "./styles.module.scss";
import { Project } from "./project";

function Projects() {
  const { t } = useTranslation();
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  return (
    <div className={styles.projects}>
      <Header title={t("home.header.titleProject")} />
      <div className={styles.homeButton}>
        <HomeButton />
      </div>
      <div className={styles.content}>
        <Filter
          selectedKeywords={selectedKeywords}
          setSelectedKeywords={setSelectedKeywords}
        />
        <div className={styles.list}>
          {projects
            .filter((project) =>
              selectedKeywords.length
                ? project.keywords.some((elem) =>
                    selectedKeywords.includes(elem)
                  )
                : true
            )
            .map((project, index) => (
              <Project key={index} project={project} />
            ))}
        </div>
      </div>
    </div>
  );
}

export { Projects };
