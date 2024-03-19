import React from "react";
import styles from "./aiImageGenerator.module.css";
import Image from "next/image";
import imgGeneratorImg01 from "@/../public/home/hero/imgGeneratorImg01.png";
import dots from "@/../public/home/aifaceswap/dots.png";
import lineIcon from "@/../public/home/aifaceswap/lineIcon.png";
import roundIcon from "@/../public/home/aifaceswap/roundIcon.png";
import rightIcon from "@/../public/home/aifaceswap/rightIcon.svg";
import animatedIcon01 from "@/../public/home/aiImageGenerator/imgGenerator01.png";
import animatedIcon02 from "@/../public/home/aiImageGenerator/imgGenerator02.png";
import animatedIcon03 from "@/../public/home/aiImageGenerator/imgGenerator03.png";
import { IoSearchOutline } from "react-icons/io5";

export default function AiImageGenerator() {
  return (
    <div className={styles.AiImageGenerator}>
      <div className={styles.leftContainer}>
        <div className={styles.mainContainer}>
          {/* main image */}
          <div className={styles.imgContainer}>
            <Image
              src={imgGeneratorImg01}
              alt="ai-face-swap"
              className={styles.img}
            />
          </div>

          {/* search */}
          <div className={styles.search}>
            <p className={styles.prompt}>A girl in train in Indian attire</p>
            <IoSearchOutline className={styles.svg} />
          </div>

          {/* dots-icon */}
          <div className={styles.dotsImgContainer}>
            <Image src={dots} alt="dots" className={styles.img} />
          </div>

          {/* lines-img */}
          <div className={styles.linesImgContainer}>
            <Image src={lineIcon} alt="line-icon" />
          </div>

          {/* round-icon */}
          <div className={styles.roundIcon}>
            <Image src={roundIcon} alt="roundIcon" className={styles.img} />
          </div>

          {/* animated-icon-01 */}
          <div className={styles.animatedIcon01}>
            <Image
              src={animatedIcon01}
              alt="animated-icon-01"
              className={styles.img}
            />
          </div>

          {/* animated-icon-02 */}
          <div className={styles.animatedIcon02}>
            <Image
              src={animatedIcon02}
              alt="animated-icon-02"
              className={styles.img}
            />
          </div>

          {/* animated-icon-03 */}
          <div className={styles.animatedIcon03}>
            <Image
              src={animatedIcon03}
              alt="animated-icon-03"
              className={styles.img}
            />
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <p className="cursiveFont">#Snapshot photos</p>
        <h2>AI Image genrator</h2>
        <strong className={`txt2 ${styles.txtStrong}`}>
          Snapshawt makes realistic face transformations a breeze.
        </strong>
        <p className="txt2">
          Our AI expertly harmonizes facial features, lighting, and expressions,
          leaving a lasting impression. It&apos;s as simple as a few clicks,
          suitable for beginners and experts, ensuring an amazing experience
          with minimal learning curves.
        </p>
        <button className={`btn3 ${styles.btn}`}>Try Now {">"}</button>

        {/* right-icont */}
        <div className={styles.rightIcon}>
          <Image src={rightIcon} alt="rightIcon" className={styles.img} />
        </div>
      </div>
    </div>
  );
}
