"use client";

import React, { useEffect, useState } from "react";
import styles from "./myprofile.module.css";
import FileUploader from "../../components/FileUploaderUsers/fileUploader";
import id from "date-fns/esm/locale/id/index.js";
import PutUsers from "../../components/profileUsersPutModal/putUsers";

function MyProfileUsers() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedUserData = JSON.parse(window.localStorage.getItem("userData"));
    const userId = storedUserData?.id;
    setUserId(userId);
    console.log(`User ID from localStorage: ${userId}`);
  });

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
          <PutUsers />
        </div>
        <div className={styles.fileUploader_container}>
          <FileUploader userId={userId} />
        </div>
      </div>
    </div>
  );
}

export default MyProfileUsers;
