"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export default function Layout({ children }) {
  const [dataJobs, setDataJobs] = useState([]);
  const [jobs, setJobs] = useState([]);

  // console.log(jobs); // Aquí se añade el console.log
  const [selectedProgLanguage, setSelectedProgLanguage] = useState("");
  const [selectedSeniority, setSelectedSeniority] = useState("");
  const [selectedNameVacancy, setselectedNameVacancy] = useState("");
  const [selectedWorkday, setSelectedWorkday] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [user, setUser] = useState(null);
  const [companies, setCompanies] = useState(null);
  const [allUsers, setAllUsers] = useState(null);
  const [allCompanies, setAllCompanies] = useState(null);
  const [fullUsers, setFullUsers] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/vacancies");
      setDataJobs(response.data);
      setJobs(response.data);
    };
    fetchData();
  }, []);

  const fetchActiveCompanies = async () => {
    const response = await axios.get("/api/companies");
    setCompanies(response.data);
  };

  const fetchAllCompanies = async () => {
    const response = await axios.get("/api/companies?includeInactive=true");
    setCompanies(response.data);
  };
  useEffect(() => {
    fetchAllCompanies();
  }, []);

  useEffect(() => {
    fetchActiveCompanies();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/users");
      setAllUsers(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchSearchVacancies = async () => {
      const response = await axios.get(`/api/searchVacancies?q=${searchValue}`);
      setJobs(response.data);
    };
    fetchSearchVacancies();
  }, [searchValue]);

  useEffect(() => {
    const fetchFilteredJobs = async () => {
      const url = "/api/vacanciesFilters";
      const params = {};

      if (selectedProgLanguage) {
        params.languajes = selectedProgLanguage;
      }

      if (selectedSeniority) {
        params.seniority = selectedSeniority;
      }

      if (selectedNameVacancy) {
        params.nameVacancy = selectedNameVacancy;
      }

      if (selectedWorkday) {
        params.workday = selectedWorkday;
      }

      try {
        const response = await axios.get(url, { params });
        setJobs(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    if (
      selectedProgLanguage ||
      selectedSeniority ||
      selectedNameVacancy ||
      selectedWorkday
    ) {
      console.log(
        selectedProgLanguage,
        selectedSeniority,
        selectedNameVacancy,
        selectedWorkday
      );
      //console.log(jobs)
      fetchFilteredJobs();
    } else if (jobs !== dataJobs) {
      setJobs(dataJobs);
    }
  }, [
    selectedProgLanguage,
    selectedSeniority,
    selectedNameVacancy,
    selectedWorkday,
  ]);

  return (
    <GlobalContext.Provider
      value={{
        jobs,
        user,
        setSelectedProgLanguage,
        setSelectedSeniority,
        setselectedNameVacancy,
        setSelectedWorkday,
        setSearchValue,
        setUser,
        companies,
        setCompanies,
        setAllUsers,
        allUsers,
        allCompanies,
        setAllCompanies,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function getLayout(page) {
  return <Layout>{page}</Layout>;
}
