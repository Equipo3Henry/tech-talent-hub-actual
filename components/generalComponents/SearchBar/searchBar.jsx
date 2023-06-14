"use client";

import styles from "./searchBar.module.css";
import search from "../../../public/images/search.svg";
import Image from "next/image";
import { useState } from "react";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  function handleSearch(event) {
    // asegúrate de recibir el evento como un argumento
    setSearchValue(event.target.value);
  }

  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchBar}>
        <input
          type="search"
          placeholder="Search for job titles, companies or keywords"
          value={searchValue}
          onChange={handleSearch}
          className={styles.input} // debes agregar un handler de cambio aquí
        />
        <button className={styles.button} onClick={handleSearch}>
          <Image src={search} alt="image" className={styles.Icons} />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
