"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export default function Layout({ children }) {
  const [users, setUsers] = useState([]);
  const [selectedProgLanguage, setSelectedProgLanguage] = useState("");
  const [dataUsers, setDataUsers] = useState([]);
  const [selectedSeniority, setSelectedSeniority] = useState("");
  const [selectedSoftSkill, setSelectedSoftSkill] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/users");
      setDataUsers(response.data);
      setUsers(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchFilteredUsers = async () => {
      const url = "/api/usersFilters";
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

    selectedProgLanguage || selectedSeniority || selectedSoftSkill
      ? fetchFilteredUsers()
      : setUsers(dataUsers);
  }, [selectedProgLanguage, selectedSeniority, selectedSoftSkill]);

  return (
    <GlobalContext.Provider
      value={{
        users,
        setSelectedProgLanguage,
        setSelectedSeniority,
        setSelectedSoftSkill,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function getLayout(page) {
  return <Layout>{page}</Layout>;
}
