import React from "react";
import styles from "./aidriven.module.css";
import Image from "next/image";
import img01 from "@/../public/home/hero/img01.png";
import img02 from "@/../public/home/hero/img02.png";
import img03 from "@/../public/home/hero/img03.png";
import img04 from "@/../public/home/hero/img04.png";
import img05 from "@/../public/home/hero/img05.png";

const AiDriven = () => {
  return (
    <div className={styles.AiDriven}>
      {/* left container */}
      <div className={styles.leftContainer}>
        <p className="cursiveFont">#Snapshot photos</p>
        <h2>Ai-Driven Engagement</h2>
        <p className="txt2">
          Empower your audience with immersive, real-time content experiences!
          Captivate and engage both in-person and online with dynamic displays
          that seamlessly aggregate, transform, & spotlight user generated
          content, igniting social participation like never before.
        </p>
        <button className={`btn2 ${styles.btn}`}>Try Now {">"}</button>
      </div>

      {/* right container */}
      <div className={styles.rightContainer}>
        <div className={styles.first}>
          <div className={`${styles.imgContainer} ${styles.office}`}>
            <Image src={img01} alt="img01" className={styles.img} />
          </div>
          <div className={`${styles.imgContainer} ${styles.antman}`}>
            <Image src={img02} alt="img02" className={styles.img} />
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.iconContainer}>
            <Image src={img03} alt="img03" />
          </div>
          <div className={`${styles.imgContainer} ${styles.woman}`}>
            <Image src={img04} alt="img04" className={styles.img} />
          </div>
          <div className={styles.avengerContainer}>
            <Image src={img05} alt="img05" className={styles.img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiDriven;
