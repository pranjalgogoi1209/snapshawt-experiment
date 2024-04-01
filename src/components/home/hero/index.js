import React, { useState, useEffect } from "react";
import styles from "./hero.module.css";

import FaceSwapHero from "./faceSwapHero";
import ImgInhancerHero from "./imgInhancerHero";
import ImgGeneratorHero from "./imgGeneratorHero";
import AiDriven from "./aidriven";

export default function Hero() {
  return (
    <div className={styles.Hero}>
      {/* bg */}
      <div className={styles.bgContainer}>
        <div className={`${styles.bgOne} ${styles.bg}`}></div>
        <div className={`${styles.bgTwo} ${styles.bg}`}></div>
      </div>

      {/* content */}
      <div className={styles.contentContainer}>
        <div className={styles.containerOne}>
          <h1 className={"grd-txt"}>Ai Face Swap Online</h1>
          <p className="txt1">
            Experience Seamless Face Swapping Online with us! <br />
            Turn Your Photos into Fun Creations Instantly!
          </p>
          <div className={styles.cards}>
            {/* face swap */}
            <FaceSwapHero />

            {/* ai image enhancer */}
            <ImgInhancerHero />

            {/* ai image generator */}
            <ImgGeneratorHero />
          </div>
        </div>
        <div className={styles.containerTwo}>
          <AiDriven />
        </div>
      </div>
    </div>
  );
}
