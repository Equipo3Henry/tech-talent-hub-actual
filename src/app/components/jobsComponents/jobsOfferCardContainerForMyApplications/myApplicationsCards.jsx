import React, { useEffect, useState } from "react";
import axios from "axios";
import JobsOfferCard from "../JobsOfferCardsComponents/JobsOffer Card/JobsOfferCard";

const userId = "30cc77b2-5334-4358-a3bd-c74d5eacc9d1";

const MyApplicationsCards = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("/api/vacancies")
      .then((response) => {
        const jobsFromServer = response.data;
        const filteredJobs = jobsFromServer.filter((job) =>
          job.applicants.some((applicant) => applicant.id === userId)
        );
        setJobs(filteredJobs);
        console.log(jobs); // Agrega esta línea
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
      });
  }, []);

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
          />
        );
      })}
    </div>
  );
};

export default MyApplicationsCards;
