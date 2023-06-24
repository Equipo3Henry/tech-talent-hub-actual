"use client";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import JobsOfferCard from "../JobsOfferCardsComponents/JobsOffer Card/JobsOfferCard";
import { GlobalContext } from "@/src/app/company/layout";
import Modal from "react-modal";

const MyPostsCards = () => {
  const [jobs, setJobs] = useState([]);
  const [showOldPosts, setShowOldPosts] = useState(false); // Nuevo estado
  const { companies } = useContext(GlobalContext);

  useEffect(() => {
    const localStorageData =
      typeof localStorage !== "undefined"
        ? localStorage.getItem("companyData")
        : null;
    const companyData = localStorageData ? JSON.parse(localStorageData) : null;
    const companyId = companyData ? companyData.id : null;

    if (companyId) {
      axios.get(`/api/vacancies?companyId=${companyId}`).then((response) => {
        // Query by company ID
        const jobsFromServer = response.data;
        setJobs(jobsFromServer);
      });
    }
  }, [companies]);

  const handleFinishProcess = (jobId) => {
    const status = { isActive: false };
    const url = `/api/vacancies/${jobId}`;

    console.log(url);
    axios
      .put(`${url}`, { isActive: false })
      .then((res) => {
        console.log(res);
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

  const [modalIsOpen, setModalIsOpen] = useState(false); // Nuevo estado para controlar la apertura del modal
  const [selectedJob, setSelectedJob] = useState(null); // Nuevo estado para guardar el trabajo seleccionado

  const openModal = (job) => {
    setSelectedJob(job);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setModalIsOpen(false);
  };
  return (
    <div>
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
            applicants={
              <span onClick={() => openModal(job)}>
                {`${job.applicants.length} candidates applied`}
              </span>
            }
            showFinishButton={true}
            onFinishProcess={handleFinishProcess}
          />
        );
      })}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Applicants Modal"
      >
        <h2>Candidates for {selectedJob?.name_Vacancy}</h2>
        {selectedJob?.applicants.map((applicant, index) => (
          <p key={index}>
            {applicant.name} {applicant.lastname}
          </p> // Include the applicant's name and last name
        ))}
        <button onClick={closeModal}>Close</button>
      </Modal>
      <button onClick={handleToggleOldPosts}>
        {showOldPosts ? "View Active Posts" : "Show Old Posts"}
      </button>
    </div>
  );
};

export default MyPostsCards;
