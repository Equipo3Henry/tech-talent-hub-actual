"use client";
import SearchBar from "@/src/app/components/generalComponents/SearchBar/searchBar";
import UserOfferCardsContainerForDashboard from "@/src/app/components/usersComponents/UserOfferComponents/UserOffereCardsContainer/UserOfferCardsContainer";
import styles from "./dashboard.module.css";
import { usersTemplate } from "@/src/app/helpers/provisionalDB";
import React, { useState, useRef } from "react";
import SelectsContainer from "@/src/app/components/generalComponents/selectComponent/SelectContainer/SelectContainer";

const users = usersTemplate;

function dashboardPage() {

  const [selectedUser, setSelectedUser] = useState(null);
  const selectedValuesRef = useRef({});

  const handleUserSelect = (userId) => {
    const userDetail = users.find((user) => user.id === userId);
    setSelectedUser(userDetail);
  };

  const handleSelectChange = (values) => {
    selectedValuesRef.current = values;
    console.log(selectedValuesRef.current);
  };

  return (
    <div className={styles.globalContainer}>
      <SearchBar />
      <br />
      <SelectsContainer  onSelectChange={handleSelectChange}/>
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
