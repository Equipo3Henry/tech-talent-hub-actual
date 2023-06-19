import Image from "next/image";
import Link from "next/link";
import styles from "./JobsOfferDetail.module.css";
import { useEffect, useState } from "react";

const JobsOfferDetail = ({ selectedJobId, setSelectedJobId, jobs }) => {
  const [job, setJob] = useState(null);

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
        <span className={styles.span}>{job.name_Vacancy}</span>
        <span className={styles.span}> {job.seniority} </span>
      </div>
      <div className={styles.contenedorButton}>
        <Link href={`/profile/login`}>
          <button className={styles.button}>Apply!</button>
        </Link>
      </div>
      <div className={styles.contenedorSpan}>
        <span>{job.start}</span>
      </div>
      <div className={styles.contenedorSpan}>
        <span>{job.requires}</span>
      </div>
      <div className={styles.contenedorSpan}>
        <span>{job.description}</span>
      </div>
      <div className={styles.contenedorSpan}>
        <span>{job.salary}</span>
      </div>
      <div className={styles.contenedorSpan}>
        <span>{job.start}</span>
      </div>
      <div className={styles.contenedorSpan}>
        <span>{job.end}</span>
      </div>
    </div>
  );
};

export default JobsOfferDetail;
