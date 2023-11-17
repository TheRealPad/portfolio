import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Header } from "@common/header";
import styles from "./index.module.scss";
import { Description } from "./description";
import { Timeline } from "./timeline";

function Me() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className={styles.me}>
      <Header title={t("home.header.titleMe")} />
      <div className={styles.content}>
        <button onClick={() => navigate("/")}>Home</button>
        <Description />
        <Timeline />
      </div>
    </div>
  );
}

export { Me };
