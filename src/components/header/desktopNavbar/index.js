import React from "react";
import styles from "./desktopNavbar.module.css";
import Link from "next/link";
import Image from "next/image";
import profile from "@/../public/profile/profile.png";

export default function DesktopNavbar({ setIsProfileOpen, isUserPresent }) {
  return (
    <nav className={styles.DesktopNavbar}>
      <Link href={"/"} className={styles.navLink}>
        Products
      </Link>
      <Link href={"/"} className={styles.navLink}>
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
