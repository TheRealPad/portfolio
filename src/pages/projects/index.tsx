import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Header } from "@common/header";
import styles from "./index.module.scss";

function Projects() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={styles.projects}>
      <Header title={t("home.header.titleProject")} />
      <div className={styles.content}>
        <h1>Projects</h1>
        <h2>
          Présente mes proejts, dit pourquoi j'ai fais ca, quel est mon
          objectif, lien github, lien vers le projet si possible et photo
        </h2>
        <li>R-TYPE</li>
        <li>AREA</li>
        <li>Mes todolist</li>
        <li>Handwritten digits</li>
        <li>Pokemon compagnion</li>
        <li>Database project</li>
        <li>Software engineering project</li>
        <button onClick={() => navigate("/")}>home</button>
      </div>
    </div>
  );
}

export { Projects };
