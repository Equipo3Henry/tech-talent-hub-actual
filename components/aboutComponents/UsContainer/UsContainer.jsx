import React from "react";
import UsCard from "../Us/UsCard";
import styles from "./UsContainer.module.css";

const UsContainer = ({ us }) => {
  return (
    <div className={styles.Container}>
      {us.map((person, index) => (
        <UsCard
          key={index}
          name={person.name}
          github={person.github}
          linkedin={person.linkedin}
          image={person.image}
        />
      ))}
    </div>
  );
};

export default UsContainer;
