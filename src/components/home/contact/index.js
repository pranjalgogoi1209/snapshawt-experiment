import React from "react";
import Image from "next/image";
import contactImg from "@/../public/home/contact/contactImg.png";
import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <div className={styles.leftContainer}>
        <div className={styles.imgContainer}>
          <Image src={contactImg} alt="contact" />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <p className={`cursiveFont ${styles.title}`}>Lets Connect</p>
        <h2 className={styles.heading}>Fill Your Details Now</h2>
        <form className={styles.form}>
          <input className={styles.input} placeholder="Full Name" />
          <div className={styles.phoneEmail}>
            <input className={styles.input} placeholder="Phone No." />
            <input className={styles.input} placeholder="Email" />
          </div>
          <textarea
            className={styles.textarea}
            placeholder="Your Message Here"
          ></textarea>
          <button className={`btn1 ${styles.submit}`}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
