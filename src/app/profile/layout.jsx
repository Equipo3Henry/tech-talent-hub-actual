"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export default function Layout({ children }) {
  const [jobs, setJobs] = useState([]);

  console.log(jobs); // Aquí se añade el console.log

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/vacancies");
      console.log(response.data); // Aquí se añade el console.log
      setJobs(response.data);
    };
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={{ jobs, setJobs }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function getLayout(page) {
  return <Layout>{page}</Layout>;
}
