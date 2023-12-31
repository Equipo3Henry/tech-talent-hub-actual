"use client";
import React, { useContext, useState, useEffect } from "react";
import styles from "./my-applications.module.css";
import { myApplicationspicture } from "../../public/assets/imagesCodes";
import Image from "next/image";
import MyApplicationsCards from "../../components/jobsComponents/jobsOfferCardContainerForMyApplications/myApplicationsCards";
import { GlobalContext } from "../layout";
import { getLayout } from "../layout";

function MyApplications() {
  // Define user state
  const [user, setUser] = useState(null);

  useEffect(() => {
    const localStorageData = localStorage.getItem("userData");
    const userData = JSON.parse(localStorageData);
    setUser(userData);
  }, []); // Dependency array

  return (
    <div className={styles.body}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>My Posts</h1>
        <p className={styles.p}>
          Here you can see the applications to which you have applied
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.postContainer}>
          {/* Check if user data is available before trying to access its id */}
          {user && <MyApplicationsCards userId={user.id} />}
          <div className={styles.pictureContainer}>
            <Image src={myApplicationspicture} alt="myApplicationspicture" />
          </div>
        </div>
      </div>
    </div>
  );
}

MyApplications.getLayout = getLayout;
export default MyApplications;
