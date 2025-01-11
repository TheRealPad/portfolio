import { Props } from "./types";
import styles from "./styles.scss";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@components/themeToggle";
import { updateLanguage } from "@app/translations/utils";
import { Language } from "@app/translations/languages";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Header(props: Props) {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <div className={styles.name}>
        <h1>TheRealPad</h1>
      </div>
      <div className={styles.links}>
        <div className={styles.link} onClick={() => navigate("/portfolio")}>
          <p className={styles.text}>00</p>
          <p className={styles.text}>// {t("header.home")}</p>
          <div className={styles.underline} />
        </div>
        <div
          className={styles.link}
          onClick={() => navigate("/portfolio/contact")}
        >
          <p className={styles.text}>01</p>
          <p className={styles.text}>// {t("header.contact")}</p>
          <div className={styles.underline} />
        </div>
        <div
          className={styles.link}
          onClick={() => navigate("/portfolio/work")}
        >
          <p className={styles.text}>02</p>
          <p className={styles.text}>// {t("header.work")}</p>
          <div className={styles.underline} />
        </div>
        <div
          className={styles.link}
          onClick={() => navigate("/portfolio/experience")}
        >
          <p className={styles.text}>03</p>
          <p className={styles.text}>// {t("header.experience")}</p>
          <div className={styles.underline} />
        </div>
        <div
          className={styles.link}
          onClick={() => navigate("/portfolio/expertise")}
        >
          <p className={styles.text}>04</p>
          <p className={styles.text}>// {t("header.expertise")}</p>
          <div className={styles.underline} />
        </div>
      </div>
      <div className={styles.settings}>
        <button onClick={() => updateLanguage(Language.EN)}>English</button>
        <button onClick={() => updateLanguage(Language.FR)}>Français</button>
        <ThemeToggle />
      </div>
    </header>
  );
}

export { Header };
