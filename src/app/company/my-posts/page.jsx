"use client";
import React from "react";
import FormMyPosts from "../../components/myposts-companies/formMyPosts";
import styles from "./myposts.module.css";
import { myApplicationspicture } from "../../public/assets/imagesCodes";
import Image from "next/image";
import MyPostsCards from "../../components/jobsComponents/jobsOfferCardContainerForMyPosts/myPosts";
import { useState, useEffect } from "react";

function MyPosts(props) {
  const [companyData, setCompanyData] = useState(null);
  const [companyId, setCompanyId] = useState(null);
  const [companyPicture, setCompanyPicture] = useState(null);

  useEffect(() => {
    const localStorageData = localStorage.getItem("companyData");
    const parsedData = localStorageData ? JSON.parse(localStorageData) : null;
    console.log("parsedData", parsedData);

    if (parsedData) {
      setCompanyData(parsedData);
      setCompanyId(parsedData.id);
      setCompanyPicture(parsedData.logo_Company);
    }
  }, []);

  return (
    <>
      <div className={styles.page_container}>
        <div className={styles.posts_container}>
          <h1>My Posts</h1>
          <MyPostsCards companyId={companyId} />

          <FormMyPosts parsedData={companyData} />
        </div>
      </div>
    </>
  );
}

export default MyPosts;
