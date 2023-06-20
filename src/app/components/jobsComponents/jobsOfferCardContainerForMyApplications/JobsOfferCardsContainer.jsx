// JobsOfferCardsContainer.js
import React from "react";
import styles from "./JobsOfferCardsContainer.module.css";
import JobsOfferCard from "../JobsOfferCardsComponents/JobsOffer Card/JobsOfferCard";

const JobsOfferCardsContainer = ({ jobs }) => {
  // Asegúrate de que jobs sea una lista antes de mapearla.
  if (!Array.isArray(jobs)) return null;

  // Si quieres solo los primeros cinco trabajos puedes hacerlo así:
  const firstFiveJobs = jobs.slice(0, 5);

  return (
    <div className={styles.ContainerJobs}>
      {firstFiveJobs.map((job, index) => {
        // Aquí es donde debes acceder a la propiedad company.
        const companyName = job.company && job.company.name;
        return (
          <JobsOfferCard
            key={index}
            id={job.id}
            company={companyName}
            name_Vacancy={job.name_Vacancy}
            showButton={true}
            showSpan={false}
          />
        );
      })}
    </div>
  );
};

export default JobsOfferCardsContainer;
