import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Props } from "./types";
import styles from "./styles.scss";

function Links(props: Props) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const pages: { path: string; name: string }[] = [
    { name: "home", path: "/portfolio" },
    { name: "contact", path: "/portfolio/contact" },
    { name: "work", path: "/portfolio/work" },
    { name: "experience", path: "/portfolio/experience" },
    { name: "expertise", path: "/portfolio/expertise" },
  ];

  return (
    <div className={props.className}>
      {pages.map((page, key) => (
        <div
          key={key}
          className={styles.link}
          onClick={() => navigate(page.path)}
        >
          <p className={styles.text}>0{key}</p>
          <p className={styles.text}>// {t(`header.${page.name}`)}</p>
          <div className={styles.underline} />
        </div>
      ))}
    </div>
  );
}

export { Links };
