import { useTranslation } from "react-i18next";

import { Props } from "./types";
import styles from "./styles.scss";
import { SendIcon } from "@common/icons/sendIcon";
import React from "react";
import classNames from "classnames";
import { LinkedinIcon } from "@common/icons/linkedinIcon";
import { LeetcodeIcon } from "@common/icons/leetcodeIcon";
import { GitlabIcon } from "@common/icons/gitlabIcon";
import { GithubIcon } from "@common/icons/githubIcon";

function ContactButton(props: Props) {
  const { t } = useTranslation();
  const [isActive, setIsActive] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={classNames(styles.contactButton, {
        [styles.active]: isActive,
      })}
      onClick={() => setIsActive(!isActive)}
    >
      <div className={styles.main}>
        {isActive && (
          <div
            className={styles.contentOpen}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.directLink}>
              <p>+33 762539732</p>
              <a
                href="mailto:delgadopierrealexandre@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                delgadopierrealexandre@gmail.com
              </a>
            </div>
            <div className={styles.link}>
              <GithubIcon className={styles.icon} />
              <a
                href="https://github.com/TheRealPad"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/TheRealPad
              </a>
            </div>
            <div className={styles.link}>
              <GitlabIcon className={styles.icon} />
              <a
                href="https://gitlab.com/delgadopierrealexandre"
                target="_blank"
                rel="noreferrer"
              >
                https://gitlab.com/delgadopierrealexandre
              </a>
            </div>
            <div className={styles.link}>
              <LeetcodeIcon className={styles.icon} />
              <a
                href="https://leetcode.com/u/delgadopierrealexandre"
                target="_blank"
                rel="noreferrer"
              >
                https://leetcode.com/u/delgadopierrealexandre
              </a>
            </div>
            <div className={styles.link}>
              <LinkedinIcon className={styles.icon} />
              <a
                href="https://www.linkedin.com/in/pierre-alexandre-delgado"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/pierre-alexandre-delgado
              </a>
            </div>
          </div>
        )}
        <div className={styles.content}>
          <p>{t("home.redirections.contact")}</p>
          <SendIcon className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export { ContactButton };
