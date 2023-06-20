"use client";
import React from "react";
import FormMyPosts from "../../components/myposts-companies/formMyPosts";
import styles from "./myposts.module.css";

function myApplications(props) {
  return (
    <>
      <div className={styles.page_container}>
        <h1>My Posts</h1>

        <FormMyPosts />
      </div>
    </>
  );
}

export default myApplications;
