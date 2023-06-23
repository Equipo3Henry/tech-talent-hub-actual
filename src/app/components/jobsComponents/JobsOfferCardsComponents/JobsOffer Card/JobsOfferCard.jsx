import React from "react";
import styles from "./JobsOfferCard.module.css";
import Link from "next/link";

const JobsOfferCard = ({
  id,
  company,
  name_Vacancy,
  seniority,
  applicants,
  showButton,
  start,
  showSpan,
  onJobSelected,
  status,
  isActive,
  showFinishButton, // Nueva prop
  onFinishProcess, // Manejador del evento Finish Process
}) => {
  const handleClick = () => {
    if (isActive && onFinishProcess) {
      onFinishProcess(id);
    }
  };
  return (
    <div
      className={styles.Container}
      key={id}
      onClick={() => onJobSelected(id)}
    >
      <div className={styles.InfoContainer}>
        <div className={styles.CompanyNameContainer}>
          <span className={styles.span}>{company}</span>
        </div>
        <h1 className={styles.CompanyTitle}> {name_Vacancy} </h1>
        <span className={styles.spanSeniority}> {seniority} </span>
      </div>
      {showButton && (
        <div className={styles.contenedorButton}>
          <Link href={`/profile/login`}>
            <button className={styles.button}>Apply</button>
          </Link>
        </div>
      )}
      {showSpan && (
        <div className={styles.contenedorSpan}>
          <span>{start}</span>
        </div>
      )}
      <div className={styles.contenedorMyApplications}>
        <span>{applicants}</span>
        <span> {status}</span>
      </div>
      {showFinishButton && (
        <button onClick={handleClick}>
          {isActive ? "Finish Process" : "Finish Selection"}
        </button>
      )}{" "}
      {/* Verifica si se debe mostrar el botón */}
    </div>
  );
};

export default JobsOfferCard;
