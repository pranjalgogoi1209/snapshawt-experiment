import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import footerLogo from "@/../public/footer/footerLogo.png";
import fb from "@/../public/footer/fb.png";
import sc from "@/../public/footer/sc.png";
import ig from "@/../public/footer/ig.png";
import tw from "@/../public/footer/tw.png";
import pi from "@/../public/footer/pi.png";

import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footer}>
      {/* left footer */}
      <div className={styles.leftFooter}>
        <div className={styles.footerLogo}>
          <Image src={footerLogo} alt="logo" />
        </div>
        <div className={styles.leftFooterSecondRow}>
          <p className={`txt2`}>
            Instantly switch looks, become anyone with SnapShawt AI! Your go-to
            for easy, fun face swaps in a snap
          </p>
          <ul className={styles.socialIconBox}>
            <Link href="/">
              <li>
                <Image src={fb} className={styles.socialIcon} alt="img" />
              </li>
            </Link>
            <Link href="/">
              <li>
                <Image src={ig} className={styles.socialIcon} alt="img" />
              </li>
            </Link>
            <Link href="/">
              <li>
                <Image src={tw} className={styles.socialIcon} alt="img" />
              </li>
            </Link>
            <Link href="/">
              <li>
                <Image src={pi} className={styles.socialIcon} alt="img" />
              </li>
            </Link>
            <Link href="/">
              <li>
                <Image src={sc} className={styles.socialIcon} alt="img" />
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* right footer */}
      <div className={styles.rightFooter}>
        <ul className={styles.rightFooterColumn}>
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact us</li>
        </ul>
        <ul className={styles.rightFooterColumn}>
          <li>AI FaceSwap</li>
          <li>AI Image Enhancer</li>
          <li>AI Image Generator</li>
        </ul>
      </div>
    </div>
  );
}
