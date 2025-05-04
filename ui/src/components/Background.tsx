import type { Component } from "solid-js";
import styles from "./core/background.module.css";

const Background: Component = () => {
  return (
    <div class={styles.background} aria-hidden="true">
      <div class={`${styles.glowOrb} ${styles["glowOrb--primary"]}`} />
      <div class={`${styles.glowOrb} ${styles["glowOrb--secondary"]}`} />
      <div class={`${styles.glowOrb} ${styles["glowOrb--accent"]}`} />
    </div>
  );
};

export default Background;
