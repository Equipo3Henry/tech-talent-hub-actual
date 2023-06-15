import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./UserOfferDetail.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

function UserOfferDetail({ selectedUserId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (selectedUserId) {
      axios
        .get(`http://localhost:3000/api/users/${selectedUserId}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [selectedUserId]);

  if (!user) {
    return <div>Aquí iría el id del detail [00]</div>;
  }

  return (
    <div>
      <div className={styles.ContainerDetail}>
        <div className={styles.botonera}>
          <button className={styles.buttonConnect}>Connect!</button>
          <button className={styles.buttonLike}> like</button>
        </div>
        <div className={styles.InfoContainer}>
          <div className={styles.UserNameCompanyContainer}>
            <h1>{`${user.name} ${user.lastname}`}</h1>
            <div className={styles.specializationContainer}>
              <h1 className={styles.subtitle}>{user.specialization}</h1>
              <h4 className={styles.subtitleProgramming}>{user.seniority}</h4>
            </div>
            <h1 className={styles.subtitle}> I'm from: {user.country}</h1>
          </div>
        </div>
        <span className={styles.aboutme}>{user.aboutme}</span>
        <div className={styles.listados}>
          <ul>
            {user.progLanguages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
          <ul>
            {user.softSkills.map((soft, index) => (
              <li key={index}>{soft}</li>
            ))}
          </ul>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.buttonDownload}>
            Download the Resume!
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserOfferDetail;
