import Image from "next/image";
import Link from "next/link";
import styles from "./JobsOfferDetail.module.css";
import { useEffect, useState } from "react";
import VacancySendModal from "./vacancySendModal";

const applyJob = async (userId, jobId) => {
  try {
    const response = await fetch("/api/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, jobId }),
    });

    const responseData = await response.json();

    //console.log(
    // `Free vacancies left: ${responseData.result.limitFreeVacancies}`
    //); // Log remaining vacancies

    if (response.ok) {
      alert(responseData.message); // Alert success message
    } else if (response.status === 403) {
      alert(responseData.message); // Alert error message if limit is reached
    } else {
      throw new Error(responseData.message);
    }
  } catch (error) {
    alert("Error applying to job: " + error.message); // Alert error message
  }
};

const JobsOfferDetail = ({
  userData,
  selectedJobId,
  setSelectedJobId,
  jobs,
}) => {
  const [job, setJob] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (selectedJobId) {
      const jobDetail = jobs.find((job) => job.id === selectedJobId);
      setJob(jobDetail);
    } else {
      setSelectedJobId(null);
      setJob(null);
    }
  }, [selectedJobId, jobs]);

  if (!job) {
    return null; // Return null instead of an empty div when there's no job
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className={styles.ContainerDetail}>
      <div className={styles.InfoContainer}>
        <div className={styles.CompanyNameContainer}>
          <span className={styles.span}>{job.company && job.company.name}</span>
          <img
            src={job.logo_Company}
            alt="Company Logo"
            className={styles.image}
          />
        </div>
        <div className={styles.subtitleContainer}>
          <span className={styles.spanSubtitle}>{job.name_Vacancy}</span>
          <span className={styles.spanSubtitle}> {job.seniority} </span>
        </div>
      </div>
      <div className={styles.contenedorSpan}>
        <span>{job.start}</span>
      </div>
      <div className={styles.contenedorSpan}>
        <span>{job.requires}</span>
      </div>
      <div className={styles.contenedorDescription}>
        <span>{job.description}</span>
      </div>
      <div className={styles.contenedorSalary}>
        <span className={styles.salaryTitle}>Salary:</span>
        <span>{job.salary}</span>
      </div>
      <div className={styles.contenedorSpan}>
        <span>{job.start}</span>
      </div>
      <div className={styles.contenedorSpan}>
        <span>{job.end}</span>
      </div>
      <div className={styles.contenedorButton}>
        <button
          className={styles.button}
          onClick={() => {
            if (userData && job) {
              applyJob(userData.id, job.id);
            } else {
              console.error("Either userData or job is null:", {
                userData,
                job,
              });
            }
          }}
        >
          Apply
        </button>
        {showModal && <VacancySendModal toggleModal={toggleModal} />}
      </div>
    </div>
  );
};

export default JobsOfferDetail;
