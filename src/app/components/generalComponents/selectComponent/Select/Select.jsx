import React, { useRef } from "react";
import styles from "./Select.module.css";

function Select({ options, name, onChange, defaultValue }) {
  const selectRef = useRef(null);

  const handleSelectChange = () => {
    const selectedValue = selectRef.current.value;
    onChange(name, selectedValue);
  };

  

  return (
    <div>
      <select name={name} id={name} className={styles.select} ref={selectRef} onChange={handleSelectChange} defaultValue={defaultValue} >
        {options.map((option) => (
          <option value={option.name} key={option.id} className={styles.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
