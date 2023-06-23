"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  home,
  Vector,
  notification,
  favorites,
  logoff,
  dashboard,
  myprofile,
  posts,
  loginusername,
  logingroup,
} from "../../public/assets/imagesCodes";
import styles from "./NavBar.module.css";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NavBar = ({ handleBotonMenu }) => {
  const [isProfile, setIsProfile] = useState(false);
  const [isCompany, setIsCompany] = useState(false);
  const [isPreLogIn, setIsPreLogIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const router = usePathname();
  const routerb = useRouter();

  function logOut() {
    localStorage.removeItem("userData");
    routerb.push("/landing");
  }

  function logOutCompanies() {
    localStorage.removeItem("companyData");
    routerb.push("/landing");
  }

  useEffect(() => {
    if (router.includes("profile")) {
      setIsProfile(true);
      setIsCompany(false);
      setIsPreLogIn(false);
    } else if (router.includes("company")) {
      setIsProfile(false);
      setIsCompany(true);
      setIsPreLogIn(false);
    } else {
      setIsProfile(false);
      setIsCompany(false);
      setIsPreLogIn(true);
    }
  }, [router]);

  if (isProfile) {
    return (
      <div className={styles.Navbar}>
        <div className={styles.MenuContainer} onClick={handleBotonMenu}>
          <Image src={Vector} alt="image" className={styles.Menu} />
        </div>
        <div className={styles.IconsContainer}>
          <Link href="/profile/dashboard">
            <Image src={dashboard} alt="image" className={styles.Icons} />
          </Link>
          <Link href="/profile/mydata">
            <Image src={myprofile} alt="image" className={styles.Icons} />
          </Link>
          <Link href="/profile/my-applications">
            <Image src={posts} alt="image" className={styles.Icons} />
          </Link>
          <Link href="/profile/notifications">
            <Image src={notification} alt="image" className={styles.Icons} />
          </Link>
          <Link href="/profile/favorites">
            <Image src={favorites} alt="image" className={styles.Icons} />
          </Link>
          <button onClick={logOut} className={styles.logOutButton}>
            <Link href="/landing">
              <Image src={logoff} alt="image" className={styles.Icons} />{" "}
            </Link>
          </button>
        </div>
      </div>
    );
  } else if (isCompany) {
    return (
      <div className={styles.NavbarCompanies}>
        <div className={styles.MenuContainer} onClick={handleBotonMenu}>
          <Image src={Vector} alt="image" className={styles.Menu} />
        </div>
        <div className={styles.IconsContainer}>
          <Link href="/company/dashboard">
            <Image src={dashboard} alt="image" className={styles.Icons} />
          </Link>
          <Link href="/company/mydata">
            <Image src={myprofile} alt="image" className={styles.Icons} />
          </Link>
          <Link href="/company/my-posts">
            <Image src={posts} alt="image" className={styles.Icons} />
          </Link>
          <Link href="/company/notifications">
            <Image src={notification} alt="image" className={styles.Icons} />
          </Link>
          <Link href="/company/favorites">
            <Image src={favorites} alt="image" className={styles.Icons} />{" "}
          </Link>
          <button onClick={logOutCompanies} className={styles.logOutButton}>
            <Link href="/landing">
              <Image src={logoff} alt="image" className={styles.Icons} />{" "}
            </Link>
          </button>
        </div>
      </div>
    );
  } else if (isPreLogIn) {
    return (
      <div className={styles.Navbar}>
        <div className={styles.MenuContainer} onClick={handleBotonMenu}>
          <Image src={Vector} alt="image" className={styles.Menu} />
        </div>
        <div className={styles.IconsContainer}>
          <Link href="/landing">
            <Image src={home} alt="image" className={styles.Icons} />
          </Link>
          <Link href="/loginpro">
            <Image src={loginusername} alt="image" className={styles.Icons} />
          </Link>
          <Link href="/logincomp">
            <Image src={logingroup} alt="image" className={styles.Icons} />
          </Link>
        </div>
      </div>
    );
  }
};

export default NavBar;
