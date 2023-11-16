import { useNavigate } from "react-router-dom";

import styles from "./index.module.scss";

function Projects() {
  const navigate = useNavigate();

  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <h2>
        Présente mes proejts, dit pourquoi j'ai fais ca, quel est mon objectif,
        lien github, lien vers le projet si possible et photo
      </h2>
      <li>R-TYPE</li>
      <li>AREA</li>
      <li>Mes todolist</li>
      <li>Handwritten digits</li>
      <li>Pokemon compagnion</li>
      <button onClick={() => navigate("/")}>home</button>
    </div>
  );
}

export { Projects };
