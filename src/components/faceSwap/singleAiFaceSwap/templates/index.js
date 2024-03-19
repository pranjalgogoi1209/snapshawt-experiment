import React, { useState } from "react";
import styles from "./templates.module.css";
import { animateScroll as scroll } from "react-scroll";
import Image from "next/image";

import { templatesArr } from "@/data/faceSwap/singleAiFaceSwap/templates";
import { base64 } from "@/utils/base64";

export default function Templates({
  setSelectedTemplate,
  setUploadTemplateImg,
  uploadContainerRef,
}) {
  const handleSelectTemplate = template => {
    // setSelectedTemplate(template);
    base64(template.src, base64Data => {
      console.log("Base64 data:", base64Data);
      setSelectedTemplate(base64Data);
    });
    setUploadTemplateImg("");
    if (uploadContainerRef) {
      scroll.scrollTo(uploadContainerRef.current.offsetTop - 100, {
        duration: 500,
        smooth: "easeInOutQuart",
      });
    }
  };

  return (
    <section className={styles.Templates}>
      <p className={`grd-txt ${styles.title}`}>Choose from our Templates</p>
      <div className={styles.templateContainer}>
        {templatesArr?.map((template, index) => (
          <div
            key={index}
            onClick={() => {
              // setSelectedTemplate(base64(template));
              handleSelectTemplate(template);
            }}
            className={styles.imgContainer}
          >
            <Image src={template} alt="template" className={styles.img} />
          </div>
        ))}
      </div>
    </section>
  );
}
