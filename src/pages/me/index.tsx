import { useNavigate } from "react-router-dom";

import styles from "./index.module.scss";

function Me() {
  const navigate = useNavigate();

  return (
    <div className={styles.me}>
      <h1>ME</h1>
      <h2>timeline école/travail/stage</h2>
      <h2>
        Me présente, photo ce que j'aime en informatiquen plus sur mon parcours
      </h2>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export { Me };
