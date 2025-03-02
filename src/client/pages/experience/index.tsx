import { useTranslation } from "react-i18next";

import { Props } from "./types";
import styles from "./styles.scss";
import { useNavigate } from "react-router-dom";

interface Project {
  title: string;
  technologies: string[];
  description: string;
  link?: string;
}

function Experience(props: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const projects: Project[] = [
    {
      title: "ChatApp",
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
      link: "https://github.com/TheRealPad/chatApp",
    },
    {
      title: "Todolist micro service",
      technologies: [
        "React TS",
        "Vite",
        "Docker",
        "Redux",
        "Scss",
        "Java Spring Boot",
        "MySQL",
        "Pipeline",
      ],
      description:
        "Todo list application with a micro service architecture and a gateway api to connect all services",
      link: "https://gitlab.com/todolist-micro-services",
    },
    {
      title: "Epitech - Blockchain",
      technologies: ["Python", "Flask", "XRP Ledger", "Docker"],
      description:
        "Blockchain application that let users to mint an NFT of a Pokemon card and have access to a market place to handle their cards",
      link: "https://github.com/TheRealPad/bockchain-epitech",
    },
    {
      title: "Golang API generator",
      technologies: ["Golang", "Docker", "MongoDB"],
      description:
        "An application that from a json file, generate a CRUD api and save the data on MongoDB",
      link: "https://github.com/TheRealPad/golangApiGenerator",
    },
    {
      title: "OWL",
      technologies: ["Kotlin", "Jetpack compose", "React native", "Redux"],
      description:
        "My EIP project, I created an app for Wear OS that get the heart rate of the user, send it to our api and show an alarm if needed. I made the mobile app to to handle the data from the watch",
    },
  ];

  return (
    <div className={styles.experience}>
      <h2 className={styles.pageTitle}>
        You can find the source code and more projects on my Github and Gitlab
      </h2>
      <div className={styles.projects}>
        {projects.map((project, key) => (
          <div className={styles.project} key={key}>
            <p className={styles.title}>{project.title}</p>
            <div className={styles.technologies}>
              {project.technologies.map((technology, technoKey) => (
                <div className={styles.techno} key={technoKey}>
                  <p>{technology}</p>
                </div>
              ))}
            </div>
            <p>{project.description}</p>
            {project.link && (
              <a
                className={styles.projectLink}
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                aller sur le projet
              </a>
            )}
          </div>
        ))}
      </div>
      <div className={styles.buttonBox}>
        <div className={styles.button} onClick={() => navigate("/portfolio")}>
          <p>{t("expertise.back")}</p>
        </div>
      </div>
    </div>
  );
}

export { Experience };
