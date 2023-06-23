import React from "react";
import styles from "./myprofile.module.css";
import FileUploader from "../../components/FileUploaderUsers/fileUploader";
import PutUsers from "../../components/profileUsersPutModal/putUsers";

function MyProfileUsers() {
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
          <FileUploader />
        </div>
      </div>
    </div>
  );
}

export default MyProfileUsers;
