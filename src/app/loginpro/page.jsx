"use client";
import React, { useEffect, useState } from "react";
import styles from "./login.module.css";
import Image from "next/image";
import {
  eyeclosed,
  eyeopen,
  signinvector,
} from "../public/assets/imagesCodes";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { GoogleLoginButton } from "../components/googleLoginButton/googleLoginButton";
import { usePathname } from "next/navigation";

const Login = () => {
  const router = useRouter();

  //? USE STATE LOGIN GOOGLE
  const pathname = usePathname();
  const [googleData, setGoogleData] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const loginGoogle = async () => {
      if(googleData){
        const formGoogle = {
          email: googleData.email,
          password: "",
        }
        setIsDisabled(true);
        setIsLoading(true);
        await fetchLogin(formGoogle);   
      }
    }
    loginGoogle();
  },[googleData]);

  //? USE STATE FORM
  const [error, setError] = useState("");
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  }); 

  //? USE STATE PASSWORD
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordIcon, setShowPasswordIcon] = useState(eyeclosed);

  //? TOGGLE PASSWORD
  const togglePassword = () => {
    setShowPassword(!showPassword);
    setShowPasswordIcon(showPassword ? eyeclosed : eyeopen);
  };

  const handleUser = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setFormLogin({ ...formLogin, [property]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    setIsLoading(true);
    await fetchLogin(formLogin);
  };

  const fetchLogin = async (form) => {
    const response = (await axios.post("/api/loginUsers", form)).data;
    if (response.response === "Access granted") {
      localStorage.setItem("userData", JSON.stringify(response.userData));
      router.push(`/profile/dashboard`);
    } else {
      setIsLoading(false);
      setIsDisabled(false);
      setError(response.response);
    }
  }
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  return (
    <div>
      <div className={styles.LogInContainer}>
        <div className={styles.InputsLogIn}>
          <div className={styles.TitleLogIn}>
            <h1 className={styles.title}>Unlock your potential in tech</h1>
            <h4 className={styles.subtitle}>Create an account or Sign in</h4>
          </div>
          {isLoading ? (
            <div className={styles.loaderContainer}>
              <div className={styles.spinner}></div>
              <div><h4>Please wait while we log you in</h4></div>
            </div>
            ) : (
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
                      onChange={handleUser}
                      onKeyDown={handleKeyDown}
                      required
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
                        onChange={handleUser}
                        onKeyDown={handleKeyDown}
                        required
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
            </form>)}
          <br />
          <br />
          <div className={styles.Separator}>
            <div className={styles.line}> </div>
            <span className={styles.or}>Or</span>
            <div className={styles.line}> </div>
          </div>
          <div className={styles.ButtonAuthenticationOptions}>
            <GoogleLoginButton pathname={pathname} setGoogleData={setGoogleData} isDisabled={isDisabled}/>
          </div>
          <div>
            <br />
            <br />
            <Link href="/signupusers">
              <button className={styles.ButtonB} disabled={isDisabled}>
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
