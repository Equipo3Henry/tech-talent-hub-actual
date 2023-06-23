import React from "react";
import styles from "./UserOfferDetail.module.css";

import { useEffect, useState } from "react";

function UserOfferDetail({ selectedUserId, setSelectedUserId, users }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (selectedUserId && users) {
      const userDetail = users.find((user) => user.id === selectedUserId);
      setUser(userDetail);
    } else {
      setSelectedUserId(null);
      setUser(null);
    }
  }, [selectedUserId, users]);

  const handleDownload = () => {
    if (user && user.cv) {
      window.open(user.cv);
    } else {
      alert("No CV available for download");
    }
  };

  if (!user) {
    return <div>Aquí iría el id del detail [00]</div>;
  }

  return (
    <div>
      {console.log(selectedUserId)}
      <div className={styles.ContainerDetail}>
        <div className={styles.botonera}>
          <button className={styles.buttonConnect}>Connect</button>
          <button className={styles.buttonLike}>Favorite</button>
        </div>
        <div className={styles.InfoContainer}>
          <div className={styles.UserNameCompanyContainer}>
            <h1
              className={styles.username_name}
            >{`${user.name} ${user.lastname}`}</h1>
            <div className={styles.specializationContainer}>
              <h1 className={styles.subtitle}>{user.specialization}</h1>
              <h4 className={styles.subtitleProgramming}>{user.seniority}</h4>
            </div>
            <h1 className={styles.subtitle}>
              {" "}
              Hello! I am from {user.country}
            </h1>
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
          <button className={styles.buttonDownload} onClick={handleDownload}>
            Download the Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserOfferDetail;
