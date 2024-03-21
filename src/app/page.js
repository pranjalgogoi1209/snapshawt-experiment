"use client";
import React from "react";
import styles from "./page.module.css";
import Contact from "@/components/home/contact";
import Hero from "@/components/home/hero";
import EnhanceImage from "@/components/home/enhanceImage";
import AiFaceSwap from "@/components/home/aiFaceSwap";
import AiImageGenerator from "@/components/home/aiImageGenerator";
import InstantFaceSwap from "@/components/home/instantFaceSwap";

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      {/* hero */}
      {/* <Hero /> */}

      {/* ai-face-swap*/}
      <AiFaceSwap />

      {/* enhance-image */}
      <EnhanceImage />

      {/* ai-image-generator */}
      <AiImageGenerator />

      {/* instant-face-swap */}
      <InstantFaceSwap />

      {/* contact */}
      <Contact />
      {/*   <div
        data-aos="fade-up"
        data-aos-delay={200}
        style={{
          height: "20vw",
          opacity: 1,
        }}
      >
        Hi how are you ?
      </div> */}
    </div>
  );
}
