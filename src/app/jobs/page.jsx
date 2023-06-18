"use client";
import React from "react";
import styles from "./jobs.module.css";
import { jobsTemplate } from "../helpers/provisionalDB";
import JobsOfferCardsContainer from "../components/jobsComponents/JobsOfferCardsComponents/JobsOfferCardsContainer/JobsOfferCardsContainer";
import Image from "next/image";
import { samplepost } from "../public/assets/imagesCodes";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

/* const jobs = jobsTemplate;
 */
const JobsLanding = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("api/vacancies")
      .then((res) => {
        console.log(res.data);
        setJobs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
