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
import { TypeAnimation } from "react-type-animation";


import aigenerate2 from "@/../public/faceSwap/singleAiFaceSwap/templates/images-02.png";
import aigenerate3 from "@/../public/faceSwap/singleAiFaceSwap/templates/images-03.png";
import aigenerate4 from "@/../public/faceSwap/singleAiFaceSwap/templates/images-04.png";
import aigenerate7 from "@/../public/faceSwap/singleAiFaceSwap/templates/images-07.png";
import aigenerate8 from "@/../public/faceSwap/singleAiFaceSwap/templates/images-08.png";
import aigenerate10 from "@/../public/faceSwap/singleAiFaceSwap/templates/images-10.png";
import { useState, useEffect } from "react";

const list = [
  aigenerate2, aigenerate3, aigenerate4, aigenerate7, aigenerate8
];

export default function AiImageGenerator() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const updateImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % list.length);
  };

  useEffect(() => {
    const intervalId = setInterval(updateImage, 8200);
    return () => clearInterval(intervalId);
  }, []);

  const currentImage = list[currentImageIndex];


  return (
    <div className={styles.AiImageGenerator}>
      <div className={styles.leftContainer}>
        <div className={styles.mainContainer}>
          {/* main image */}
          <div className={styles.imgContainer}>

            <Image
              src={currentImage}
              alt="ai-face-swap"
              className={styles.img}
            />
          </div>

          {/* search */}
          <div className={styles.search}>
            <p className={styles.prompt}>
              <TypeAnimation
                sequence={[
                  'A girl in train in Indian Atire',
                  5000,
                  'every ceo is don in nature yess',
                  5000,
                  'A girl in train in Indian Atire',
                  5000,
                  'every ceo is don in nature yess',
                  5000,
                  'A girl in train in Indian Atire',
                  5000,
                ]}
                wrapper="span"
                speed={10}
                omitDeletionAnimation="true"
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
              /></p>
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
