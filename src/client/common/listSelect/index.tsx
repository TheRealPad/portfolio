import React from "react";

import { Props } from "./types";
import styles from "./styles.scss";

function ListSelect({ children }: Props) {
  const { input, list } = children({
    input: <div>Default Input</div>,
    list: <div>Default List</div>,
  });

  const [show, setShow] = React.useState(false);

  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div className={styles.input} onClick={() => setShow(!show)}>
        {input}
      </div>
      {show && <div className={styles.list}>{list}</div>}
    </div>
  );
}

export { ListSelect };
