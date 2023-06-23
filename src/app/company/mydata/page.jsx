import React from "react";
import styles from "./myprofile.module.css";
import FileUploader from "../../components/FileUploaderCompanies/fileUploader";
import PutCompanies from "../../components/profileCompaniesPutModal/putCompanies";

function MyProfileCompanies() {
  return (
    <div className={styles.page_container}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>My Profile</h1>
        <p className={styles.p}>
          Here you can modify your personal info and upload your profile
          picture.
        </p>
      </div>

      <div className={styles.content_container}>
        <div className={styles.modifyInfo_container}>
          <PutCompanies />
        </div>
        <div className={styles.fileUploader_container}>
          <FileUploader />
        </div>
      </div>
    </div>
  );
}

export default MyProfileCompanies;
