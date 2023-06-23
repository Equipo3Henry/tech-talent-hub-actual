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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const localStorageData = localStorage.getItem("companyData");
    const parsedData = localStorageData ? JSON.parse(localStorageData) : null;

    if (parsedData) {
      setCompanyData(parsedData);
      setCompanyId(parsedData.id);
      setCompanyPicture(parsedData.logo_Company);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.page_container}>
        <div className={styles.posts_container}>
          <MyPostsCards companyId={companyId} />
        </div>
        <h1>My Posts</h1>

        <FormMyPosts parsedData={companyData} />
      </div>
    </>
  );
}

export default MyPosts;
