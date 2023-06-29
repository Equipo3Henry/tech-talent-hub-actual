"use client";
import React, { useContext, useEffect } from "react";
import SearchBar from "@/src/app/components/generalComponents/SearchBar/searchBar";
import UserOfferCardsContainerForDashboard from "@/src/app/components/usersComponents/UserOfferComponents/UserOffereCardsContainer/UserOfferCardsContainer";
import styles from "./dashboard.module.css";
import FiltersSelector from "../../components/SelectorFiltersForCompanyDashboard/filtrosCombinados";
import { GlobalContext } from "../layout";
import { getLayout } from "../layout";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";
import Hi from "../../components/hi/hiCompanies";

function DashboardPage() {
  const {
    users,
    compData,
    setSelectedProgLanguage,
    setSelectedSeniority,
    setSelectedSoftSkill,
    setSearchValue,
    setCompanies,
    setSelectedSpecialization,
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
              <UserOfferCardsContainerForDashboard
                users={users}
                companyData={companyData}
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
