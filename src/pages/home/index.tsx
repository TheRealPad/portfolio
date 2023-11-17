import styles from "./index.module.scss";
import { Header } from "./header";
import { Description } from "./description";
import { Buttons } from "./buttons";

function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.content}>
        <Buttons />
        <Description />
        <div className={styles.images}>
          <img style={{ width: 200, height: 75 }} src={"/logo/epitech.png"} />
          <img style={{ width: 100, height: 100 }} src={"/logo/sfsu.png"} />
        </div>
      </div>
    </div>
  );
}

export default Home;
