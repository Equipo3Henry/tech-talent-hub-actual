import React from "react";
import Image from "next/image";
import { aboutProject } from "../../public/assets/imagesCodes";
import styles from "./aboutProject.module.css";
import Link from "next/link";

function AboutProject() {
  return (
    <div className={styles.container}>
      <Image src={aboutProject} alt="about" className={styles.imagen} />
      <div className={styles.aboutProject_Container}>
        <h1 className={styles.h1}>
          {" "}
          Bringing Latin American IT Professionals and Israeli Businesses
          together
        </h1>
        <p className={styles.p}>
          With a vast pool of skilled IT professionals from Latin America and a
          thriving tech ecosystem in Israel, our platform opens doors to endless
          possibilities. From startups to established enterprises across various
          industries, companies can tap into a rich talent pool and discover
          exceptional individuals who possess the technical expertise, cultural
          understanding, and innovative mindset required to thrive in the
          Israeli business landscape. In a rapidly evolving global market, where
          collaboration and innovation are key, our platform stands at the
          forefront, facilitating connections that transcend geographical
          boundaries. Join us today and unlock a world of opportunities where
          Latin American IT talent meets the dynamic landscape of Israeli
          companies.
        </p>
      </div>
    </div>
  );
}

export default AboutProject;
