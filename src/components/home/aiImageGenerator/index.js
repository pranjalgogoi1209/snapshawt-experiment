import React, { useState, useEffect } from "react";
import styles from "./aiImageGenerator.module.css";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import dots from "@/../public/home/aifaceswap/dots.png";
import lineIcon from "@/../public/home/aifaceswap/lineIcon.png";
import roundIcon from "@/../public/home/aifaceswap/roundIcon.png";
import rightIcon from "@/../public/home/aifaceswap/rightIcon.svg";
import animatedIcon01 from "@/../public/home/aiImageGenerator/imgGenerator01.png";
import animatedIcon02 from "@/../public/home/aiImageGenerator/imgGenerator02.png";
import animatedIcon03 from "@/../public/home/aiImageGenerator/imgGenerator03.png";
import aigenerate2 from "@/../public/faceSwap/singleAiFaceSwap/templates/images-02.png";
import aigenerate3 from "@/../public/faceSwap/singleAiFaceSwap/templates/images-03.png";
import aigenerate4 from "@/../public/faceSwap/singleAiFaceSwap/templates/images-04.png";
import aigenerate7 from "@/../public/faceSwap/singleAiFaceSwap/templates/images-07.png";
import aigenerate8 from "@/../public/faceSwap/singleAiFaceSwap/templates/images-08.png";

const list = [aigenerate2, aigenerate3, aigenerate4, aigenerate7, aigenerate8];

const textList = [
  'a girl in train in indian saree in customary aliance',
  'a lady in train in indian saree',
  'a shed ',
  'a bark in train in indian saree',
  'a cats in train in indian saree',
];

export default function AiImageGenerator() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [typingText, setTypingText] = useState('');
  const [typingCompleted, setTypingCompleted] = useState(false);
  const [showBlur, setShowBlur] = useState(false);

  useEffect(() => {
    const currentIndex = typingText.length;
    const currentTarget = textList[currentImageIndex];
    const targetLength = currentTarget.length;

    const timePerCharacter = 3000 / targetLength;

    if (!typingCompleted && currentIndex < targetLength) {
      const timeout = setTimeout(() => {
        setTypingText(currentTarget.substring(0, currentIndex + 1));
      }, timePerCharacter);

      return () => clearTimeout(timeout);
    }
  }, [typingText, typingCompleted, currentImageIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % list.length);
      setTypingText('');
      setTypingCompleted(false);
      setShowBlur(true);

      setTimeout(() => {
        setShowBlur(false);
      }, 3200); 
    }, 10000);
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
              className={`${styles.img} ${showBlur ? styles.blur : ''}`}
            />
          </div>

          {/* search */}
          <div className={styles.search}>
            <p className={styles.prompt}>
              {typingCompleted ? (
                textList[currentImageIndex]
              ) : (
                <>{typingText}</>
              )}
            </p>
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
        <h2>AI Image generator</h2>
        <strong className={`txt2 ${styles.txtStrong}`}>
          Snapshawt makes realistic face transformations a breeze.
        </strong>
        <p className="txt2">
          Our AI expertly harmonizes facial features, lighting, and expressions,
          leaving a lasting impression. It's as simple as a few clicks,
          suitable for beginners and experts, ensuring an amazing experience
          with minimal learning curves.
        </p>
        <button className={`btn3 ${styles.btn}`}>Try Now {'>'}</button>

        {/* right-icont */}
        <div className={styles.rightIcon}>
          <Image src={rightIcon} alt="rightIcon" className={styles.img} />
        </div>
      </div>
    </div>
  );
}
