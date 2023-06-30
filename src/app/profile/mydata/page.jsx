"use client";

import React, { useEffect, useState } from "react";
import styles from "./myprofile.module.css";
import FileUploader from "../../components/FileUploaderUsers/fileUploader";
import axios from "axios";
import PutUsers from "../../components/profileUsersPutModal/putUsers";
import Services from "../../services/page";
import { useRouter } from 'next/navigation';

function MyProfileUsers() {
  const [userId, setUserId] = useState(null);
  const [userData, setUserData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
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

  const deactivateAccount = async () => {
    try {
      const { data } = await axios.post('/api/deactivateUser', {
        userId: userId
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
      {userData && userData.remainingPremiumDays !== 0 ?
        <span>Remaining premium days: {userData.remainingPremiumDays}</span>
        : null}
      {userData && userData.remainingPremiumDays < 7 && userData.remainingPremiumDays !== 0 ?
        <h3>Your subscription is about to expire, please upgrade your plan to continue enjoying the premium benefits!</h3>
        : null}
      <Services />
      <button onClick={deactivateAccount}>Deactivate account</button>
    </div>
  );
}

export default MyProfileUsers;
