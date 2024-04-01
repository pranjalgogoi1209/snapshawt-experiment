"use client";
import React, { useEffect, useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";

import DesktopNavbar from "./desktopNavbar";
import logoHeader from "@/../public/header/logoHeader.png";
import Profile from "../profile";
import Credits from "../credits";
import app from "../../firebase-config";
import { FaBarsStaggered } from "react-icons/fa6";
import MobileNavbar from "./mobileNavbar";

import {
  onAuthStateChanged,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCreditsOpen, setIsCreditsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(function (userr) {
      if (userr != null) {
        setUser(userr);
      } else {
        setUser(null);
        setIsProfileOpen(false);
        setIsCreditsOpen(false);
        // No user is signed in.
      }
    });
  }, [auth]);

  return (
    <header className={styles.Header}>
      <div className={styles.logoContainer}>
        <Link href={"/"}>
          <Image src={logoHeader} alt="logo" />
        </Link>
      </div>
      <div className={styles.rightContainer}>
        {/* price */}
        <button
          onClick={() => setIsCreditsOpen(pre => !pre)}
          className={`btn1 ${styles.price}`}
        >
          Price
        </button>

        {/* credit */}
        <button className={`btn3 ${styles.credit}`}>Credit 05</button>

        {/* profile-section */}
        <div className={styles.profile}>
          {isProfileOpen && <Profile user={user} />}
        </div>

        {/* credits-section */}
        <div className={styles.credits}>
          {isCreditsOpen && <Credits setIsCreditsOpen={setIsCreditsOpen} />}
        </div>

        {/* desktop navbar */}
        <div className={styles.desktopNavbar}>
          <DesktopNavbar
            setIsProfileOpen={setIsProfileOpen}
            isUserPresent={user}
          />
        </div>

        <FaBarsStaggered
          className={styles.bar}
          onClick={() => setIsShowSidebar(true)}
        />

        {/* mobile navbar */}
        <div className={styles.mobileNavbar}>
          <MobileNavbar
            isShowSidebar={isShowSidebar}
            setIsShowSidebar={setIsShowSidebar}
          />
        </div>
      </div>
    </header>
  );
}
