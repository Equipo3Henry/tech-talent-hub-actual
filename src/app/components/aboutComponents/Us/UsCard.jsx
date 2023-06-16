import React from "react";
import styles from "./UsCard.module.css";
import Image from "next/image";

const UsCard = ({ name, github, linkedin, image }) => {
  return (
    <div>
      <div className={styles.Contenedor}>
        <Image src={image} alt="imagen" className={styles.image} />
        <h1 className={styles.title}>{name}</h1>
        <div className={styles.links}>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <img
              className={styles.icon}
              src="https://img.icons8.com/ios-filled/50/000000/github.png"
              alt="github"
            />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <img
              className={styles.icon}
              src="https://img.icons8.com/ios-filled/50/000000/linkedin.svg"
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UsCard;
