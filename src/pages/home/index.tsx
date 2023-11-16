import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import styles from "./index.module.scss";

function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <h1>{t("title")}</h1>
      <h1>Header, changer de langue, changer de mode (dark/light)</h1>
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
      <h1>timeline école/travail/stage</h1>
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
  );
}

export default Home;
