import styles from "./searchBar.module.css";
import search from "../../../public/images/search.svg";
import Image from "next/image";
import { useRef } from "react";
function SearchBar({ setSearchValue }) {

  const inputSearch = useRef(null);
  const handleButtonSearch = () => {
    setSearchValue(inputSearch.current.value);
  }
  
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <input
          type="search"
          placeholder="Search for job titles, companies or keywords"
          ref={inputSearch}
          className={styles.input}
        />
        <button className={styles.button} type="submit" onClick={()=>handleButtonSearch()}>
          <Image src={search} alt="image" className={styles.Icons}  />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
