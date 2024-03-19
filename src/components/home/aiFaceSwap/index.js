import React from "react";
import styles from "./aiFaceSwap.module.css";
import Image from "next/image";
import faceSwapImg01 from "@/../public/home/hero/faceSwapImg01.png";
import dots from "@/../public/home/aifaceswap/dots.png";
import lineIcon from "@/../public/home/aifaceswap/lineIcon.png";
import roundIcon from "@/../public/home/aifaceswap/roundIcon.png";
import rightIcon from "@/../public/home/aifaceswap/rightIcon.svg";

const AiFaceSwap = () => {
  return (
    <div className={styles.AiFaceSwap}>
      <div className={styles.leftContainer}>
        <div className={styles.mainContainer}>
          {/* main image */}
          <div className={styles.imgContainer}>
            <Image
              src={faceSwapImg01}
              alt="ai-face-swap"
              className={styles.img}
            />
          </div>

          {/* dots-icon */}
          <div className={styles.dotsImgContainer}>
            <Image src={dots} alt="dots" className={styles.img} />
          </div>

          {/* one-click-magic */}
          <div className={styles.oneClickMagic}>ONE CLICK MAGIC</div>

          {/* lines-img */}
          <div className={styles.linesImgContainer}>
            <Image src={lineIcon} alt="line-icon" />
          </div>

          {/* round-icon */}
          <div className={styles.roundIcon}>
            <Image src={roundIcon} alt="roundIcon" className={styles.img} />
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <p className="cursiveFont">#Snapshot photos</p>
        <h2>AI Face Swap</h2>
        <strong className={`txt2 ${styles.txtStrong}`}>
          Snapshawt makes realistic face transformations a breeze.
        </strong>
        <p className="txt2">
          Our AI expertly harmonizes facial features, lighting, and expressions,
          leaving a lasting impression. It&apos;s as simple as a few clicks,
          suitable for beginners and experts, ensuring an amazing experience
          with minimal learning curves.
        </p>
        <button className={`btn3 ${styles.btn}`}>Know More {">"}</button>

        {/* right-icont */}
        <div className={styles.rightIcon}>
          <Image src={rightIcon} alt="rightIcon" className={styles.img} />
        </div>
      </div>
    </div>
  );
};

export default AiFaceSwap;
