"use client";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import JobsOfferCard from "../JobsOfferCardsComponents/JobsOffer Card/JobsOfferCard";
import { GlobalContext } from "@/src/app/company/layout";

const MyPostsCards = () => {
  const [jobs, setJobs] = useState([]);
  const { companies } = useContext(GlobalContext);

  useEffect(() => {
    // Obteniendo la compañía del localStorage si está disponible
    const localStorageData =
      typeof localStorage !== "undefined"
        ? localStorage.getItem("companyData")
        : null;
    const companyData = localStorageData ? JSON.parse(localStorageData) : null;
    const companyId = companyData ? companyData.id : null;

    if (companyId) {
      axios.get("/api/vacancies").then((response) => {
        const jobsFromServer = response.data;
        const filteredJobs = jobsFromServer.filter(
          (job) => job.companyId === companyId
        );
        setJobs(filteredJobs);
      });
    }
  }, [companies]);

  const handleFinishProcess = (jobId) => {
    const status = { isActive: false };
    const url = `/api/vacancies/${jobId}`;

    console.log(url);
    axios
      .put(`${url}`, { isActive: false })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setJobs(
            jobs.map((job) =>
              job.id === jobId
                ? { ...job, isActive: false, status: "ProccesCompleted" }
                : job
            )
          );
        }
      })
      .catch((error) => {
        console.error("Error updating job status", error);
      });
  };

  return (
    <div>
      {jobs.map((job, index) => {
        const companyName = job.company && job.company.name;
        return (
          <JobsOfferCard
            key={index}
            id={job.id}
            company={companyName}
            name_Vacancy={job.name_Vacancy}
            showButton={false}
            showSpan={true}
            start={job.start}
            onJobSelected={() => {}}
            applicants={`${job.applicants.length} candidates applied`}
            status={job.status}
            showFinishButton={true}
            onFinishProcess={handleFinishProcess}
          />
        );
      })}
    </div>
  );
};

export default MyPostsCards;
