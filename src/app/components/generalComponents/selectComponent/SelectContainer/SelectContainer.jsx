import filtersDB from "../../../../helpers/provisionalFiltersDB";
import Select from "../Select/Select";
import styles from "./SelectContainer.module.css";
import React, { useRef, useEffect } from "react";

const SelectsContainer = ({ onSelectChange }) => {
  
  const selectedValuesRef = useRef({});

  const handleSelectChange = (name, value) => {
    selectedValuesRef.current[name] = value;
    onSelectChange(selectedValuesRef.current);
    
  };

  useEffect(() => {
    // Obtener los valores seleccionados al montar el componente
    Object.keys(filtersDB).forEach((key) => {
      const selectedValue = selectedValuesRef.current[key];
      if (selectedValue) {
        onSelectChange(selectedValuesRef.current);
        return;
      }
      const defaultValue = filtersDB[key][0].name;
      selectedValuesRef.current[key] = defaultValue;
    });
  }, []);

  return (
    <div className={styles.Container}>
      {Object.keys(filtersDB).map((key) => (
        <Select key={key} name={key} options={filtersDB[key]} onChange={handleSelectChange} defaultValue={selectedValuesRef.current[key]}/>
      ))}
    </div>
  );
};

export default SelectsContainer;
