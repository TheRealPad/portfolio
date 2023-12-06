import { useTranslation } from "react-i18next";

import { Header } from "@common/header";
import { HomeButton } from "@common/homeButton";
import { Description } from "./description";
import { Timeline } from "./timeline";
import styles from "./styles.module.scss";

function Me() {
  const { t } = useTranslation();

  return (
    <div className={styles.me}>
      <Header title={t("home.header.titleMe")} />
      <div className={styles.content}>
        <HomeButton />
        <Description />
        <Timeline />
      </div>
    </div>
  );
}

export { Me };
