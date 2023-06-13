"use client";
import React from "react";
import styles from "./jobs.module.css";
import jobsTemplate from "../../helpers/provisionalDB";
import JobsOfferCardsContainer from "../../components/JobsOfferCardsComponents/JobsOfferCardsContainer/JobsOfferCardsContainer";
import Image from "next/image";
import { samplepost } from "@/assets/page";

const jobs = jobsTemplate;

const JobsLanding = () => {
  return (
    <div>
      <div className={styles.allContainer}>
        <h1 className={styles.title}>Sample Posts</h1>
        <div className={styles.container}>
          <div className={styles.JobsContainer}>
            <JobsOfferCardsContainer jobs={jobs} />
          </div>
          <div className={styles.ImageContainer}></div>
          <Image src={samplepost} alt="imagen" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default JobsLanding;
