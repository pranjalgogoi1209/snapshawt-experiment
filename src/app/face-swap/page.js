import React from "react";
import styles from "./faceSwap.module.css";
import Link from "next/link";
import Image from "next/image";
import singleFaceSwap from "@/../public/faceSwap/singleFaceSwap.png";
import groupFaceSwap from "@/../public/faceSwap/groupFaceSwap.jpg";

export default function FaceSwap() {
  return (
    <div className={styles.FaceSwap}>
      <h1 className={`grd-txt ${styles.title}`}>Face Swap Online</h1>

      <div className={styles.mainContainer}>
        {/* single Ai Face Swap */}
        <div className={styles.container1}>
          <div className={styles.imgContainer}>
            <Image
              src={singleFaceSwap}
              alt="singleFaceSwap"
              className={styles.img}
            />
          </div>
          <div className={styles.faceSwapContent}>
            <p className={styles.title}>Single Ai Face Swap</p>
            <Link
              href={"/face-swap/single-ai-face-swap"}
              className={styles.link}
            >
              <button className={`btn2 ${styles.btn}`}>Swap Now</button>
            </Link>
          </div>
        </div>

        {/* group Ai Face Swap */}
        <div className={styles.container1}>
          <div className={styles.imgContainer}>
            <Image
              src={groupFaceSwap}
              alt="singleFaceSwap"
              className={styles.img}
            />
          </div>
          <div className={styles.faceSwapContent}>
            <p className={styles.title}>Group Ai Face Swap</p>
            <Link
              href={"/face-swap/group-ai-face-swap"}
              className={styles.link}
            >
              <button className={`btn2 ${styles.btn}`}>Swap Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
