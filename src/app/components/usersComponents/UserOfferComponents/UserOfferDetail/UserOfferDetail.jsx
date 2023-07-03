import React from "react";
import styles from "./UserOfferDetail.module.css";

import { useEffect, useState } from "react";

function UserOfferDetail({
  selectedUserId,
  setSelectedUserId,
  users,
  companyData,
}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (selectedUserId && users) {
      const userDetail = users.find((user) => user.id === selectedUserId);
      setUser(userDetail);
    } else {
      setSelectedUserId(null);
      setUser(null);
    }
  }, [selectedUserId, users]);

  const handleDownload = () => {
    if (user && user.cv) {
      window.open(user.cv);
    } else {
      alert("No CV available for download");
    }
  };

  const handleConnect = async () => {
    if (user) {
      try {
        const response = await fetch("/api/sendEmail/connection", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userEmail: user.email,
            companyName: companyData.name,
            companyEmail: companyData.email,
          }),
        });
        console.log("userEmail", user.email);
        console.log("companyName", companyData.name);
        console.log("companyEmail", companyData.email);
        console.log("Response:", response); // Log the response here

        if (response.ok) {
          alert("Connection request email sent successfully!");
        } else {
          throw new Error("Failed to send email");
        }
      } catch (error) {
        console.error("An error occurred:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };
  if (!user) {
    return null;
  }

  return (
    <div>
      {console.log(selectedUserId)}
      <div className={styles.ContainerDetail}>
        <div className={styles.InfoContainer}>
          <div className={styles.UserNameCompanyContainer}>
            <h1
              className={styles.username_name}
            >{`${user.name} ${user.lastname}`}</h1>
            <div className={styles.specializationContainer}>
              <h1 className={styles.country}>{user.specialization}</h1>
              <h4 className={styles.country}>{user.seniority}</h4>
              <h1 className={styles.country}>{user.country}</h1>
            </div>
          </div>
          <span className={styles.aboutme}>{user.aboutme}</span>
        </div>
        <div className={styles.listados}>
          <div className={styles.programming_container}>
            <span className={styles.span_programming}>Hard Skills:</span>
            <ul className={styles.ul_programming}>
              {user.progLanguages.map((lang, index) => (
                <li key={index}>{lang}</li>
              ))}
            </ul>
          </div>
          <div className={styles.programming_container}>
            <span className={styles.span_softskills}>Soft Skills:</span>
            <ul className={styles.ul_softskills}>
              {user.softSkills.map((soft, index) => (
                <li key={index}>{soft}</li>
              ))}
            </ul>
          </div>
          <div className={styles.programming_container}>
            <span className={styles.span_softskills}>Languages:</span>
            <ul className={styles.ul_softskills}>
              {user.languages.map((langu, index) => (
                <li key={index}>{langu}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.buttonConnect} onClick={handleConnect}>
            Connect
          </button>
          <button className={styles.buttonDownload} onClick={handleDownload}>
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserOfferDetail;
