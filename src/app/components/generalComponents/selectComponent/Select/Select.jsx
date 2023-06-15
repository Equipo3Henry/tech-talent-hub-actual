import React from "react";
import styles from "./Select.module.css";

function Select({ options, name, placeholder }) {
  return (
    <div>
      <select name={name} id={name} className={styles.select}>
        <option value="" disabled selected>
          {placeholder}
        </option>
        {options.map((option) => (
          <option value={option.id} key={option.id} className={styles.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
