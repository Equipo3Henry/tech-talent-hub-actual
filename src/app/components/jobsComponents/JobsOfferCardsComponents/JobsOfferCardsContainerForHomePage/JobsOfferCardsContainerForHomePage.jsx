import React, { useState } from "react";
import styles from "../JobsOfferCardsContainer/JobsOfferCardsContainer.module.css";
import JobsOfferCard from "../JobsOffer Card/JobsOfferCard";
import formatDate from "../../../../helpers/formatDate";
import JobsOfferDetail from "../../JobsOfferDetail/JobsOfferDetail";

const JobsOfferCardsContainerForHome = ({ jobs }) => {
  const [selectedJobId, setSelectedJobId] = useState(null);

  const onJobSelected = (id) => {
    setSelectedJobId(id);
  };

  return (
    <div className={styles.forajido}>
      <div
        style={{
          maxHeight: "572px",
          overflowY: "auto",
          display: "flex", // Asegura que el contenedor se comporte como una columna
        }}
      >
        <ul
          style={{
            flex: "1", // Permite que la lista crezca y ocupe todo el espacio restante
            color: "gray",
            textShadow: "white",
          }}
        >
          {jobs &&
            jobs.map((job, index) => {
              const formatStart = formatDate(job.start); // Llama a formatDate aquí
              return (
                <JobsOfferCard
                  key={index}
                  id={job.id}
                  company={job.name} // Aquí es donde cambiamos la propiedad de la compañía para asegurarnos de que es una cadena.
                  // logo_Company={job.logo_Company} // Esta línea ha sido eliminada ya que no la estás utilizando en `JobsOfferCard`.
                  name_Vacancy={job.name_Vacancy}
                  seniority={job.seniority}
                  start={formatStart}
                  showSpan={true}
                  onJobSelected={onJobSelected}
                />
              );
            })}
        </ul>
      </div>
      <JobsOfferDetail
        selectedJobId={selectedJobId}
        jobs={jobs}
        setSelectedJobId={setSelectedJobId}
      />
    </div>
  );
};
export default JobsOfferCardsContainerForHome;
