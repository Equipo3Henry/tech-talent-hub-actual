"use client";

import SearchBar from "../../components/generalComponents/SearchBar/searchBar";
import JobsOfferCardsContainerForHome from "../../components/jobsComponents/JobsOfferCardsComponents/JobsOfferCardsContainerForHomePage/JobsOfferCardsContainerForHomePage";
import styles from "./homePage.module.css";
import React, { useContext } from "react";
import { GlobalContext } from "../layout";
import { getLayout } from "../layout";
import FiltersSelectorProfile from "../../components/SelectorFiltersForProfiles/Selectors";
import Link from "next/link";
import Hi from "../../components/hi/hiUsers";
import { useEffect } from "react";

function HomePage() {
  const {
    jobs,
    isLoading,
    user,
    setSelectedProgLanguage,
    setSelectedSeniority,
    setselectedNameVacancy,
    setSelectedWorkday,
    setSearchValue,
    setUser,
  } = useContext(GlobalContext);

  useEffect(() => {
    const localStorageData = localStorage.getItem("userData");
    const userData = JSON.parse(localStorageData);
    setUser(userData);
    console.log(userData);
  }, []);

  console.log("user", user);
  console.log("jobs", jobs);

  return (
    <div className={styles.globalContainer}>
      <div className={styles.botonContenedor}>
        {user && <Hi user={user} />}
        <SearchBar setSearchValue={setSearchValue} /> <br />
        {user && user.superAdmin && (
          <div className={styles.contenedorBoton}>
            <Link href={"./superAdmin"}>
              <button className={styles.superAdminButton}>
                Admin Dashboard{" "}
              </button>
            </Link>
          </div>
        )}
      </div>
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
            ) : jobs?.length ? (
              <JobsOfferCardsContainerForHome jobs={jobs} user={user} />
            ) : (
              <h3>There are no vacancies matching the search</h3>
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
