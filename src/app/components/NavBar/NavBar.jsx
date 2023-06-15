"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  home,
  Vector,
  notification,
  favorites,
  dashboard,
  posts,
  loginusername,
  logingroup,
} from "../../public/assets/page";
import styles from "./NavBar.module.css";
import Link from "next/link";

const NavBar = ({ handleBotonMenu }) => {

  const pathname = usePathname();

  console.log(pathname);

  if (pathname.includes("profile")) {
    return (
      <div className={styles.Navbar}>
        <div className={styles.MenuContainer} onClick={handleBotonMenu}>
          <Image src={Vector} alt="image" className={styles.Menu} />
        </div>
        <div className={styles.IconsContainer}>
          <Link href="/profile/dashboard">
            <Image src={dashboard} alt="image" className={styles.Icons} />
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
        </div>
      </div>
    );
  } else if (pathname.includes("company")) {
    return (
      <div className={styles.NavbarCompanies}>
        <div className={styles.MenuContainer} onClick={handleBotonMenu}>
          <Image src={Vector} alt="image" className={styles.Menu} />
        </div>
        <div className={styles.IconsContainer}>
          <Link href="/company/dashboard">
            <Image src={dashboard} alt="image" className={styles.Icons} />
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
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.Navbar}>
        <div className={styles.MenuContainer} onClick={handleBotonMenu}>
          <Image src={Vector} alt="image" className={styles.Menu} />
        </div>
        <div className={styles.IconsContainer}>
          <Link href="/">
            <Image src={home} alt="image" className={styles.Icons} />
          </Link>
          <Link href="/logincomp">
            <Image src={loginusername} alt="image" className={styles.Icons} />
          </Link>
          <Link href="/loginpro">
            <Image src={logingroup} alt="image" className={styles.Icons} />
          </Link>
        </div>
      </div>
    );
  }
};

export default NavBar;
