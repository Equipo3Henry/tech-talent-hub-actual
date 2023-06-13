"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  home,
  Vector,
  search,
  notification,
  favorites,
} from "../../public/assets/page";
import styles from "./NavBar.module.css";
import { useEffect } from "react";

const NavBar = ({ handleBotonMenu }) => {
  const router = useRouter();
  const [isProfile, setIsProfile] = useState(false);

  useEffect(() => {
    if (router.pathname === "/profile") {
      setIsProfile(true);
    } else {
      setIsProfile(false);
    }
  }, [router.pathname]);

  /*   useEffect(() => {
    if (router.pathname) {
      setIsProfile(router.pathname === "/profile");
    }
  }, [router.pathname]); */

  return isProfile ? (
    <div className={styles.Navbar}>
      <div className={styles.MenuContainer} onClick={handleBotonMenu}>
        <Image src={Vector} alt="image" className={styles.Menu} />
      </div>
      <div className={styles.IconsContainer}>
        <Image src={home} alt="image" className={styles.Icons} />
        <Image src={search} alt="image" className={styles.Icons} />
        <Image src={notification} alt="image" className={styles.Icons} />
        <Image src={favorites} alt="image" className={styles.Icons} />
      </div>
    </div>
  ) : (
    <div className={styles.Navbar}>
      <div className={styles.MenuContainer} onClick={handleBotonMenu}>
        <Image src={Vector} alt="image" className={styles.Menu} />
      </div>
      <div className={styles.IconsContainer}>
        <Image src={home} alt="image" className={styles.Icons} />
      </div>
    </div>
  );
};

export default NavBar;
