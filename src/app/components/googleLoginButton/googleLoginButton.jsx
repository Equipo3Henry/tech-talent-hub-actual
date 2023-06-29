"use client";
import { google } from "../../public/assets/imagesCodes";
import Image from "next/image";
import styles from "./googleLoginButton.module.css";
import { app } from "@/src/firebase/firebase.config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth(app);
export async function loggingGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  }
}

export function GoogleLoginButton({ pathname }) {
  const textButton =
    pathname.includes("signupusers") || pathname.includes("signupcompanies")
      ? "Join with Google"
      : "Login with Google";
  return (
    <button className={styles.ButtonB} onClick={() => loggingGoogle()}>
      {textButton}
      <Image
        src={google}
        alt="image"
        className={styles.GoogleImage}
      ></Image>{" "}
    </button>
  );
}
