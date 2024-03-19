import React from "react";
import styles from "./selectFaceSwap.module.css";
import Image from "next/image";

export default function SelectFaceSwap() {
  /* const data = [
    {
      templateFace01,
    },
  ]; */

  return (
    <div className={styles.SelectFaceSwap}>
      <p className={`grd-txt ${styles.title}`}>Select Face to Swap</p>
      <div className={styles.selectFace}>
        <div className={styles.templateFace}>
          {/* <Image src={"/"} alt="template-face" /> */}
        </div>

        <div className={styles.swapIcon}>
          {/* <Image src={"/"} alt="swap-icon" /> */}
        </div>

        <div className={styles.photoFace}>
          {/* <Image src={"/"} alt="photo/webcam-face" /> */}
        </div>
      </div>
    </div>
  );
}
