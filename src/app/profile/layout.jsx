"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export default function Layout({ children }) {
  const [dataJobs, setDataJobs] = useState([]);
  const [jobs, setJobs] = useState([]);

  console.log(jobs); // Aquí se añade el console.log
  const [selectedProgLanguage, setSelectedProgLanguage] = useState("");
  const [selectedSeniority, setSelectedSeniority] = useState("");
  const [selectedSpec, setSelectedSpec] = useState("");
  const [selectedWorkday, setSelectedWorkday] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/vacancies");
      console.log(response.data); // Aquí se añade el console.log
      setDataJobs(response.data);
      setJobs(response.data);
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
        params.programming_Languajes = selectedProgLanguage;
      }

      if (selectedSeniority) {
        params.seniority = selectedSeniority;
      }

      if (selectedSpec) {
        params.spec = selectedSpec;
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

    selectedProgLanguage || selectedSeniority || selectedSpec || selectedWorkday
      ? fetchFilteredJobs()
      : setJobs(dataJobs);
  }, [selectedProgLanguage, selectedSeniority, selectedSpec, selectedWorkday]);

  return (
    <GlobalContext.Provider
      value={{
        jobs,
        user,
        setSelectedProgLanguage,
        setSelectedSeniority,
        setSelectedSpec,
        setSelectedWorkday,
        setSearchValue,
        setUser
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function getLayout(page) {
  return <Layout>{page}</Layout>;
}
