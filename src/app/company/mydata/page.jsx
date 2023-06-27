"use client";

import React, { useEffect, useState } from "react";
import styles from "./myprofile.module.css";
import FileUploader from "../../components/FileUploaderCompanies/fileUploader";
import axios from "axios";
import PutCompanies from "../../components/profileCompaniesPutModal/putCompanies";

function MyProfileCompanies() {
  const [companyId, setCompanyId] = useState(null);
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    const storedCompanyData = JSON.parse(localStorage.getItem("companyData"));
    const companyId = storedCompanyData?.id; // Cambio aquí de userId a id
    setCompanyId(companyId);
    console.log(`Company ID from localStorage: ${companyId}`);
  }, []);

  useEffect(() => {
    const storedCompanyData = JSON.parse(localStorage.getItem("companyData"));
    const companyId = storedCompanyData?.id;
    setCompanyId(companyId);
    console.log(`Company ID from localStorage: ${companyId}`);

    const fetchCompanyData = async () => {
      try {
        const response = await axios.get(`/api/companies/${companyId}`);
        setCompanyData(response.data);
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };

    if (companyId) {
      fetchCompanyData();
    }
  }, []);

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
          <PutCompanies companyData={companyData} />
        </div>
        <div className={styles.fileUploader_container}>
          <FileUploader companyId={companyId} />
        </div>
      </div>
    </div>
  );
}

export default MyProfileCompanies;
