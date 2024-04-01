import React from "react";
import styles from "./desktopNavbar.module.css";
import Link from "next/link";
import Image from "next/image";
import profile from "@/../public/profile/profile.png";

export default function DesktopNavbar({ setIsProfileOpen, isUserPresent }) {
  return (
    <nav className={styles.DesktopNavbar}>
      <div className={`${styles.navLink} ${styles.products}`}>
        <Link href={"/"} className={`${styles.navLink}`}>
          <span className={styles.span}>Products</span>
        </Link>
        <ul className={styles.productsHoverContainer}>
          <Link href={"/face-swap"}>
            <li className={styles.list}>Face Swap</li>
          </Link>
          <li className={styles.list}>Ai Image Enhancer</li>
          <li className={styles.list}>Ai Image Generator</li>
        </ul>
      </div>

      <Link href={"/"} className={`${styles.navLink} ${styles.span}`}>
        Chat with Us
      </Link>

      {/* signin */}
      {!isUserPresent && (
        <Link
          href={"/signin"}
          className={`${styles.navLink} ${styles.signIn} btn1`}
        >
          Sign in
        </Link>
      )}

      {/* profile */}
      {isUserPresent && (
        <div
          className={styles.profile}
          onClick={() => setIsProfileOpen(pre => !pre)}
        >
          <Image src={profile} alt="profile" />
        </div>
      )}
    </nav>
  );
}
