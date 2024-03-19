import React from "react";
import styles from "./enanceImage.module.css";
import Image from "next/image";
import icon from "@/../public/home/enhanceimage/icon.png";
import img from "@/../public/home/enhanceimage/img.png";

const EnhanceImage = () => {
  return (
    <div className={styles.EnhanceImage}>
      <div className={styles.leftContainer}>
        <p className="cursiveFont">New Age tech</p>
        <h2>Enhance images in a flash</h2>
        <p className="txt2">
          Snapshawt makes realistic face transformations a breeze. Our AI
          expertly harmonizes facial features, lighting, and expressions,
          leaving a lasting impression. It&apos;s as simple as a few clicks,
          suitable for beginners and experts, ensuring an amazing experience
          with minimal learning curves.
        </p>
        <button className={`btn2 ${styles.btn}`}>Try Now {">"}</button>
      </div>

      <div className={styles.rightContainer}>
        {/* main image */}
        <div className={styles.imgContainer}>
          <Image src={img} alt="enhance-image" className={styles.img} />
        </div>

        {/* icon */}
        <div className={styles.iconContainer}>
          <Image src={icon} alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default EnhanceImage;
