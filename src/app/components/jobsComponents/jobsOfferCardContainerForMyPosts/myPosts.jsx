import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import JobsOfferCard from "../JobsOfferCardsComponents/JobsOffer Card/JobsOfferCard";
import { GlobalContext } from "@/src/app/company/layout";

const MyPostsCards = () => {
  const [jobs, setJobs] = useState([]);
  const { companies } = useContext(GlobalContext);

  // Obteniendo la compañía del localStorage
  const localStorageData = localStorage.getItem("companyData");
  console.log("localStorageData:", localStorageData);

  const companyData = JSON.parse(localStorageData);
  console.log("companyData:", companyData);

  const companyId = companyData.id; // Aquí obtenemos el ID de la compañía

  useEffect(() => {
    axios.get("/api/vacancies").then((response) => {
      const jobsFromServer = response.data;
      const filteredJobs = jobsFromServer.filter(
        (job) => job.companyId === companyId // Aquí comparamos con el ID de la compañía
      );
      setJobs(filteredJobs);
    });
  }, [companies]);

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
          />
        );
      })}
    </div>
  );
};

export default MyPostsCards;
