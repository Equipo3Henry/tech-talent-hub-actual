import React, { useState, useEffect, useContext } from "react";
import styles from "../JobsOfferCardsContainer/JobsOfferCardsContainer.module.css";
import JobsOfferCard from "../JobsOffer Card/JobsOfferCard";
import formatDate from "../../../../helpers/formatDate";
import JobsOfferDetail from "../../JobsOfferDetail/JobsOfferDetail";
import axios from "axios";
import { GlobalContext } from "../../../../profile/layout";

const JobsOfferCardsContainerForHome = ({ jobs }) => {
  const [selectedJobId, setSelectedJobId] = useState(null);
  const { user } = useContext(GlobalContext);

  // Agrega un efecto para seleccionar el primer trabajo cuando 'jobs' cambia
  useEffect(() => {
    const firstActiveJob = jobs?.find((job) => job.isActive);
    setSelectedJobId(firstActiveJob?.id);
  }, [jobs]);

  const onJobSelected = (id) => {
    setSelectedJobId(id);
  };

  const sendEmail = async () => {
    const mail = await axios.post("/api/sendEmail/postulation", {
      string: "string------",
    });
    console.log(mail);
  };

  if (!user) return null;

  return (
    <div className={styles.forajido}>
      <div className={styles.fixedBar}>
        <span className={styles.allCandidates}>Vacancies</span>
      </div>
      <div
        style={{
          maxHeight: "572px",
          overflowY: "auto",
          display: "flex",
          marginTop: "30px",
        }}
      >
        <ul
          style={{
            flex: "1",
            color: "gray",
            textShadow: "white",
          }}
        >
          {jobs &&
            jobs
              .filter((job) => job.isActive)
              .map((job, index) => {
                const companyName = job.company && job.company.name;
                formatDate(job.createdAt);

                return (
                  <JobsOfferCard
                    key={index}
                    id={job.id}
                    company={companyName}
                    name_Vacancy={job.name_Vacancy}
                    seniority={job.seniority}
                    showSpan={true}
                    onJobSelected={onJobSelected}
                    createdAt={formatDate(job.createdAt)} // aquí es donde se usa formatDate
                  />
                );
              })}
        </ul>
      </div>
      <JobsOfferDetail
        userData={user}
        userId={user.id}
        selectedJobId={selectedJobId}
        jobs={jobs}
        setSelectedJobId={setSelectedJobId}
      />
    </div>
  );
};
export default JobsOfferCardsContainerForHome;
