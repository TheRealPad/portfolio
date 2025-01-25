import { useTranslation } from "react-i18next";

import { Props } from "./types";
import styles from "./styles.scss";
import { SendIcon } from "@common/icons/sendIcon";
import React from "react";
import classNames from "classnames";

function ContactButton(props: Props) {
  const { t } = useTranslation();
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div
      className={classNames(styles.contactButton, {
        [styles.active]: isActive,
      })}
      onClick={() => setIsActive(!isActive)}
    >
      <div className={styles.main}>
        <div className={styles.content}>
          <p>{t("home.redirections.contact")}</p>
          <SendIcon className={styles.icon} />
        </div>
      </div>
    </div>
  );
}

export { ContactButton };
