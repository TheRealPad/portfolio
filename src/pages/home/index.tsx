import { useNavigate } from "react-router-dom";

import styles from "./index.module.scss";
import { Header } from "./header";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.content}>
        <h1>Photo et présentation rapide de moi même, lien github, linkedin</h1>
        <h1>Lien pour télécharger mes cv</h1>
        <a
          href={"/resume/americanResume.pdf"}
          download="resumePierreAlexandreDelgadoArevalo"
          target="_blank"
        >
          american resume
        </a>
        <a
          href={"/resume/frenchResume.pdf"}
          download="cvPierreAlexandreDelgadoArevalo"
          target="_blank"
        >
          french resume
        </a>
        <button onClick={() => navigate("/me")}>
          Autre page: Description de ce que je recherche, aime en information
        </button>
        <button
          onClick={() => {
            navigate("/projects");
          }}
        >
          Autre page: Projets
        </button>
      </div>
    </div>
  );
}

export default Home;
