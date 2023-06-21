"use client";

import React, { useState } from "react";
import styles from "./login.module.css";
import Image from "next/image";
import {
  google,
  linkedin,
  github,
  signinvector,
} from "../public/assets/imagesCodes";
import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/navigation';

const login = () => {

  
  const [company, setCompany] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState("")

  const router = useRouter();

  const checkPassword = async () => {
    try {

      await axios.post("/api/loginCompany", company)
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            console.log("Login successful");
            router.push('/company/dashboard');
          } else {
            setError("Los campos no coinciden")
          }
        })
    } catch (e) {
      setError("Los campos no coinciden")
      console.log(e)
    }
  }

  const changeHandler = (event) => {
    let property = event.target.name;
    let value = event.target.value;

    setCompany({
      ...company,
      [property]: value
    })
  }

  return (
    <div>
      <div className={styles.LogInContainer}>
        <div className={styles.InputsLogIn}>
          <div className={styles.TitleLogIn}>
            <h1 className={styles.title}>Unlock LATAM tech potential</h1>
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
                  onChange={changeHandler}
                />
              </label>
              <label htmlFor="Password">
                <h2 className={styles.labelInput}>Password </h2>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={styles.input}
                  onChange={changeHandler}
                />
              </label>
            </div>
          </div>
          <br />
          <br />
          <button className={styles.ButtonSignIn} onClick={checkPassword} >Log In</button>
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
            <Link href="/signupcompanies">
              <button className={styles.ButtonB}>
                New to HighTech Fusion? Join now
              </button>
            </Link>
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
