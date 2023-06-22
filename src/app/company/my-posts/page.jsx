"use client";
import React from "react";
import FormMyPosts from "../../components/myposts-companies/formMyPosts";
import styles from "./myposts.module.css";
import { myApplicationspicture } from "../../public/assets/imagesCodes";
import Image from "next/image";
import MyPostsCards from "../../components/jobsComponents/jobsOfferCardContainerForMyPosts/myPosts";

function MyPosts(props) {
  const localStorageData = localStorage.getItem("companyData");
  console.log("localStorageData:", localStorageData);

  const companyData = JSON.parse(localStorageData);
  console.log("companyData:", companyData);

  const companyId = companyData.id;
  const companyPicture = companyData && companyData.logo_Company;
  return (
    <>
      <div className={styles.page_container}>
        <div className={styles.posts_container}>
          <MyPostsCards />
        </div>
        <h1>My Posts</h1>

        <FormMyPosts companyId={companyId} companyPicture={companyPicture} />
      </div>
    </>
  );
}

export default MyPosts;
