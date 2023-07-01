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
    isLoading,
  } = useContext(GlobalContext);
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    const localStorageData = localStorage.getItem("companyData");
    if (localStorageData) {
      const companyDataFromStorage = JSON.parse(localStorageData);
      console.log(companyDataFromStorage);
      setCompanyData(companyDataFromStorage);
    } else {
      console.log("No data in localStorage");
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
              ) : (
                <UserOfferCardsContainerForDashboard
                  users={users}
                  companyData={companyData}
                />
              )}
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
