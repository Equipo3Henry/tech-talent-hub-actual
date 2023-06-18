"use client";
import SearchBar from "../../components/generalComponents/SearchBar/searchBar";
import JobsOfferCardsContainerForHome from "../../components/jobsComponents/JobsOfferCardsComponents/JobsOfferCardsContainerForHomePage/JobsOfferCardsContainerForHomePage";
import styles from "./homePage.module.css";
import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../layout";
import { getLayout } from "../layout";
import FiltersSelectorProfile from "../../components/SelectorFiltersForProfiles/Selectors";
import axios from "axios";

function HomePage() {
  const { jobs, setJobs } = useContext(GlobalContext);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedProgLanguage, setSelectedProgLanguage] = useState("");
  const [selectedSeniority, setSelectedSeniority] = useState("");
  const [selectedSpec, setSelectedSpec] = useState("");
  const [selectedWorkday, setSelectedWorkday] = useState("");

  useEffect(() => {
    const fetchFilteredJobs = async () => {
      const url = "api/vacanciesFilters";
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
          <div className={styles.jobsDetailContainer}></div>
        </div>
      </div>
    </div>
  );
}
HomePage.getLayout = getLayout;

export default HomePage;
