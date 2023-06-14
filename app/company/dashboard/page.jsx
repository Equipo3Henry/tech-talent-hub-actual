"use client";
import SearchBar from "@/components/generalComponents/SearchBar/searchBar";
import UserOfferCardsContainerForDashboard from "@/components/usersComponents/UserOfferComponents/UserOffereCardsContainer/UserOfferCardsContainer";
import styles from "./dashboard.module.css";
import { usersTemplate } from "@/helpers/provisionalDB";
import React, { useState } from "react";
import SelectsContainer from "@/components/generalComponents/selectComponent/SelectContainer/SelectContainer";

const users = usersTemplate;

function dashboardPage() {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserSelect = (userId) => {
    const userDetail = users.find((user) => user.id === userId);
    setSelectedUser(userDetail);
  };
  return (
    <div className={styles.globalContainer}>
      <SearchBar />
      <br />
      <SelectsContainer />
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

export default dashboardPage;
