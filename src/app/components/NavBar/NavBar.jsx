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
  posts,
  loginusername,
  logingroup,
  information,
  settings,
  user,
  upgrade,
} from "../../public/assets/imagesCodes";
import styles from "./NavBar.module.css";
import { useEffect } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isProfile, setIsProfile] = useState(false);
  const [isCompany, setIsCompany] = useState(false);
  const [isPreLogIn, setIsPreLogIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const router = usePathname();

  function handleBotonMenu() {
    setIsOpen(!isOpen);
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
      <div className={`${styles.Navbar} ${isOpen ? styles.openMenu : ""}`}>
        <div className={styles.MenuContainer} onClick={handleBotonMenu}>
          <Image src={Vector} alt="image" className={styles.Menu} />
        </div>
        {isOpen && (
          <div>
            <Link href="/profile/dashboard">
              <Image src={user} alt="image" className={styles.Icons} />
              <p>User</p>
            </Link>
            <Link href="/profile/dashboard">
              <Image src={upgrade} alt="image" className={styles.Icons} />
              <p>Upgrade</p>
            </Link>
          </div>
        )}
        <div className={styles.IconsContainer}>
          <Link href="/profile/dashboard">
            <Image src={dashboard} alt="image" className={styles.Icons} />
            {isOpen && <p>Dashboard</p>}
          </Link>
          <Link href="/profile/my-applications">
            <Image src={posts} alt="image" className={styles.Icons} />
            {isOpen && <p>My Aplications</p>}
          </Link>
          <Link href="/profile/notifications">
            <Image src={notification} alt="image" className={styles.Icons} />
            {isOpen && <p>Notifications</p>}
          </Link>
          <Link href="/profile/favorites">
            <Image src={favorites} alt="image" className={styles.Icons} />
            {isOpen && <p>My Favorites</p>}
          </Link>
        </div>
        {isOpen && (
          <div>
            <Link href="/landing">
              <Image src={logoff} alt="image" className={styles.Icons} />
              <p>Settings</p>
            </Link>
            <Link href="/">
              <Image src={settings} alt="image" className={styles.Icons} />
              <p>Log out</p>
            </Link>
          </div>
        )}
      </div>
    );
  } else if (isCompany) {
    return (
      <div
        className={`${styles.NavbarCompanies} ${styles.Navbar} ${
          isOpen ? styles.openMenu : ""
        }`}
      >
        <div className={styles.MenuContainer} onClick={handleBotonMenu}>
          <Image src={Vector} alt="image" className={styles.Menu} />
        </div>
        {isOpen && (
          <div>
            <Link href="/">
              <Image src={user} alt="image" className={styles.Icons} />
              <p>Microsoft</p>
            </Link>
            <Link href="/">
              <Image src={upgrade} alt="image" className={styles.Icons} />
              <p>Upgrade</p>
            </Link>
          </div>
        )}
        <div className={styles.IconsContainer}>
          <Link href="/company/dashboard">
            <Image src={dashboard} alt="image" className={styles.Icons} />
            {isOpen && <p>Dashnoard</p>}
          </Link>
          <Link href="/company/my-posts">
            <Image src={posts} alt="image" className={styles.Icons} />
            {isOpen && <p>My Posts</p>}
          </Link>
          <Link href="/company/notifications">
            <Image src={notification} alt="image" className={styles.Icons} />
            {isOpen && <p>Notifications</p>}
          </Link>
          <Link href="/company/favorites">
            <Image src={favorites} alt="image" className={styles.Icons} />
            {isOpen && <p>My Favorites</p>}
          </Link>
        </div>
        {isOpen && (
          <div>
            <Link href="/landing">
              <Image src={logoff} alt="image" className={styles.Icons} />
              <p>Settings</p>
            </Link>
            <Link href="/">
              <Image src={settings} alt="image" className={styles.Icons} />
              <p>Log out</p>
            </Link>
          </div>
        )}
      </div>
    );
  } else if (isPreLogIn) {
    return (
      <div className={`${styles.Navbar} ${isOpen ? styles.openMenu : ""}`}>
        <div className={styles.MenuContainer} onClick={handleBotonMenu}>
          <Image src={Vector} alt="image" className={styles.Menu} />
        </div>
        <div className={styles.IconsContainer}>
          <Link href="/landing">
            <Image src={home} alt="image" className={styles.Icons} />
            {isOpen && <p>Home</p>}
          </Link>
          <Link href="/loginpro">
            <Image src={loginusername} alt="image" className={styles.Icons} />
            {isOpen && <p>Log In</p>}
          </Link>
          <Link href="/logincomp">
            <Image src={logingroup} alt="image" className={styles.Icons} />
            {isOpen && <p>Log in Company</p>}
          </Link>
        </div>
        <div>
          <Link href={"/about"}>
            <Image src={information} alt="image" className={styles.Icons} />
            {isOpen && <p>About us</p>}
          </Link>
        </div>
      </div>
    );
  }
};

export default NavBar;
