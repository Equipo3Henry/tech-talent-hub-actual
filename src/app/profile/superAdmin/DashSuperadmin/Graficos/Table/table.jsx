"use client";

import React from "react";
import { useState } from "react";
import axios from "axios";
import styles from "./table.module.css";

function TableUsers({ allUsers }) {
  const [sortConfig, setSortConfig] = useState({
    key: "username",
    direction: "ascending",
  });

  async function toggleActive(userId, currentStatus) {
    try {
      const response = await axios.patch(`/api/users/${userId}`, {
        isActive: !currentStatus, // invertir el estado actual
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const sortedUsers = [...allUsers].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th} onClick={() => requestSort("username")}>
            Username
          </th>
          <th className={styles.th} onClick={() => requestSort("name")}>
            Name
          </th>
          <th className={styles.th} onClick={() => requestSort("lastname")}>
            Lastname
          </th>
          <th className={styles.th} onClick={() => requestSort("email")}>
            Email
          </th>
          <th className={styles.th} onClick={() => requestSort("country")}>
            Country
          </th>
          <th className={styles.th} onClick={() => requestSort("cv")}>
            cv
          </th>
          <th className={styles.th} onClick={() => requestSort("seniority")}>
            seniority
          </th>
          <th className={styles.th} onClick={() => requestSort("isPremium")}>
            Is Premium
          </th>
          <th>Delete User</th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((user) => (
          <tr key={user.id} className={styles.tr}>
            <td className={styles.td}>{user.username}</td>
            <td className={styles.td}>{user.name}</td>
            <td className={styles.td}>{user.lastname}</td>
            <td className={styles.td}>{user.email}</td>
            <td className={styles.td}>{user.country}</td>
            <td className={styles.td}>
              <a href={user.cv} target="_blank" rel="noopener noreferrer">
                Link
              </a>
            </td>
            <td className={styles.td}>{user.seniority}</td>
            {/*             <td>{user.softSkills.join(", ")}</td>
             */}{" "}
            <td className={styles.td}>{user.isPremium ? "Yes" : "No"}</td>
            <td className={styles.td}>
              <button onClick={() => toggleActive(user.id, user.isActive)}>
                {user.isActive ? "Deactivate" : "Activate"}
              </button>
            </td>{" "}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableUsers;
