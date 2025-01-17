import React from "react";

import { Props } from "./types";
import styles from "./styles.scss";

function ListSelect({ className, children }: Props) {
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
    <div ref={containerRef} className={className}>
      <div className={styles.input} onClick={() => setShow(!show)}>
        {input}
        {show && <div className={styles.list}>{list}</div>}
      </div>
    </div>
  );
}

export { ListSelect };
