import React from "react";
import styles from "./my-applications.module.css";
import { myApplicationspicture } from "../../public/assets/imagesCodes";
import Image from "next/image";

//traer las cards de los posts que el usuario aplico

function myApplications(props) {
  return (
    <div>
      <body className={styles.body}>
        <div className={styles.container}>
          <div className={styles.postContainer}>
            <h1> aca se tiene que renderizar los posts que aplique </h1>
          </div>
          <div className={styles.pictureContainer}>
            <Image src={myApplicationspicture} alt="myApplicationspicture" />
          </div>
        </div>
      </body>
    </div>
  );
}

export default myApplications;
