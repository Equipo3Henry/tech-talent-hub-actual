import React from "react";
import Image from "next/image";
import { landing } from "../../public/assets/page";
import styles from "./Landing.module.css";

function LandingFirstPart(props) {
  return (
    <div>
      <div className={styles.landingContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            We connect IT Talent with Israel’s Companies
          </h1>
          <p className={styles.parrafo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
            felis et urna mollis tincidunt. Proin felis sem, aliquet eu turpis
            eget, consectetur suscipit magna. Curabitur et quam eu ante gravida
            ultricies.{" "}
          </p>
          <div className={styles.botonera}>
            <button className={styles.botonUsers}>Log In Users</button>
            <button className={styles.botonCompany}>Log In Company</button>
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
