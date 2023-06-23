import React, { useState, useContext } from "react";
import styles from "../JobsOfferCardsContainer/JobsOfferCardsContainer.module.css";
import JobsOfferCard from "../JobsOffer Card/JobsOfferCard";
import formatDate from "../../../../helpers/formatDate";
import JobsOfferDetail from "../../JobsOfferDetail/JobsOfferDetail";
import axios from "axios";
import { GlobalContext } from "../../../../profile/layout";

const JobsOfferCardsContainerForHome = ({ jobs }) => {
  const [selectedJobId, setSelectedJobId] = useState(null);
  const { user } = useContext(GlobalContext);

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
      <div
        style={{
          maxHeight: "572px",
          overflowY: "auto",
          display: "flex",
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
                const formatStart = formatDate(job.start);
                const companyName = job.company && job.company.name;

                return (
                  <JobsOfferCard
                    key={index}
                    id={job.id}
                    company={companyName}
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
