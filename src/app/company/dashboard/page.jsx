"use client";
import React, { useContext, useEffect } from "react";
import SearchBar from "@/src/app/components/generalComponents/SearchBar/searchBar";
import UserOfferCardsContainerForDashboard from "@/src/app/components/usersComponents/UserOfferComponents/UserOffereCardsContainer/UserOfferCardsContainer";
import styles from "./dashboard.module.css";
import FiltersSelector from "../../components/SelectorFiltersForCompanyDashboard/filtrosCombinados";
import { GlobalContext } from "../layout";
import { getLayout } from "../layout";
import { useState } from "react";
import Hi from "../../components/hi/hiCompanies";

function DashboardPage() {
  const {
    users,
    compData,
    setSelectedProgLanguage,
    setSelectedSeniority,
    setSelectedSoftSkill,
    setSelectedSpecialization,
    setSearchValue,
    setCompanies,
  } = useContext(GlobalContext);
  const [companyData, setCompanyData] = useState(null);

  //? USE STATE LOADER
  const [isLoading, setIsLoading] = useState(true);

  console.log(users);

  useEffect(() => {
    const localStorageData = localStorage.getItem("companyData");
    if (localStorageData) {
      const companyDataFromStorage = JSON.parse(localStorageData);
      console.log(companyDataFromStorage); // Log the data here
      setCompanyData(companyDataFromStorage);
      setIsLoading(false);
    } else {
      console.log("No data in localStorage");
      console.log(companyData);
    }
  }, []);
  return (
    <div className={styles.globalContainer}>
      <div className={styles.tituloContenedor}>
        {companyData && <Hi companyData={companyData} />}
        <SearchBar setSearchValue={setSearchValue} />
      </div>
      <br />
      <FiltersSelector
        setSelectedProgLanguage={setSelectedProgLanguage}
        setSelectedSeniority={setSelectedSeniority}
        setSelectedSoftSkill={setSelectedSoftSkill}
        setSelectedSpecialization={setSelectedSpecialization}
      />
      <br />
      {isLoading ? (
        <div className={styles.loaderContainer}>
          <div className={styles.spinner}></div>
        </div>
      ) : (
        <div className={styles.contenedorPadre}>
          <div className={styles.forniculo}>
            <div className={styles.usersContainer}>
              {users.length === 0 ? (
                <h3>There are no users matching the search</h3>
              ) : null}
              <UserOfferCardsContainerForDashboard
                users={users}
                companyData={companyData}
                isLoading={isLoading}
              />
              <div className={styles.usersDetailContainer}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

DashboardPage.getLayout = getLayout;
export default DashboardPage;
