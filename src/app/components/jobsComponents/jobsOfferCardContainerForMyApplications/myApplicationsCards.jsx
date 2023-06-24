import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import JobsOfferCard from "../JobsOfferCardsComponents/JobsOffer Card/JobsOfferCard";
import { GlobalContext } from "../../../profile/layout"; // Asegúrate de que esta ruta es correcta

const MyApplicationsCards = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useContext(GlobalContext); // Accede al user del contexto global

  useEffect(() => {
    if (user && user.id) {
      axios
        .get("/api/vacancies")
        .then((response) => {
          const jobsFromServer = response.data;
          const filteredJobs = jobsFromServer.filter((job) =>
            job.applicants.some((applicant) => applicant.id === user.id)
          );
          setJobs(filteredJobs);
          console.log(jobs); // Agrega esta línea
        })
        .catch((error) => {
          console.error("Error fetching jobs:", error);
        });
    }
  }, [user]); // Actualiza la llamada a la API cada vez que el user cambia

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

export default MyApplicationsCards;
