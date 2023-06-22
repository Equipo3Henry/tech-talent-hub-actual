"use client";
import SearchBar from "../../components/generalComponents/SearchBar/searchBar";
import JobsOfferCardsContainerForHome from "../../components/jobsComponents/JobsOfferCardsComponents/JobsOfferCardsContainerForHomePage/JobsOfferCardsContainerForHomePage";
import styles from "./homePage.module.css";
import React, { useContext } from "react";
import { GlobalContext } from "../layout";
import { getLayout } from "../layout";
import FiltersSelectorProfile from "../../components/SelectorFiltersForProfiles/Selectors";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

function HomePage() {
  const {
    jobs,
    user,
    setSelectedProgLanguage,
    setSelectedSeniority,
    setSelectedSpec,
    setSelectedWorkday,
    setSearchValue,
    setUser,
  } = useContext(GlobalContext);

  const params = useSearchParams();
  const userData = JSON.parse(params.get("userData"));

  useEffect(() => {
    const localStorageData = localStorage.getItem("userData");
    const userData = JSON.parse(localStorageData);
    setUser(userData);
  }, []); // Dependency a

  console.log(user);

  return (
    <div className={styles.globalContainer}>
      <SearchBar setSearchValue={setSearchValue} /> <br />
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
