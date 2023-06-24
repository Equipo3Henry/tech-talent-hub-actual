import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import JobsOfferCard from "../JobsOfferCardsComponents/JobsOffer Card/JobsOfferCard";
import { GlobalContext } from "@/src/app/company/layout";
import styles from "./myPosts.module.css";
import UserOfferCardsContainerForDashboard from "../../usersComponents/UserOfferComponents/UserOffereCardsContainer/UserOfferCardsContainer";

const MyPostsCards = () => {
  const [jobs, setJobs] = useState([]);
  const [showOldPosts, setShowOldPosts] = useState(false);
  const { companies } = useContext(GlobalContext);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const [showModal, setShowModal] = useState(false); // Añade esta línea
  const [companyData, setCompanyData] = useState(null); // <--- Agrega esto

  useEffect(() => {
    // Obteniendo la compañía del localStorage si está disponible
    const localStorageData = localStorage
      ? localStorage.getItem("companyData")
      : null;
    const companyData = localStorageData ? JSON.parse(localStorageData) : null;
    setCompanyData(companyData); // <--- Agrega esto
    const companyId = companyData ? companyData.id : null;

    if (companyId) {
      axios.get("/api/vacancies").then((response) => {
        const jobsFromServer = response.data;
        const filteredJobs = jobsFromServer.filter(
          (job) => job.companyId === companyId
        );
        setJobs(filteredJobs);
      });
    }
  }, [companies]);

  const handleFinishProcess = (jobId) => {
    const url = `/api/vacancies/${jobId}`;
    axios
      .put(`${url}`, { isActive: false })
      .then((res) => {
        if (res.status === 200) {
          setJobs(
            jobs.map((job) =>
              job.id === jobId
                ? { ...job, isActive: false, status: "ProccesCompleted" }
                : job
            )
          );
        }
      })
      .catch((error) => {
        console.error("Error updating job status", error);
      });
  };

  const handleToggleOldPosts = () => {
    setShowOldPosts(!showOldPosts);
  };

  const filteredJobs = showOldPosts
    ? jobs.filter((job) => !job.isActive)
    : jobs.filter((job) => job.isActive);

  // Toggle modal and handle selectedJobId
  const toggleModal = (jobId) => {
    setShowModal(!showModal);
    setSelectedJobId(jobId);

    if (!showModal) {
      axios
        .get(`/api/vacancies/${jobId}`)
        .then((response) => {
          setApplicants(response.data.applicants);
        })
        .catch((error) => {
          console.error("Error fetching applicants", error);
        });
    }
  };

  useEffect(() => {
    if (showModal && selectedJobId) {
      axios
        .get(`/api/vacancies/${selectedJobId}`)
        .then((response) => {
          setApplicants(response.data.applicants);
        })
        .catch((error) => {
          console.error("Error fetching applicants", error);
        });
    } else {
      setApplicants([]);
    }
  }, [showModal, selectedJobId]);

  return (
    <div>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.overlay} onClick={toggleModal}></div>
          <div className={styles.modal_content}>
            <h2>Applicants</h2>
            <UserOfferCardsContainerForDashboard
              users={applicants}
              companyData={companyData}
            />
            <button onClick={toggleModal}>Close</button>
          </div>
        </div>
      )}
      {filteredJobs.map((job, index) => {
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
            showFinishButton={true}
            onFinishProcess={handleFinishProcess}
            onApplicantsClick={() => toggleModal(job.id)} // Modifica esta línea
          />
        );
      })}
    </div>
  );
};

export default MyPostsCards;
