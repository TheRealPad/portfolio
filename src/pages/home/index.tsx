import { useTranslation } from "react-i18next";

import { useWrapperContext } from "@app/wrapper/wrapper.tsx";
import { UseCases } from "@app/wrapper/type.ts";
import styles from "./index.module.scss";

function Home() {
  const { t } = useTranslation();
  const { pushView } = useWrapperContext();

  return (
    <div className={styles.home}>
      <h1>{t("title")}</h1>
      <button
        onClick={() => {
          pushView({
            data: { project: { name: "T'es moche" } },
            useCase: UseCases.Project,
          });
        }}
      >
        click ici bg
      </button>
    </div>
  );
}

export default Home;
