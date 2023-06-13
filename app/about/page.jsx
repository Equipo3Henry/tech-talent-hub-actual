import React from "react";
import styles from "./about-us.module.css";
import { au1, au2, au3, au4, au5, au6, au7, au8 } from "../../assets/page";
import UsContainer from "../../components/UsContainer/UsContainer";

const us = [
  {
    name: "Christian Villegas",
    github: "https://github.com/Blessed0314",
    linkedin: "",
    image: au3,
  },
  {
    name: "Ignacio Cenni",
    github: "https://github.com/ignaciocenni",
    linkedin: "https://www.linkedin.com/in/ignaciocenni",
    image: au5,
  },
  {
    name: "Jorge Acosta",
    github: "https://github.com/jacosta1111",
    linkedin: "",
    image: au1,
  },
  {
    name: "Natalia Malvicino",
    github: "https://github.com/Aafterlife17",
    linkedin: "https://www.linkedin.com/in/nataliamalvicino/",
    image: au4,
  },
  {
    name: "Iair Kaplun",
    github: "https://github.com/iairkap",
    linkedin: "https://www.linkedin.com/in/iair-kaplun-97145a88",
    image: au8,
  },
  {
    name: "Iván Scarsella",
    github: "https://github.com/IvanScarsella",
    linkedin: "https://www.linkedin.com/in/iv%C3%A1n-scarsella-126a18261/",
    image: au6,
  },
  {
    name: "Julián González",
    github: "https://github.com/Uruvsereg",
    linkedin: "",
    image: au7,
  },
  {
    name: "Michelle Díaz",
    github: "https://github.com/Michellemishna",
    linkedin: "",
    image: au2,
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
