import React, { useState, useEffect } from "react";
import styles from "./imgGeneratorHero.module.css";
import Link from "next/link";
import Image from "next/image";

import { IoSearchOutline } from "react-icons/io5";

import aigenerate2 from "@/../public/faceSwap/singleAiFaceSwap/templates/images-02.png";
import aigenerate3 from "@/../public/faceSwap/singleAiFaceSwap/templates/images-03.png";
import aigenerate4 from "@/../public/faceSwap/singleAiFaceSwap/templates/images-04.png";
import aigenerate7 from "@/../public/faceSwap/singleAiFaceSwap/templates/images-07.png";
import aigenerate8 from "@/../public/faceSwap/singleAiFaceSwap/templates/images-08.png";

import faceSwapImg01 from "./../../../../../public/home/hero/faceSwapImg01.png";
import faceSwapImg02 from "./../../../../../public/home/hero/faceSwapImg02.png";
import imgInhancerImg01 from "./../../../../../public/home/hero/imgInhancerImg01.png";
import imgGeneratorImg01 from "./../../../../../public/home/hero/imgGeneratorImg01.png";

const list = [
  aigenerate2,
  aigenerate3,
  aigenerate4,
  aigenerate7,
  aigenerate8,
  aigenerate8,
];

const textList = [
  "a superman in train in indian saree",
  "a boy in train in indian saree",
  "a fighter in train in indian saree",
  "a girl in train in indian saree",
  "a lady in train in indian saree",
  "a lady in train",
];
export default function ImgGeneratorHero() {
  const imageGenerator = [
    {
      img: imgGeneratorImg01,
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [typingText, setTypingText] = useState("");
  const [typingCompleted, setTypingCompleted] = useState(false);
  const [showBlur, setShowBlur] = useState(true);

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
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % list.length);
      setTypingText("");
      setTypingCompleted(false);
      setShowBlur(true);

      setTimeout(() => {
        setShowBlur(false);
      }, 3500);
    }, 6000);
    return () => clearInterval(intervalId);
  }, []);

  const currentImage = list[currentImageIndex];

  return (
    <div className={styles.faceSwap}>
      <div className={styles.imgContainer}>
        <Image
          src={currentImage}
          alt="ai-face-swap"
          className={`${styles.img} ${showBlur ? styles.blur : ""}`}
        />
      </div>
      <div className={styles.faceSwapContent}>
        <div className={styles.top}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>AI Image generator</p>
            <div className={styles.free}>
              {/* <Image src={free} alt="face-swap" /> */}
            </div>
          </div>
          <p className={styles.description}>
            Turn your ideas into reality and generate stunning visual content.
          </p>
        </div>
        <div className={styles.bottom}>
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
          <Link href={"/"} className={styles.link}>
            <button className={`btn1 ${styles.btn}`}>Try it out</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
