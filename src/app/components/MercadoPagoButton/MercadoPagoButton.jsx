"use client";

import { useEffect, useState } from "react";
import styles from "../MercadoPagoButton/MercadoPagoButton.module.css";
import { Loader } from "../Loader/Loader";
import Link from "next/link";
import axios from "axios";

export const MercadoPagoButton = ({ plan }) => {
  const [url, setUrl] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateLink = async () => {
      setLoading(true);
      try {
        const { data } = await axios.post("/api/checkout", {
          plan,
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
