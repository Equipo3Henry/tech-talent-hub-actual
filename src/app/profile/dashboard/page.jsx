"use client";
import SearchBar from "../../components/generalComponents/SearchBar/searchBar";
import JobsOfferCardsContainerForHome from "../../components/jobsComponents/JobsOfferCardsComponents/JobsOfferCardsContainerForHomePage/JobsOfferCardsContainerForHomePage";
import styles from "./homePage.module.css";
import React, { useContext } from "react";
import { GlobalContext } from "../layout";
import { getLayout } from "../layout";
import FiltersSelectorProfile from "../../components/SelectorFiltersForProfiles/Selectors";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function HomePage() {
  const {
    jobs,
    user,
    setSelectedProgLanguage,
    setSelectedSeniority,
    setselectedNameVacancy,
    setSelectedWorkday,
    setSearchValue,
    setUser,
  } = useContext(GlobalContext);

  //? USE STATE LOADER
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const localStorageData = localStorage.getItem("userData");
    const userData = JSON.parse(localStorageData);
    setUser(userData);
    setIsLoading(false);
  }, []); // Dependency a

  //  console.log(`yo soy ${userData}`);
  console.log(user);

  return (
    <div className={styles.globalContainer}>
      <SearchBar setSearchValue={setSearchValue} /> <br />
      <FiltersSelectorProfile
        setSelectedProgLanguage={setSelectedProgLanguage}
        setSelectedSeniority={setSelectedSeniority}
        setselectedNameVacancy={setselectedNameVacancy}
        setSelectedWorkday={setSelectedWorkday}
      />
      <br />
      <div className={styles.contenedorPadre}>
        <div className={styles.forniculo}>
          <div className={styles.jobsContainer}>
            {isLoading ? (
              <div className={styles.loaderContainer}>
                <div className={styles.spinner}></div>
              </div>
            ) : (
              <JobsOfferCardsContainerForHome jobs={jobs} user={user} />
            )}
            <div className={styles.jobsDetailContainer}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
HomePage.getLayout = getLayout;

export default HomePage;
