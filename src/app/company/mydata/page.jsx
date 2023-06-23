"use client";

import React, { useEffect, useState } from "react";
import styles from "./myprofile.module.css";
import FileUploader from "../../components/FileUploaderCompanies/fileUploader";

function MyProfileCompanies() {
  const [companyId, setCompanyId] = useState(null);

  useEffect(() => {
    const storedCompanyData = JSON.parse(
      window.localStorage.getItem("companyData")
    );
    const companyId = storedCompanyData?.id; // Cambio aquí de userId a id
    setCompanyId(companyId);
    console.log(`Company ID from localStorage: ${companyId}`);
  }, []);

  return (
    <div className={styles.page_container}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>My Profile</h1>
      </div>

      <div className={styles.content_container}>
        <div className={styles.modifyInfo_container}>
          <button className={styles.button}>Modify Info</button>
        </div>
        <div className={styles.fileUploader_container}>
          <FileUploader companyId={companyId} />
        </div>
      </div>
    </div>
  );
}

export default MyProfileCompanies;
