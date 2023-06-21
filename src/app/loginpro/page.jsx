"use client";
import React, {useState} from "react";
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
import { useRouter } from 'next/navigation'
const login = () => {

  const router = useRouter();
  
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  })
  const [error, setError] = useState("");
  
  
  const handleUser = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setFormLogin({...formLogin,[property]: value});
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    let response = null;
    
    await axios.post("/api/loginUsers",formLogin)
    .then((res) => {
      response = res.data;
    })
    .catch((err) => {
      alert("There was an error in the login, please try again")
    })

    console.log(response)
    if (response.response === "Access granted"){
      const params = JSON.stringify(response.userData);
      router.push(`/profile/dashboard?userData=${ params }`);
    } 
    else setError(response.response);
}

  return (
    <div>
      <div className={styles.LogInContainer}>
        <div className={styles.InputsLogIn}>
          <div className={styles.TitleLogIn}>
            <h1 className={styles.title}>Unlock your potential in tech</h1>
            <h4 className={styles.subtitle}>Create an account or Sign in</h4>
          </div>
          <form onSubmit={handleSubmit}>
          <span className={styles.error}>{error}</span>
          <div className={styles.inPutsContainer}>
            <div className={styles.email}>
              <label htmlFor="email">
                <h2 className={styles.labelInput}>Email </h2>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className={styles.input}
                  onChange={handleUser}
                />
              </label>
              <label htmlFor="Password">
                <h2 className={styles.labelInput}>Password </h2>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={styles.input}
                  onChange={handleUser}
                />
              </label>
            </div>
          </div>
          <br />
          <br />
            <button className={styles.ButtonSignIn} type="submit">Log In</button>
          </form>
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
            <Link href="/signupusers">
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
