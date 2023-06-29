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
  const [editingId, setEditingId] = useState(null);
  const [editingData, setEditingData] = useState({});

  const [jobsData, setJobsData] = useState(jobs);

  const updateJobStatus = (jobId, isActive) => {
    setJobsData((prevJobs) => {
      const updatedJobs = prevJobs.map((job) => {
        if (job.id === jobId) {
          return { ...job, isActive };
        }
        return job;
      });
      return updatedJobs;
    });
  };
  const handleEditClick = (job) => {
    setEditingId(job.id);
    setEditingData(job);
    console.log(job); // Add this line
  };

  async function toggleActive(vacancyId, currentStatus) {
    try {
      const response = await axios.patch(`/api/vacancies/${vacancyId}`, {
        isActive: !currentStatus,
      });
      console.log(response.data);
      updateJobStatus(vacancyId, !currentStatus);
    } catch (error) {
      console.error(error);
    }
  }
  const handleInputChange = (event, field) => {
    setEditingData((prevData) => ({
      ...prevData,
      [field]: event.target.value,
    }));
  };

  const handleSaveChanges = async (id) => {
    try {
      const response = await axios.patch(`/api/vacancies/${id}`, editingData);
      setEditingId(null);
      updateJobStatus(id, editingData.isActive);
    } catch (error) {
      console.error(error);
    }
  };

  const sortedJobs = Object.values(jobsData).sort((a, b) => {
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
            <th>Edit Job</th>
          </tr>
        </thead>
        <tbody>
          {currentJobs.map((job) => (
            <tr key={job.id} className={styles.tr}>
              {editingId === job.id ? (
                <>
                  <td className={styles.td}>
                    <input
                      style={{ width: "100%", height: "100%" }}
                      className={styles.input}
                      type="text"
                      value={editingData.name_Vacancy}
                      onChange={(event) =>
                        handleInputChange(event, "name_Vacancy")
                      }
                    />
                  </td>
                  <td className={styles.td}>
                    <input
                      className={styles.input}
                      type="text"
                      value={editingData.programming_Languages}
                      onChange={(event) =>
                        handleInputChange(event, "programming_Languages")
                      }
                    />
                  </td>
                  <td className={styles.td}>
                    <input
                      className={styles.input}
                      type="text"
                      value={editingData.seniority}
                      onChange={(event) =>
                        handleInputChange(event, "seniority")
                      }
                    />
                  </td>
                  <td className={styles.td}>
                    <input
                      className={styles.input}
                      type="text"
                      value={editingData.years_of_experience}
                      onChange={(event) =>
                        handleInputChange(event, "years_of_experience")
                      }
                    />
                  </td>
                  <td className={styles.td}>
                    <input
                      className={styles.input}
                      type="text"
                      value={editingData.salary}
                      onChange={(event) => handleInputChange(event, "salary")}
                    />
                  </td>

                  <td className={styles.td}>
                    <button onClick={() => handleSaveChanges(job.id)}>
                      Save
                    </button>
                    <button onClick={() => setEditingId(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td className={styles.td}>{job.name_Vacancy}</td>
                  <td className={styles.td}>{job.programming_Languages}</td>
                  <td className={styles.td}>{job.seniority}</td>
                  <td className={styles.td}>{job.years_of_experience}</td>
                  <td className={styles.td}>{job.salary}</td>
                  <td className={styles.td}>
                    <button onClick={() => handleEditClick(job)}>Edit</button>
                    <button
                      onClick={() => toggleActive(job.id, job.isActive)}
                      className={styles.buttonActivation}
                    >
                      {job.isActive ? "Deactivate" : "Activate"}
                    </button>
                  </td>
                </>
              )}
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
