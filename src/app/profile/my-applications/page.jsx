"use client";
import React, { useContext } from "react";
import styles from "./my-applications.module.css";
import { myApplicationspicture } from "../../public/assets/imagesCodes";
import Image from "next/image";
import MyApplicationsCards from "../../components/jobsComponents/jobsOfferCardContainerForMyApplications/myApplicationsCards";
import { GlobalContext } from "../layout";
import { getLayout } from "../layout";
import { useSearchParams } from "next/navigation";

function MyApplications(props) {
  const { user } = useContext(GlobalContext);

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.postContainer}></div>
        <MyApplicationsCards />
        <div className={styles.pictureContainer}>
          <Image src={myApplicationspicture} alt="myApplicationspicture" />
        </div>
      </div>
    </div>
  );
}
MyApplications.getLayout = getLayout;
export default MyApplications;
