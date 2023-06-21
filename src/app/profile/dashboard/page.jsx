"use client";
import SearchBar from "../../components/generalComponents/SearchBar/searchBar";
import JobsOfferCardsContainerForHome from "../../components/jobsComponents/JobsOfferCardsComponents/JobsOfferCardsContainerForHomePage/JobsOfferCardsContainerForHomePage";
import styles from "./homePage.module.css";
import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../layout";
import { getLayout } from "../layout";
import FiltersSelectorProfile from "../../components/SelectorFiltersForProfiles/Selectors";
import { useSearchParams } from "next/navigation";

function HomePage() {
  const params = useSearchParams();
  const userData = JSON.parse(params.get("userData"));
  console.log(userData);

  const {
    jobs,
    setSelectedProgLanguage,
    setSelectedSeniority,
    setSelectedSpec,
    setSelectedWorkday,
    setSearchValue,
  } = useContext(GlobalContext);

  return (
    <div className={styles.globalContainer}>
      <SearchBar setSearchValue={setSearchValue} />
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
          <JobsOfferCardsContainerForHome jobs={jobs} userData={userData} />

          <div className={styles.jobsDetailContainer}></div>
        </div>
      </div>
    </div>
  );
}
HomePage.getLayout = getLayout;

export default HomePage;
