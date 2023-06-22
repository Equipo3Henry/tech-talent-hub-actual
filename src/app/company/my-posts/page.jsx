"use client";
import React from "react";
import FormMyPosts from "../../components/myposts-companies/formMyPosts";
import styles from "./myposts.module.css";
import { myApplicationspicture } from "../../public/assets/imagesCodes";
import Image from "next/image";
import MyPostsCards from "../../components/jobsComponents/jobsOfferCardContainerForMyPosts/myPosts";

function MyPosts(props) {
  return (
    <>
      <div className={styles.page_container}>
        <div className={styles.posts_container}>
          <MyPostsCards />
        </div>
        <h1>My Posts</h1>

        <FormMyPosts />
      </div>
    </>
  );
}

export default MyPosts;
