import React from "react";
import styles from "./myprofile.module.css";
import FileUploader from "../../components/FileUploaderCompanies/fileUploader";

function MyProfileCompanies() {
  return (
    <div className={styles.page_container}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>My Profile</h1>
        <p className={styles.p}>
          Here you can modify your personal data and upload your profile
          picture.
        </p>
      </div>

      <div className={styles.content_container}>
        <div className={styles.modifyInfo_container}>
          <button className={styles.button}>Modify Info</button>
        </div>
        <div className={styles.fileUploader_container}>
          <FileUploader />
        </div>
      </div>
    </div>
  );
}

export default MyProfileCompanies;
