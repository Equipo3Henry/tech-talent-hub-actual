import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./UserOfferDetail.module.css";
import { usersTemplate } from "@/helpers/provisionalDB";
import { useEffect, useState } from "react";

function UserOfferDetail({ selectedUserId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (selectedUserId) {
      const userDetail = usersTemplate.find(
        (user) => user.id === Number(selectedUserId)
      );
      setUser(userDetail);
    }
  }, [selectedUserId]);

  if (!user) {
    return <div>aca iria el id del detail [00]</div>;
  }

  return (
    <div>
      <div className={styles.ContainerDetail}>
        <div className={styles.InfoContainer}>
          <div className={styles.UserNameCompanyContainer}>
            <h1>{`${user.name} ${user.lastName}`}</h1>
            <h1 className={styles.subtitle}>{user.specialization}</h1>
          </div>
          <div className={styles.botonera}>
            <button className={styles.buttonConnect}>Connect!</button>
            <button className={styles.buttonLike}> ♡</button>
          </div>
        </div>
        <span>{user.aboutme}</span>
        <div className={styles.buttonContainer}>
          <button className={styles.buttonConnect}>Download the Resume!</button>
        </div>
      </div>
    </div>
  );
}

export default UserOfferDetail;
