"use client";

import React, { useEffect, useState } from "react";
import styles from "./myprofile.module.css";
import FileUploader from "../../components/FileUploaderUsers/fileUploader";
import axios from "axios";
import PutUsers from "../../components/profileUsersPutModal/putUsers";
import Services from "../../services/page";

function MyProfileUsers() {
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUserData = JSON.parse(window.localStorage.getItem("userData"));
    const userId = storedUserData?.id;
    setUserId(userId);
    console.log(`User ID from localStorage: ${userId}`);
    console.log(localStorage.userData);

    // Fetch user data
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/api/users/${userId}`);
        setUserData(response.data);

        // Log the data
        console.log("Fetched user data:", response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  return (
    <div className={styles.page_container}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>My Profile</h1>
        <p className={styles.p}>
          Here you can modify your personal data and upload your CV.
        </p>
      </div>

      <div className={styles.content_container}>
        <div className={styles.modifyInfo_container}>
          <PutUsers userData={userData} />
        </div>
        <div className={styles.fileUploader_container}>
          <FileUploader userId={userId} />
        </div>
      </div>
      <Services />
    </div>
  );
}

export default MyProfileUsers;
