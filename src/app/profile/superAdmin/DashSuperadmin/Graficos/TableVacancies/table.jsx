"use client";

import React from "react";
import { useState } from "react";
import axios from "axios";
import styles from "./table.module.css";

function TableVacancies({ jobs }) {
  const [sortConfig, setSortConfig] = useState({
    key: "name_Vacancy",
    direction: "ascending",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8);

  async function toggleActive(vacancyId, currentStatus) {
    try {
      const response = await axios.patch(`/api/vacancies/${vacancyId}`, {
        isActive: !currentStatus, // invertir el estado actual
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const sortedJobs = Object.values(jobs).sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const indexOfLastJob = currentPage * usersPerPage;
  const indexOfFirstJob = indexOfLastJob - usersPerPage;
  const currentJobs = sortedJobs.slice(indexOfFirstJob, indexOfLastJob);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sortedJobs.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th
              className={styles.th}
              onClick={() => requestSort("name_Vacancy")}
            >
              Vacancy Name
            </th>
            <th
              className={styles.th}
              onClick={() => requestSort("programming_Languages")}
            >
              Programming Languages
            </th>
            <th className={styles.th} onClick={() => requestSort("seniority")}>
              Seniority
            </th>
            <th
              className={styles.th}
              onClick={() => requestSort("years_of_experience")}
            >
              Years of Experience
            </th>
            <th className={styles.th} onClick={() => requestSort("salary")}>
              Salary
            </th>
            <th>Activate/Deactivate Job</th>
          </tr>
        </thead>
        <tbody>
          {currentJobs.map((job) => (
            <tr key={job.id} className={styles.tr}>
              <td className={styles.td}>{job.name_Vacancy}</td>
              <td className={styles.td}>
                {job.programming_Languages.join(", ")}
              </td>
              <td className={styles.td}>{job.seniority}</td>
              <td className={styles.td}>{job.years_of_experience}</td>
              <td className={styles.td}>{job.salary}</td>
              <td className={styles.td}>
                <button
                  onClick={() => toggleActive(job.id, job.isActive)}
                  className={styles.buttonActivation}
                >
                  {job.isActive ? "Deactivate" : "Activate"}
                </button>
              </td>{" "}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.numberPaginationContainer}>
        {pageNumbers.map((number) => (
          <button
            onClick={() => paginate(number)}
            key={number}
            className={styles.numberButtons}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TableVacancies;
