"use client";

import { useEffect, useState } from "react";
import styles from "../MercadoPagoButton/MercadoPagoButton.module.css";
import { Loader } from "../Loader/Loader";
import Link from "next/link";
import axios from "axios";
import { GlobalContext } from "../../profile/layout";
import { useRouter } from 'next/navigation';

export const MercadoPagoButton = ({ plan }) => {
  const [url, setUrl] = useState("/loginpro");
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check for window
  const isBrowser = typeof window !== "undefined";
  const storedUserData = isBrowser ? JSON.parse(localStorage.getItem("userData")) : null;

  let actualPlan = undefined;


  // useEffect(() => {
  //   if (storedUserData) {
  //     setIsPremium(storedUserData.isPremium);
  //     // if (storedUserData && storedUserData.isPremium === true) {
  //     //   actualPlan = storedUserData.isPremium
  //     // } else if (storedUserData && storedUserData.isPremium === false) {
  //     //   actualPlan = storedUserData.isPremium
  //     // }
  //     // if (storedUserData){
  //     actualPlan = storedUserData.isPremium
  //     // }
  //     console.log('actual plan:', actualPlan);
  //   }
  // }, [storedUserData]);

  useEffect(() => {
    if (storedUserData) {
      const generateLink = async () => {
        setLoading(true);
        try {
          const userId = storedUserData.id;
          const { data } = await axios.post(`/api/checkout/?id=${userId}`, {
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

      setIsPremium(storedUserData.isPremium);
      actualPlan = storedUserData.isPremium
    }
  }, [plan]);

  const downgradeAccount = async () => {
    const { data } = await axios.post('/api/downgradeAccount', {
      userId: storedUserData.id,
    })

    if(data.message === 'success'){
      router.push('/landing')
      console.log('success');
    }
    else {
      alert('tu cuenta no se pudo actualizar al plan básico')
    }
  }



  console.log(storedUserData);

  const renderButton = () => {
    if (storedUserData && loading === false) {

      if (storedUserData.isPremium === true) {
        if (plan.type === "premium") {
          return (
            <button id="mercadoPagoButton" className={styles.mercadoPagoButton} disabled>
              Already subscribed to {plan.type}
            </button>
          );
        } else {
          return (
            // <Link href='/landing' >
              <button id="mercadoPagoButton" className={styles.mercadoPagoButton} onClick={downgradeAccount}>
                Subscribe to {plan.type}
              </button>
            // </Link>
          );
        }
      } else {
        if (plan.type === "premium") {
          return (
            <Link href={url}>
              <button id="mercadoPagoButton" className={styles.mercadoPagoButton} >
                Subscribe to {plan.type}
              </button>
            </Link>
          );
        } else {
          return (
            <button id="mercadoPagoButton" className={styles.mercadoPagoButton} disabled>
              Already Subscribed to {plan.type}
            </button>
          );
        }
      }
    }
  };

  return (
    <>
      <div>{loading ? <Loader /> : renderButton()}</div>
    </>
  );
};