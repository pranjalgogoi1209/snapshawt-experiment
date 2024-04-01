import React from "react";
import styles from "./mobileNavbar.module.css";
import Link from "next/link";

import { IoIosCloseCircle } from "react-icons/io";

export default function MobileNavbar({ setIsShowSidebar, isShowSidebar }) {
  return (
    <nav
      className={`${styles.MobileNavbar} ${
        isShowSidebar ? styles.showSidebar : ""
      }`}
    >
      <ul className={styles.navLinkContainer}>
        <Link
          href={"/"}
          onClick={() => setIsShowSidebar(false)}
          className={styles.navLinks}
        >
          <li className={styles.list}>Home</li>
        </Link>
        <Link
          href={"/"}
          onClick={() => setIsShowSidebar(false)}
          className={styles.navLinks}
        >
          <li className={styles.list}>About</li>
        </Link>
        <Link
          href={"/"}
          onClick={() => setIsShowSidebar(false)}
          className={styles.navLinks}
        >
          <li className={styles.list}>Mentor</li>
        </Link>
        <Link
          href={"/"}
          onClick={() => setIsShowSidebar(false)}
          className={styles.navLinks}
        >
          <li className={styles.list}>Services</li>
        </Link>
        <Link
          href={"/"}
          onClick={() => setIsShowSidebar(false)}
          className={styles.navLinks}
        >
          <li className={styles.list}>Our Team</li>
        </Link>
        <Link
          href={"/"}
          onClick={() => setIsShowSidebar(false)}
          className={styles.navLinks}
        >
          <li className={styles.list}>Contact</li>
        </Link>
        <IoIosCloseCircle
          onClick={() => setIsShowSidebar(false)}
          className={styles.close}
        />
      </ul>
    </nav>
  );
}
