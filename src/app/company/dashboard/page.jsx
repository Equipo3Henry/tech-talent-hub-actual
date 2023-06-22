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

  const params = useSearchParams();
  const companyData = JSON.parse(params.get("companyData"));

  useEffect(() => {
    const localStorageData = localStorage.getItem("companyData");
    const companyData = JSON.parse(localStorageData);
    setCompanies(companyData);
  }, []); // Dependency array

  console.log(compData);
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
          <UserOfferCardsContainerForDashboard users={users} />
          <div className={styles.usersDetailContainer}></div>
        </div>
      </div>
    </div>
  );
}

DashboardPage.getLayout = getLayout;
export default DashboardPage;
