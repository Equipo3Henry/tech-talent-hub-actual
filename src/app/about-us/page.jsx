import React from "react";
import styles from "./about-us.module.css";
import {
  au1,
  au2,
  au3,
  au4,
  au5,
  au6,
  au7,
  au8,
} from "../public/assets/imagesCodes";
import UsContainer from "../components/aboutComponents/UsContainer/UsContainer";

const us = [
  {
    name: "Iair Kaplun",
    github: "https://github.com/iairkap",
    linkedin: "https://www.linkedin.com/in/iair-kaplun-97145a88",
    image: au8,
  },
  {
    name: "Christian Villegas",
    github: "https://github.com/Blessed0314",
    linkedin: "https://www.linkedin.com",
    image: au3,
  },
  {
    name: "Iván Scarsella",
    github: "https://github.com/IvanScarsella",
    linkedin: "https://www.linkedin.com/in/iv%C3%A1n-scarsella-126a18261/",
    image: au6,
  },
  {
    name: "Natalia Malvicino",
    github: "https://github.com/Aafterlife17",
    linkedin: "https://www.linkedin.com/in/nataliamalvicino/",
    image: au4,
  },
];

const aboutUs = () => {
  return (
    <div>
      <div className={styles.Container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Meet the team!</h1>
          <h3 className={styles.subtitle}>
            We are a team of passionate full-stack developers, all alumni of the
            Henry Bootcamp. Each project we undertake showcases our commitment
            and our high-quality tech talent. Our work goes beyond just meeting
            standards - it sets them. Welcome to our platform, where we turn
            technology into an art form.
          </h3>
        </div>
        <div className={styles.UsContainer}>
          <UsContainer us={us} />
        </div>
      </div>
    </div>
  );
};

export default aboutUs;
