import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello, I'm Ernest</h1>
        <p className={styles.description}>I'm a Software Engineering Student, interested in Front-end and Mobile Development. Reach out if you'd like to learn more!</p>
        <a href="mailto:ernestiyoguevara@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
