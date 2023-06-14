"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  home,
  Vector,
  search,
  notification,
  favorites,
  dashboard,
  posts,
} from "../../public/assets/page";
import styles from "./NavBar.module.css";
import { useEffect } from "react";

const NavBar = ({ handleBotonMenu }) => {
  const [isProfile, setIsProfile] = useState(false);
  const [isCompany, setIsCompany] = useState(false);

  const router = usePathname();

  useEffect(() => {
    if (router.includes("profile")) {
      setIsProfile(true);
    } else {
      setIsProfile(false);
    }
  }, [router]);

  console.log(router);

  return isProfile ? (
    <div className={styles.Navbar}>
      <div className={styles.MenuContainer} onClick={handleBotonMenu}>
        <Image src={Vector} alt="image" className={styles.Menu} />
      </div>
      <div className={styles.IconsContainer}>
        <Image src={dashboard} alt="image" className={styles.Icons} />
        <Image src={posts} alt="image" className={styles.Icons} />
        <Image src={notification} alt="image" className={styles.Icons} />
        <Image src={favorites} alt="image" className={styles.Icons} />
      </div>
    </div>
  ) : (
    <div className={styles.NavbarCompanies}>
      <div className={styles.MenuContainer} onClick={handleBotonMenu}>
        <Image src={Vector} alt="image" className={styles.Menu} />
      </div>
      <div className={styles.IconsContainer}>
        <Image src={dashboard} alt="image" className={styles.Icons} />
        <Image src={posts} alt="image" className={styles.Icons} />
        <Image src={notification} alt="image" className={styles.Icons} />
        <Image src={favorites} alt="image" className={styles.Icons} />{" "}
      </div>
    </div>
  );
};

export default NavBar;
