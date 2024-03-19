"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./otp.module.css";
import { ToastContainer, toast } from "react-toastify";
import { HashLoader, PuffLoader } from "react-spinners";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

export default function Otp() {
  const router = useRouter();
  const inputRefs = Array.from({ length: 6 }, () => React.createRef());;

  useEffect(() => {
    inputRefs.current = Array(6)
      .fill()
      .map(() => {
        React.createRef();
      });
  }, []);
  // useEffect(() => {
  //   if(inputRefs.current.length == 0)
  //   {
  //   inputRefs.current = Array(6)
  //     .fill()
  //     .map(() => {React.createRef() });
  //    // alert();
  //   }
  // }, []);

  const handleChange = (index, e) => {
    const value = e.target.value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*)\./g, "$1");
    e.target.value = value;

    if (value && /^[0-9]$/.test(value)) {
      if (index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && index > 0 && !e.target.value) {
      inputRefs[index - 1].current.focus();
    }
  };

  const [loading, setLoading] = useState(false);
  const override = {
    display: "block",
    borderColor: "white",
  };

  function showToast(message, type = "success", duration = 3000) {
    if (type == "success") {
      toast.success(message, {
        position: "top-center",
        autoClose: duration,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error(message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  function onOtpVerify() {
    let otp = "";
    for (var i = 0; i < inputRefs.length; i++) {
      if (inputRefs[i].current.value.length > 0)
        otp += inputRefs[i].current.value;
    }

    if (otp.length == 6) {
      setLoading(true);
      window.confirmationResult
        .confirm(otp)
        .then(result => {
          // User signed in successfully.
          const user = result.user;
          showToast("Login Success", "success", 2000);

          console.log(result);
          setTimeout(() => {
            setLoading(false);
            router.push("/");
          }, 2000);
          // ...
        })
        .catch(error => {
          showToast("Invalid OTP.", "error");
          console.log("err " + error);
          setLoading(false);
        });
    } else {
      console.log(otp);
      showToast("Please enter a valid 6 digit OTP.", "error");
    }
  }

  /*  useEffect(() => {
    if (window.confirmationResult === undefined) router.push("/signin");
  }, [router, window.confirmationResult]); */

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.confirmationResult === undefined
    ) {
      router.push("/signin");
    }
  }, [router]);

  return (
    <div className={styles.Otp}>
      <ToastContainer />
      <h1 className="grd-txt">Please enter your OTP</h1>
      <p className={styles.title}>
        Your One Time Password (OTP) has been set via <br /> SMS to your
        registered mobile number.
      </p>
      <div className={styles.otpContainer}>
        {inputRefs.map((ref, index) => (
          <div className={styles.inputContainer} key={index}>
            <input
              key={index}
              type="text"
              className={styles.input}
              min="0"
              max="9"
              step="1"
              maxLength="1"
              required
              ref={ref}
              onChange={e => handleChange(index, e)}
              onKeyDown={e => handleKeyDown(index, e)}
            />
          </div>
        ))}
      </div>
      {/* <p className={styles.wrong}>Wrong OTP entered</p> */}
      <p className={styles.resendContainer}>
        Did not receive OTP ? <span className={styles.resend}>Resend</span>
        <span className={styles.timer}>00.30</span>
      </p>
      <button className={`btn2 ${styles.btn}`} onClick={onOtpVerify}>
        <HashLoader
          color="#fff"
          loading={loading}
          cssOverride={override}
          size={25}
        />
        Verify
      </button>
    </div>
  );
}
