"use client";

import React, { useEffect, useState } from "react";
import styles from "./myprofile.module.css";
import FileUploader from "../../components/FileUploaderCompanies/fileUploader";
import axios from "axios";
import PutCompanies from "../../components/profileCompaniesPutModal/putCompanies";
import { useRouter } from 'next/navigation';

function MyProfileCompanies() {
  const [companyId, setCompanyId] = useState(null);
  const [companyData, setCompanyData] = useState(null);
  const router = useRouter();

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

  const deactivateAccount = async () => {
    try {
      const { data } = await axios.post('/api/deactivateCompany', {
        companyId: companyId
      })

      if(data.success === true){
        router.push('/landing')
      } else {
        alert('There was an error trying to deactivate the account')
      }
    } catch (error) {
      console.log(error);
    }
  }


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
      <button onClick={deactivateAccount}>Deactivate account</button>
    </div>
  );
}

export default MyProfileCompanies;
