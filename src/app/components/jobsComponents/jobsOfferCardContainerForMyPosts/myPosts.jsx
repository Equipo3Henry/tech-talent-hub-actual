import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import JobsOfferCard from "../JobsOfferCardsComponents/JobsOffer Card/JobsOfferCard";
import { GlobalContext } from "@/src/app/company/layout";

const MyPostsCards = () => {
  const [jobs, setJobs] = useState([]);
  const { companies } = useContext(GlobalContext);
  const companyIds = ["02760436-867a-42cf-a9a6-84e7d4082bbe"]; // Agrega el ID de la empresa deseada al array

  useEffect(() => {
    axios.get("/api/vacancies").then((response) => {
      const jobsFromServer = response.data;
      const filteredJobs = jobsFromServer.filter((job) =>
        companyIds.includes(job.companyId)
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
