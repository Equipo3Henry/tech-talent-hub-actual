"use client";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const GlobalContext = createContext();

export default function Layout({ children }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/vacancies");
      setJobs(response.data);
    };
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider value={{ jobs }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function getLayout(page) {
  return <Layout>{page}</Layout>;
}