"use client";
import SearchBar from "../../components/generalComponents/SearchBar/searchBar";
import JobsOfferCardsContainerForHome from "../../components/jobsComponents/JobsOfferCardsComponents/JobsOfferCardsContainerForHomePage/JobsOfferCardsContainerForHomePage";
import styles from "./homePage.module.css";
import React, { useContext } from "react";
import { GlobalContext } from "../layout";
import { getLayout } from "../layout";
import FiltersSelectorProfile from "../../components/SelectorFiltersForProfiles/Selectors";
import { useEffect, useState } from "react";
import Link from "next/link";
import Hi from "../../components/hi/hiUsers";

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
    console.log(userData); // <== Agrega esta línea
  }, []); // Dependency array

  console.log(`mi nombre es ${user}`);

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
            ) : (
              jobs && <JobsOfferCardsContainerForHome jobs={jobs} user={user} />
            )}
            <div className={styles.jobsDetailContainer}></div>
          </div>
        </div>
        {jobs.length === 0 ?
          <h3>There are no vacancies matching the search</h3> : null
        }
      </div>
    </div>
  );
}
HomePage.getLayout = getLayout;

export default HomePage;
