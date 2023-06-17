"use client";

import React from "react";
import styles from "./login.module.css";
import Image from "next/image";
import {
  google,
  linkedin,
  github,
  signinvector,
} from "../../public/assets/imagesCodes";
import { useRouter } from "next/navigation";

const login = () => {
  return (
    <div>
      <div className={styles.LogInContainer}>
        <div className={styles.InputsLogIn}>
          <div className={styles.TitleLogIn}>
            <h1 className={styles.title}>Unlock your potential in tech!</h1>
            <h4 className={styles.subtitle}>Create an account or Sign in</h4>
          </div>
          <div className={styles.inPutsContainer}>
            <div className={styles.email}>
              <label htmlFor="email">
                <h2 className={styles.labelInput}>Email </h2>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className={styles.input}
                />
              </label>
              <label htmlFor="Password">
                <h2 className={styles.labelInput}>Password </h2>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={styles.input}
                />
              </label>
            </div>
          </div>
          <br />
          <br />
          <button className={styles.ButtonSignIn}>Sing In</button>
          <br />
          <br />
          <div className={styles.Separator}>
            <div className={styles.line}> </div>
            <span className={styles.or}>Or</span>
            <div className={styles.line}> </div>
          </div>
          <div className={styles.ButtonAuthenticationOptions}>
            <button className={styles.ButtonAuth}>
              <Image src={google} alt="image"></Image>{" "}
            </button>
            <button className={styles.ButtonAuth}>
              <Image src={linkedin} alt="image"></Image>{" "}
            </button>
            <button className={styles.ButtonAuth}>
              <Image src={github} alt="image"></Image>{" "}
            </button>
          </div>
          <div>
            <br />
            <br />
            <button className={styles.ButtonB}>
              New to HighTech Fusion? Join now
            </button>
          </div>
        </div>
        <div className={styles.imagenContenedor}>
          <Image src={signinvector} alt="image" className={styles.Vector} />
        </div>
      </div>
    </div>
  );
};

export default login;
