"use client";

import React, { useState, useRef } from "react";
import styles from "./singleAiFaceSwap.module.css";

import Upload from "@/components/faceSwap/singleAiFaceSwap/upload";
import Templates from "@/components/faceSwap/singleAiFaceSwap/templates";

export default function SingleAiFaceSwap() {
  const uploadContainerRef = useRef(null);
  const [uploadTemplateImg, setUploadTemplateImg] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState();

  return (
    <div className={styles.SingleAiFaceSwap}>
      {/* upload section */}
      <Upload
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
        setUploadTemplateImg={setUploadTemplateImg}
        uploadTemplateImg={uploadTemplateImg}
        uploadContainerRef={uploadContainerRef}
      />

      {/* templates section */}
      <Templates
        setSelectedTemplate={setSelectedTemplate}
        setUploadTemplateImg={setUploadTemplateImg}
        uploadContainerRef={uploadContainerRef}
      />
    </div>
  );
}
