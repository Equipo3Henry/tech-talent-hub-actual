import React from "react";
import styles from "./JobsOfferCardsContainer.module.css";
import JobsOfferCard from "../JobsOffer Card/JobsOfferCard";

const JobsOfferCardsContainer = ({ jobs }) => {
  const companyName = jobs.company && jobs.company.name;

  return (
    <div className={styles.ContainerJobs}>
      {firstFiveJobs.map((job, index) => (
        <JobsOfferCard
          key={index}
          id={job.id}
          company={companyName}
          /*           logo_Company={job.logo_Company}
           */ name_Vacancy={job.name_Vacancy}
          /*           seniority={job.seniority}
           */ showButton={true}
          showSpan={false}
        />
      ))}
    </div>
  );
};

export default JobsOfferCardsContainer;
