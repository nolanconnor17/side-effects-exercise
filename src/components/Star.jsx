import { useEffect, useRef } from "react";
import styles from "./Star.module.css";

export default function Star({ id, x, y, destroyStar }) {
  const starRef = useRef(null);

  useEffect(() => {
    starRef.current?.focus();
  }, []);

  return (
    <div
      ref={starRef}
      tabIndex="0"
      className={styles.star}
      onClick={() => destroyStar(id)}
      style={{
        left: x + "px",
        top: y + "px"
      }}
    >
      ★
    </div>
  );
}