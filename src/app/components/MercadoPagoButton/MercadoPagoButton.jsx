"use client";

import { useEffect, useState } from "react";
import styles from "../MercadoPagoButton/MercadoPagoButton.module.css";
import { Loader } from "../Loader/Loader";
import Link from "next/link";
import axios from "axios";
import { GlobalContext } from "../../profile/layout";

export const MercadoPagoButton = ({ plan }) => {
  const [url, setUrl] = useState("");

  // Check for window
  const isBrowser = typeof window !== "undefined";

  const storedUserData = isBrowser
    ? JSON.parse(localStorage.getItem("userData"))
    : null;

  const [loading, setLoading] = useState(true);
//hola
  useEffect(() => {
    const generateLink = async () => {
      setLoading(true);
      try {
        const { data } = await axios.post("/api/checkout", {
          plan,
          userId: storedUserData ? storedUserData.id : null,
        });

        setUrl(data.url);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    generateLink();
  }, [plan]);

  return (
    <div>
      {loading ? (
        <button className={styles.button} disabled>
          <Loader />
        </button>
      ) : (
        <Link href={url} className={styles.button}>
          Join Now!{" "}
        </Link>
      )}
    </div>
  );
};
