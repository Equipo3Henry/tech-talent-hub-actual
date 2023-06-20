import React from "react";
import styles from "./JobsOfferCard.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const JobsOfferCard = ({
  id,
  company,
  name_Vacancy,
  seniority,
  showButton,
  start,
  showSpan,
  onJobSelected,
}) => {



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
    </div>
  );
};

export default JobsOfferCard;
