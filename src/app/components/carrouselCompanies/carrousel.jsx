"use client";
import React, { useEffect, useState } from "react";
import styles from "./carrousel.module.css";
import axios from "axios";

function Carrousel() {
  const [logos, setLogos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get("/api/companies")
      .then((response) => {
        const companies = response.data;
        const logos = companies.map((company) => company.logo_Company);
        setLogos(logos);
      })
      .catch((error) => {
        console.error("Error al obtener las compañías:", error);
      });
  }, []);

  return (
    <>
      <div className={styles.slider}>
        <div className={styles.textsContainer}>
          <h1 className={styles.titleCarrousel}>Companies that work with us</h1>
          <p className={styles.pCarrousel}>
            Join today and be a part of the greatest pool of workspaces.
          </p>
        </div>
        <div className={styles.slide_track}>
          {logos.map((logo, index) => (
            <div className={styles.slide} key={index}>
              <img
                src={logo}
                className={styles.img}
                alt={`Company Logo ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Carrousel;
