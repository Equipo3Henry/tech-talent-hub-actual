"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export default function Layout({ children }) {
  const [dataJobs, setDataJobs] = useState([]);
  const [jobs, setJobs] = useState([]);

  const [selectedProgLanguage, setSelectedProgLanguage] = useState("");
  const [selectedSeniority, setSelectedSeniority] = useState("");
  const [selectedNameVacancy, setselectedNameVacancy] = useState("");
  const [selectedWorkday, setSelectedWorkday] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [user, setUser] = useState(null);
  const [companies, setCompanies] = useState(null);
  const [allUsers, setAllUsers] = useState(null);
  const [allCompanies, setAllCompanies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/vacancies");
      setIsLoading(true); // comenzamos la carga
      setDataJobs(response.data);
      setJobs(response.data);
      setIsLoading(false); // terminamos la carga
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
    setIsLoading(true);
    const fetchSearchVacancies = async () => {
      const response = await axios.get(`/api/searchVacancies?q=${searchValue}`);
      setJobs(response.data);
      setIsLoading(false);
    };
    fetchSearchVacancies();
  }, [searchValue]);

  useEffect(() => {
    const fetchFilteredJobs = async () => {
      const url = "/api/vacanciesFilters";
      const params = {};
      setIsLoading(true);

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
        setIsLoading(false);
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
        companies,
        allUsers,
        allCompanies,
        isLoading,
        setSelectedProgLanguage,
        setSelectedSeniority,
        setselectedNameVacancy,
        setSelectedWorkday,
        setSearchValue,
        setUser,
        setCompanies,
        setAllUsers,
        setIsLoading,
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
