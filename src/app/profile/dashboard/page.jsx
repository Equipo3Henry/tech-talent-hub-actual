"use client";
import SearchBar from "../../components/generalComponents/SearchBar/searchBar";
import JobsOfferCardsContainerForHome from "../../components/jobsComponents/JobsOfferCardsComponents/JobsOfferCardsContainerForHomePage/JobsOfferCardsContainerForHomePage";
import styles from "./homePage.module.css";
import SelectsContainer from "../../components/generalComponents/selectComponent/SelectContainer/SelectContainer";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../layout";
import { getLayout } from "../layout";

function homePage() {
  const { jobs } = useContext(GlobalContext);
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
          {console.log(jobs)}
          <div className={styles.jobsDetailContainer}></div>
        </div>
      </div>
    </div>
  );
}
homePage.getLayout = getLayout;

export default homePage;
