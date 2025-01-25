import { useNavigate } from "react-router-dom";

import { ExpertiseButton } from "./expertiseButton";
import { WorkButton } from "./workButton";
import { ExperienceButton } from "./experienceButton";
import { ContactButton } from "./contactButton";
import { Props } from "./types";
import styles from "./styles.scss";

function Body(props: Props) {
  const navigate = useNavigate();

  return (
    <div className={styles.body}>
      <div className={styles.left}>
        <div
          className={styles.container}
          onClick={() => navigate("/portfolio/expertise")}
        >
          <ExpertiseButton />
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div
            className={styles.container}
            onClick={() => navigate("/portfolio/work")}
          >
            <WorkButton />
          </div>
          <div
            className={styles.container}
            onClick={() => navigate("/portfolio/experience")}
          >
            <ExperienceButton />
          </div>
        </div>
        <div className={styles.bottom}>
          <div
            className={styles.container}
            // onClick={() => navigate("/portfolio/contact")}
          >
            <ContactButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Body };
