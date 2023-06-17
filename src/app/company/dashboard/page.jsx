"use client";
import SearchBar from "@/src/app/components/generalComponents/SearchBar/searchBar";
import UserOfferCardsContainerForDashboard from "@/src/app/components/usersComponents/UserOfferComponents/UserOffereCardsContainer/UserOfferCardsContainer";
import styles from "./dashboard.module.css";
import React, { useContext } from "react";
import FiltersSelector from "../../components/SelectorFiltersForCompanyDashboard/filtrosCombinados";
import { GlobalContext } from "../layout";
import { getLayout } from "../layout";

function DashboardPage() {
  const {
    users,
    setSelectedProgLanguage,
    setSelectedSeniority,
    setSelectedSoftSkill,
  } = useContext(GlobalContext);

  const handleUserSelect = (userId) => {
    const userDetail = users.find((user) => user.id === userId);
    setSelectedUser(userDetail);
  };

  return (
    <div className={styles.globalContainer}>
      <SearchBar />
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
            onUserSelect={handleUserSelect}
          />
          <div className={styles.usersDetailContainer}></div>
        </div>
      </div>
    </div>
  );
}
DashboardPage.getLayout = getLayout;
export default DashboardPage;
