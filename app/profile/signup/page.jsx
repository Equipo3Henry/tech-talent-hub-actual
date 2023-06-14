import React from "react";
import styles from "./signup.module.css";
import { google } from "../../../public/assets/page";

function SignUp() {
  return (
    <div>
      <div>
        <h1 className={styles.title}>Sign up to Tech Talent Hub</h1>
        <h3 className={styles.subtitle}>
          Ready to find your dream job? Discover companies from all over Israel
        </h3>
      </div>

      <div>
        <div></div>

        <div></div>

        <div></div>
      </div>
      <div>
        {/* Name */}
        <div>
          <label className={styles.name}>Name</label>
          <input type="text" className={styles.rect_name} />
        </div>

        {/* LastName */}
        <div>
          <label className={styles.lastname}>Last Name</label>
          <input type="text" className={styles.rect_lastname} />
        </div>

        {/* Email */}
        <div>
          <label className={styles.email}>Email</label>
          <input type="text" className={styles.rect_email} />
        </div>

        {/* Username */}
        <div>
          <label className={styles.username}>Username</label>
          <input type="text" className={styles.rect_username} />
        </div>

        {/* Password */}
        <div>
          <label className={styles.password}>Password</label>
          <input type="text" className={styles.rect_password} />
        </div>
      </div>

      <div>
        {/* Botón */}
        <button className={styles.button}>Continue</button>
      </div>
    </div>
  );
}

export default SignUp;
