"use client";
import SearchBar from "@/src/app/components/generalComponents/SearchBar/searchBar";
import UserOfferCardsContainerForDashboard from "@/src/app/components/usersComponents/UserOfferComponents/UserOffereCardsContainer/UserOfferCardsContainer";
import styles from "./dashboard.module.css";
//import { usersTemplate } from "@/src/app/helpers/provisionalDB";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import FiltersSelector from "../../components/SelectorFiltersForCompanyDashboard/filtrosCombinados";

function dashboardPage() {
  const [users, setUsers] = useState([]);
  const [selectedProgLanguage, setSelectedProgLanguage] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedSeniority, setSelectedSeniority] = useState("");
  const [selectedSoftSkill, setSelectedSoftSkill] = useState("");

  useEffect(() => {
    // Hook para cargar todos los usuarios al cargar la página
    const fetchAllUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users");
        setUsers(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchAllUsers();
  }, []);

  useEffect(() => {
    const fetchFilteredUsers = async () => {
      const url = "http://localhost:3000/api/usersFilters";
      const params = {};

      if (selectedProgLanguage) {
        params.progLanguage = selectedProgLanguage;
      }

      if (selectedSeniority) {
        params.seniority = selectedSeniority;
      }

      if (selectedSoftSkill) {
        params.softSkill = selectedSoftSkill;
      }

      try {
        const response = await axios.get(url, { params });
        setUsers(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    if (selectedProgLanguage || selectedSeniority || selectedSoftSkill) {
      fetchFilteredUsers();
    }
  }, [selectedProgLanguage, selectedSeniority, selectedSoftSkill]);

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

export default dashboardPage;
