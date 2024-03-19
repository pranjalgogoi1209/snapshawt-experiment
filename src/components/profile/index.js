import React, { useEffect, useState } from "react";
import styles from "./profile.module.css";
import Image from "next/image";
import profile from "@/../public/profile/profile.png";
import img from "@/../public/profile/img.png";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Profile(user) {
  // const [contact, setContact] = useState();
  const gallaryArr = [img, img, img, img, img, img];
  const router = useRouter();

  useEffect(() => {
    console.log(user);
  }, [user]);

  const logOutClickHandler = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        router.push("/");
      })
      .catch(error => {
        // An error happened.
      });
  };

  /*  useEffect(() => {
    if (user.user.email) {
      setContact(user.user.email);
    } else {
      setContact(user.user.phoneNumber);
    }
  }, []); */

  let contact;
  if (user.user.email) {
    contact = user.user.email;
  } else {
    contact = user.user.phoneNumber;
  }

  return (
    <div className={styles.Profile}>
      <div className={styles.user}>
        <div className={styles.userProfile}>
          <Image src={profile} alt="profile" />
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.contact}>
            <p>
              snap
              {user.user.uid.substr(
                user.user.uid.length - 4,
                user.user.uid.length
              )}
            </p>
            <p
              className={`${styles.phoneEmail}  ${
                contact.length > 19 ? styles.bigEmail : ""
              }`}
            >
              {user.user.email ? user.user.email : user.user.phoneNumber}
            </p>
          </div>
          <button className={`btn1 ${styles.btn}`}>Edit Profile</button>
        </div>
      </div>
      <div className={styles.gallery}>
        <div className={styles.top}>
          <p className={styles.txt}>Gallery</p>
          <div className={styles.download}>
            <input type="checkbox" id="download" />
            <label htmlFor="download">Dowload All</label>
          </div>
        </div>
        <div className={styles.bottom}>
          {gallaryArr?.map((item, index) => (
            <div key={index} className={styles.imgContainer}>
              <Image src={item} alt="img" className={styles.img} />
            </div>
          ))}
        </div>
        <p className={styles.seeAll}>See All</p>
      </div>
      <p className={styles.logout} onClick={logOutClickHandler}>
        Log Out
      </p>
    </div>
  );
}
