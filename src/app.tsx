import styles from "./app.module.scss";
import {useTranslation} from "react-i18next";

function App() {
    const {t} = useTranslation();

  return (
    <div className={styles.root}>
      <h1>{t("title")}</h1>
    </div>
  );
}

export default App;
