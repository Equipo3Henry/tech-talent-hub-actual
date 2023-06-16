"use client";
import SearchBar from "../../components/generalComponents/SearchBar/searchBar";
import JobsOfferCardsContainerForHome from "../../components/jobsComponents/JobsOfferCardsComponents/JobsOfferCardsContainerForHomePage/JobsOfferCardsContainerForHomePage";
import styles from "./homePage.module.css";
import { jobsTemplate } from "../../helpers/provisionalDB";
import JobsOfferDetail from "../../components/jobsComponents/JobsOfferDetail/JobsOfferDetail";
import React, { useState } from "react";
import SelectsContainer from "../../components/generalComponents/selectComponent/SelectContainer/SelectContainer";

const jobs = jobsTemplate;
function homePage() {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleJobSelect = (jobId) => {
    const jobDetail = jobs.find((job) => job.id === jobId);
    setSelectedJob(jobDetail);
  };

  return (
    <div className={styles.globalContainer}>
      <SearchBar />
      <br />
      <SelectsContainer />
      <br />
      <div className={styles.forniculo}>
        <div className={styles.jobsContainer}>
          <JobsOfferCardsContainerForHome
            jobs={jobs}
            onJobSelect={handleJobSelect}
          />
          <div className={styles.jobsDetailContainer}></div>
        </div>
      </div>
    </div>
  );
}
export default homePage;
