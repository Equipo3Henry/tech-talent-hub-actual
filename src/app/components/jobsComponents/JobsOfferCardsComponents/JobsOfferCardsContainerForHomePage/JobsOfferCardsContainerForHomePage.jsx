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
  const [orderBySalary, setOrderBySalary] = useState(false);
  const [orderDirection, setOrderDirection] = useState(true);

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
      {jobs.length < 0 ?
        <div className={styles.fixedBar}>
          <span className={styles.allCandidates}>Vacancies</span>
          <button
            className={styles.botonOrden}
            onClick={() => setOrderDirection(!orderDirection)}
          >
            Order by Salary
          </button>
        </div>
        : null
      }
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
              .sort((a, b) => {
                if (orderDirection) {
                  return a.salary - b.salary; // ascending order
                } else {
                  return b.salary - a.salary; // descending order
                }
              })
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
                    createdAt={formatDate(job.createdAt)}
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
