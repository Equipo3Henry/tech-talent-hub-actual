"use client";

import styles from "./modal.module.css";
import React from "react";
import { useState } from "react";
import Link from "next/link";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={toggleModal}></div>
      <div className={styles.modal_content}>
        <h2>Hello Modal</h2>
        <p>something</p>
        <Link href="/landing">
          <button className={btn_modal}>Go to Home Page</button>
        </Link>
      </div>
    </div>
  );
}
