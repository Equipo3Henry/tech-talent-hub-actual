"use client";
import React, { useState, useContext, useEffect } from "react";
import SearchBar from "@/src/app/components/generalComponents/SearchBar/searchBar";
import UserOfferCardsContainerForDashboard from "@/src/app/components/usersComponents/UserOfferComponents/UserOffereCardsContainer/UserOfferCardsContainer";
import styles from "./dashboard.module.css";
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

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/searchUsers?q=");
      const data = await res.json();
      setSearchResults(data);
    };
    fetchUsers();
  }, []);

  const handleUserSelect = (userId) => {
    const userDetail = searchResults.find((user) => user.id === userId);
    setSelectedUser(userDetail);
  };

  const handleSearch = async (searchValue) => {
    if (searchValue) {
      const res = await fetch(`/api/searchUsers?q=${searchValue}`);
      const data = await res.json();
      setSearchResults(data);
    } else {
      const res = await fetch("/api/searchUsers?q=");
      const data = await res.json();
      setSearchResults(data);
    }
  };

  return (
    <div className={styles.globalContainer}>
      <SearchBar onSearch={handleSearch} />

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
            users={searchResults}
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
