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

function DashboardPage() {
  const {
    users,
    compData,
    setSelectedProgLanguage,
    setSelectedSeniority,
    setSelectedSoftSkill,
    setSearchValue,
    setCompanies,
  } = useContext(GlobalContext);
  const [companyData, setCompanyData] = useState(null);

  useEffect(() => {
    const localStorageData = localStorage.getItem("companyData");
    if (localStorageData) {
      const companyDataFromStorage = JSON.parse(localStorageData);
      console.log(companyDataFromStorage); // Log the data here
      setCompanyData(companyDataFromStorage);
    } else {
      console.log("No data in localStorage");
    }
  }, []); // Dependency array

  /*   const params = useSearchParams();
  const companyData = JSON.parse(params.get("companyData"));

  useEffect(() => {
    const localStorageData = localStorage.getItem("companyData");
    const companyData = JSON.parse(localStorageData);
    console.log(companyData); // Log the data here
    setCompanies(companyData);
  }, []); // Dependency array */

  return (
    <div className={styles.globalContainer}>
      <SearchBar setSearchValue={setSearchValue} />

      <br />
      <FiltersSelector
        setSelectedProgLanguage={setSelectedProgLanguage}
        setSelectedSeniority={setSelectedSeniority}
        setSelectedSoftSkill={setSelectedSoftSkill}
      />
      <br />
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
  );
}

DashboardPage.getLayout = getLayout;
export default DashboardPage;
