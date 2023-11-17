import { useTranslation } from "react-i18next";

import styles from "./styles.module.scss";

function Description() {
  const { t } = useTranslation();
  const links = [
    { name: "Github", link: "https://github.com/TheRealPad" },
    {
      name: "LinkdIn",
      link: "https://www.linkedin.com/in/pierre-alexandre-delgado-106b81202/",
    },
  ];
  return (
    <div className={styles.description}>
      <p className={styles.content}>{t("home.description")}</p>
      <div className={styles.links}>
        {links.map((link, index) => (
          <div key={index} className={styles.link}>
            <a href={link.link} target="_blank">
              {link.name}
            </a>
            {index !== links.length - 1 && (
              <p className={styles.separator}>-</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export { Description };
