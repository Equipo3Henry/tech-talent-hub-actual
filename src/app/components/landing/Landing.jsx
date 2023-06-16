import React from "react";
import Image from "next/image";
import { landing } from "../../public/assets/page";
import styles from "./Landing.module.css";
import Link from "next/link";

function LandingFirstPart(props) {
  return (
    <div>
      <div className={styles.landingContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            We connect IT Talent with Israel’s Companies
          </h1>
          <p className={styles.parrafo}>
            Whether you're a company seeking exceptional talent or a skilled
            professional ready to make your mark, Tech Talent Hub is your
            gateway to unlimited possibilities.{" "}
          </p>
          <div className={styles.botonera}>
            <Link href="/loginpro">
              <button className={styles.botonUsers}>Log In Users</button>
            </Link>
            <Link href="/logincomp">
              <button className={styles.botonCompany}>Log In Companies</button>
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={landing} alt="landing" className={styles.imagen} />
        </div>
      </div>
    </div>
  );
}

export default LandingFirstPart;
