"use client";

import React, { useState } from "react";
import styles from "./login.module.css";
import Image from "next/image";
import {
  google,
  linkedin,
  github,
  eyeclosed,
  eyeopen,
  signinvector,
} from "../public/assets/imagesCodes";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  //? USE STATE PASSWORD
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordIcon, setShowPasswordIcon] = useState(eyeclosed);

  //? TOGGLE PASSWORD
  const togglePassword = () => {
    setShowPassword(!showPassword);
    setShowPasswordIcon(showPassword ? eyeclosed : eyeopen);
  };

  const handleForm = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setFormLogin({ ...formLogin, [property]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = null;

    await axios
      .post("/api/loginCompany", formLogin)
      .then((res) => {
        response = res.data;
      })
      .catch((err) => {
        alert("There was an error in the login, ple(ase try again");
      });

    console.log(response);
    if (response.response === "Access granted") {
      localStorage.setItem("companyData", JSON.stringify(response.companyData));
      const params = JSON.stringify(response.companyData);
      console.log("Local Storage Data: ", localStorage.getItem("companyData"));
      router.push(`/company/dashboard`);
    } else setError(response.response);
  };
  return (
    <div>
      <div className={styles.LogInContainer}>
        <div className={styles.InputsLogIn}>
          <div className={styles.TitleLogIn}>
            <h1 className={styles.title}>Unlock LATAM tech potential</h1>
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
                    placeholder="Enter your email"
                    className={styles.input}
                    onChange={handleForm}
                  />
                </label>
                <label htmlFor="Password">
                  <h2 className={styles.labelInput}>Password </h2>
                  <div className={styles.password_toggle_container}>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      className={styles.input}
                      onChange={handleForm}
                    />
                    <Image
                      src={showPasswordIcon}
                      alt={showPassword ? "Hide Password" : "Show Password"}
                      className={styles.password_icon}
                      onClick={togglePassword}
                    />
                  </div>
                </label>
              </div>
            </div>
            <br />
            <br />
            <button className={styles.ButtonSignIn} type="submit">
              Log In
            </button>
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

export default Login;
