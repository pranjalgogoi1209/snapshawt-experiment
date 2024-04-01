import React, { useState } from "react";
import styles from "./imgInhancerHero.module.css";
import Link from "next/link";
import Image from "next/image";

import imgInhancerImg01 from "./../../../../../public/home/hero/imgInhancerImg01.png";

export default function ImgInhancerHero() {
  const [imgInhancerIndex, setImgInhancerIndex] = useState();
  const [imgInhancerImg, setImgInhancerImg] = useState(imgInhancerImg01);

  const imageInhancer = [
    {
      img: imgInhancerImg01,
      name: "single",
    },
    {
      img: imgInhancerImg01,
      name: "group",
    },
    {
      img: imgInhancerImg01,
      name: "video",
    },
  ];
  return (
    <div className={styles.faceSwap}>
      <div className={styles.imgContainer}>
        <Image src={imgInhancerImg} alt="face-swap" className={styles.img} />
      </div>
      <div className={styles.faceSwapContent}>
        <div className={styles.top}>
          <div className={styles.titleContainer}>
            <p className={styles.title}>AI Image Enhancer</p>
            <div className={styles.free}>
              {/* <Image src={free} alt="face-swap" /> */}
            </div>
          </div>
          <p className={styles.description}>
            Make the picture clearer and make the small details really pop so
            that the overall quality is amazing.
          </p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.swapImg}>
            {imageInhancer?.map((item, index) => (
              <div
                className={` ${
                  imgInhancerIndex === index ? styles.active : ""
                } ${styles.imgContainer}`}
                key={index}
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  onClick={() => {
                    setImgInhancerIndex(index);
                    setImgInhancerImg(item.img);
                  }}
                  className={styles.img}
                />
              </div>
            ))}
          </div>
          <Link href={"/"} className={styles.link}>
            <button className={`btn1 ${styles.btn}`}>Try it out</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
