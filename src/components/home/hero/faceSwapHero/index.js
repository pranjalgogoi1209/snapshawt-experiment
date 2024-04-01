import React, { useState } from "react";
import styles from "./faceSwapHero.module.css";
import Image from "next/image";
import Link from "next/link";

import free from "./../../../../../public/home/hero/free.png";
import faceSwapImg01 from "./../../../../../public/home/hero/faceSwapImg01.png";
import faceSwapImg02 from "./../../../../../public/home/hero/faceSwapImg02.png";
export default function FaceSwapHero() {
  const [faceSwapIndex, setFaceSwapIndex] = useState();
  const [faceSwapImg, setFaceSwapImg] = useState(faceSwapImg01);

  const faceSwap = [
    {
      img: faceSwapImg01,
      name: "single",
    },
    {
      img: faceSwapImg02,
      name: "group",
    },
    {
      img: faceSwapImg01,
      name: "video",
    },
  ];

  return (
    <div className={styles.faceSwap}>
      <div className={styles.imgContainer}>
        <Image src={faceSwapImg} alt="face-swap" className={styles.img} />
      </div>
      <div className={styles.faceSwapContent}>
        <div className={styles.top}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>Face Swap</p>
            <div className={styles.free}>
              <Image src={free} alt="face-swap" />
            </div>
          </div>
          <p className={styles.description}>
            Now you can effortlessly transform your videos and photos into
            enchanting master pieces using our incredible filters.
          </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.swapImg}>
            {faceSwap?.map((item, index) => (
              <div
                className={` ${faceSwapIndex === index ? styles.active : ""} ${
                  styles.imgContainer
                }`}
                key={index}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  onClick={() => {
                    setFaceSwapIndex(index);
                    setFaceSwapImg(item.img);
                  }}
                  className={styles.img}
                />
              </div>
            ))}
          </div>
          <Link href={"/face-swap"} className={styles.link}>
            <button className={`btn1 ${styles.btn}`}>Try it out</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
