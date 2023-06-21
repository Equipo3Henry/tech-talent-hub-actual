"use client";
import React from "react";
import styles from "./my-applications.module.css";
import { myApplicationspicture } from "../../public/assets/imagesCodes";
import Image from "next/image";
import JobsOfferCardsContainerForHome from "../../components/jobsComponents/JobsOfferCardsComponents/JobsOfferCardsContainerForHomePage/JobsOfferCardsContainerForHomePage";
import MyApplicationsCards from "../../components/jobsComponents/jobsOfferCardContainerForMyApplications/myApplicationsCards";
import { GlobalContext } from "../layout";
import { getLayout } from "../layout";
import { useSearchParams } from "next/navigation";

//traer las cards de los posts que el usuario aplico

function myApplications(props) {
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
myApplications.getLayout = getLayout;
export default myApplications;
