import { useTranslation } from "react-i18next";

import { Header } from "@common/header";
import { Description } from "./description";
import { Buttons } from "./buttons";
import styles from "./styles.module.scss";

function Home() {
  const { t } = useTranslation();

  return (
    <div className={styles.home}>
      <Header title={t("home.header.titleHome")} />
      <div className={styles.content}>
        <Description />
        <Buttons />
        <div className={styles.images}>
          <img style={{ width: 200, height: 75 }} src={"/logo/epitech.png"} />
          <img style={{ width: 100, height: 100 }} src={"/logo/sfsu.png"} />
          <img
            style={{ width: 120, height: 100 }}
            src={"/logo/carrefour.png"}
          />
          <img style={{ width: 180, height: 130 }} src={"/logo/planzone.png"} />
          <img style={{ width: 200, height: 70 }} src={"/logo/augeo.png"} />
        </div>
      </div>
    </div>
  );
}

export default Home;
