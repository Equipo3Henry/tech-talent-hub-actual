import filtersDB from "../../helpers/provisionalFiltersDB";
import Select from "../Select/Select";
import styles from "./SelectContainer.module.css";

const SelectsContainer = () => {
  return (
    <div className={styles.Container}>
      {Object.keys(filtersDB).map((key) => (
        <Select key={key} name={key} options={filtersDB[key]} />
      ))}
    </div>
  );
};

export default SelectsContainer;
