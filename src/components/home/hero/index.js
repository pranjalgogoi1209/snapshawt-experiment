import React, { useState } from "react";
import styles from "./hero.module.css";
import Link from "next/link";
import Image from "next/image";

import { IoSearchOutline } from "react-icons/io5";
import AiDriven from "./aidriven";
import { TypeAnimation } from 'react-type-animation';

import faceSwapImg01 from "./../../../../public/home/hero/faceSwapImg01.png";
import faceSwapImg02 from "./../../../../public/home/hero/faceSwapImg02.png";
import imgInhancerImg01 from "./../../../../public/home/hero/imgInhancerImg01.png";
import imgGeneratorImg01 from "./../../../../public/home/hero/imgGeneratorImg01.png";
import free from "./../../../../public/home/hero/free.png";

export default function Hero() {
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

  const imageGenerator = [
    {
      img: imgGeneratorImg01,
    },
  ];

  const [faceSwapIndex, setFaceSwapIndex] = useState();
  const [faceSwapImg, setFaceSwapImg] = useState(faceSwapImg01);

  const [imgInhancerIndex, setImgInhancerIndex] = useState();
  const [imgInhancerImg, setImgInhancerImg] = useState(imgInhancerImg01);
  return (
    <div className={styles.Hero}>
      {/* bg */}
      <div className={styles.bgContainer}>
        <div className={`${styles.bgOne} ${styles.bg}`}></div>
        <div className={`${styles.bgTwo} ${styles.bg}`}></div>
      </div>

      {/* content */}
      <div className={styles.contentContainer}>
        <div className={styles.containerOne}>
          <h1 className={"grd-txt"}>Ai Face Swap Online</h1>
          <p className="txt1">
            Experience Seamless Face Swapping Online with us! <br />
            Turn Your Photos into Fun Creations Instantly!
          </p>
          <div className={styles.cards}>
            {/* face swap */}
            <div className={styles.faceSwap}>
              <div className={styles.imgContainer}>
                <Image
                  src={faceSwapImg}
                  alt="face-swap"
                  className={styles.img}
                />
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
                    Now you can effortlessly transform your videos and photos
                    into enchanting master pieces using our incredible filters.
                  </p>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.swapImg}>
                    {faceSwap?.map((item, index) => (
                      <div
                        className={` ${faceSwapIndex === index ? styles.active : ""
                          } ${styles.imgContainer}`}
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

            {/* ai image enhancer */}
            <div className={styles.faceSwap}>
              <div className={styles.imgContainer}>
                <Image
                  src={imgInhancerImg}
                  alt="face-swap"
                  className={styles.img}
                />
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
                    Make the picture clearer and make the small details really
                    pop so that the overall quality is amazing.
                  </p>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.swapImg}>
                    {imageInhancer?.map((item, index) => (
                      <div
                        className={` ${imgInhancerIndex === index ? styles.active : ""
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

            {/* ai image generator */}
            <div className={styles.faceSwap}>
              <div className={styles.imgContainer}>
                <div className={styles.maskLayer}>

                </div>
                <Image
                  src={imgGeneratorImg01}
                  alt="face-swap"
                  className={styles.img}
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
                    Turn your ideas into reality and generate stunning visual
                    content.
                  </p>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.search}>
                    <p className={styles.prompt}>
                      <TypeAnimation
                        sequence={[
                          'A girl in train in Indian Atire',
                          5000,
                          'every ceo is don in nature yess',
                          5000,

                        ]}
                        wrapper="span"
                        speed={10}
                        omitDeletionAnimation="true"
                        style={{ fontSize: '1em', display: 'inline-block' }}
                        repeat={Infinity}
                      />
                    </p>
                    <IoSearchOutline className={styles.svg} />
                  </div>
                  <Link href={"/"} className={styles.link}>
                    <button className={`btn1 ${styles.btn}`}>Try it out</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerTwo}>
          <AiDriven />
        </div>
      </div>
    </div>
  );
}
