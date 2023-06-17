"use client";
import SearchBar from "../../components/generalComponents/SearchBar/searchBar";
import JobsOfferCardsContainerForHome from "../../components/jobsComponents/JobsOfferCardsComponents/JobsOfferCardsContainerForHomePage/JobsOfferCardsContainerForHomePage";
import styles from "./homePage.module.css";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../layout";
import { getLayout } from "../layout";
import FiltersSelectorProfile from "../../components/SelectorFiltersForProfiles/Selectors";
import { useEffect } from "react";
import axios from "axios";

function homePage() {
  const { jobs, setJobs } = useContext(GlobalContext);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedProgLanguage, setSelectedProgLanguage] = useState("");
  const [selectedSeniority, setSelectedSeniority] = useState("");
  const [selectedSpec, setSelectedSpec] = useState("");
  const [selectedWorkday, setSelectedWorkday] = useState("");

  useEffect(() => {
    const fetchFilteredJobs = async () => {
      const url = "http://localhost:3000/api/vacanciesFilters";
      const params = {};

      if (selectedProgLanguage) {
        params.progLanguage = selectedProgLanguage;
      }

      if (selectedSeniority) {
        params.seniority = selectedSeniority;
      }

      if (selectedSpec) {
        params.spec = selectedSpec;
      }

      if (selectedWorkday) {
        params.workday = selectedWorkday;
      }

      try {
        const response = await axios.get(url, { params });
        setJobs(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    if (
      selectedProgLanguage ||
      selectedSeniority ||
      selectedSpec ||
      selectedWorkday
    ) {
      fetchFilteredJobs();
    }
  }, [selectedProgLanguage, selectedSeniority, selectedSpec, selectedWorkday]);

  const handleJobSelect = (jobId) => {
    const jobDetail = jobs.find((job) => job.id === jobId);
    setSelectedJob(jobDetail);
  };

  return (
    <div className={styles.globalContainer}>
      <SearchBar />
      <br />
      <FiltersSelectorProfile
        setSelectedProgLanguage={setSelectedProgLanguage}
        setSelectedSeniority={setSelectedSeniority}
        setSelectedSpec={setSelectedSpec}
        setSelectedWorkday={setSelectedWorkday}
      />
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
