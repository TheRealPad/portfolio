import { ReactNode } from "react";

import { ListSelect } from "@common/listSelect";
import { LinkedinIcon } from "@common/icons/linkedinIcon";
import { GitlabIcon } from "@common/icons/gitlabIcon";
import { GithubIcon } from "@common/icons/githubIcon";
import { LeetcodeIcon } from "@common/icons/leetcodeIcon";
import { Props } from "./types";
import styles from "./styles.scss";

function Accounts(props: Props) {
  const accounts: { icon: ReactNode; link: string; name: string }[] = [
    {
      icon: <GithubIcon className={styles.icon} />,
      link: "https://github.com/TheRealPad",
      name: "github.com/TheRealPad",
    },
    {
      icon: <GitlabIcon className={styles.icon} />,
      link: "https://gitlab.com/delgadopierrealexandre",
      name: "gitlab.com/delgadopierrealexandre",
    },
    {
      icon: <LinkedinIcon className={styles.icon} />,
      link: "https://www.linkedin.com/in/pierre-alexandre-delgado/",
      name: "Pierre-Alexandre Delgado",
    },
    {
      icon: <LeetcodeIcon className={styles.icon} />,
      link: "https://leetcode.com/u/delgadopierrealexandre/",
      name: "delgadopierrealexandre",
    },
  ];

  return (
    <div className={styles.accounts}>
      <ListSelect>
        {() => ({
          input: (
            <div>
              <h1>Pierre-Alexandre Delgado</h1>
            </div>
          ),
          list: (
            <div className={styles.list}>
              {accounts.map((account, key) => (
                <div className={styles.account} key={key}>
                  {account.icon}
                  <a href={account.link} target="_blank">
                    {account.name}
                  </a>
                </div>
              ))}
            </div>
          ),
        })}
      </ListSelect>
    </div>
  );
}

export { Accounts };
