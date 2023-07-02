"use client";

import { useEffect, useState } from "react";
import styles from "../MercadoPagoButton/MercadoPagoButton.module.css";
import { Loader } from "../Loader/Loader";
import Link from "next/link";
import axios from "axios";
import { GlobalContext } from "../../profile/layout";
import { useRouter } from "next/navigation";

export const MercadoPagoButton = ({ plan, section }) => {
  const [url, setUrl] = useState("/loginpro");
  const [isPremium, setIsPremium] = useState(false);
  const [loading, setLoading] = useState(true);
  // const [landing, setLanding] = useState(false)
  const router = useRouter();

  // Check for window
  const isBrowser = typeof window !== "undefined";
  const storedUserData = isBrowser
    ? JSON.parse(localStorage.getItem("userData"))
    : null;

  //? MODAL STATE
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  //? USE STATE MODAL OK
  const [showModalOK, setShowModalOK] = useState(false);

  const toggleModalOK = () => {
    setShowModalOK(!showModalOK);
  };

  //? USE STATE MODAL ERROR
  const [deactivationError, setDeactivationError] = useState(false);

  const toggleModalError = () => {
    setDeactivationError(!deactivationError);
  };

  useEffect(() => {
    if (!storedUserData) {
      setLoading(false);
      // setLanding(true)
    }
    if (storedUserData) {
      // setLanding(false)
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
      // actualPlan = storedUserData.isPremium
    }
  }, [plan]);

  const downgradeAccount = async () => {
    const { data } = await axios.post("/api/downgradeAccount", {
      userId: storedUserData.id,
    });

    if (data.message === "success") {
      router.push("/landing");
      console.log("success");
    } else {
      alert("tu cuenta no se pudo actualizar al plan básico");
    }
  };

  console.log(storedUserData);

  const renderButton = () => {
    if (section === "landing") {
      return (
        <Link href="/loginpro">
          <button id="mercadoPagoButton" className={styles.mercadoPagoButton}>
            Join Now!
          </button>
        </Link>
      );
    }
    // if (!plan) {
    //   return (
    //     <Link href="/loginpro">
    //       <button id="mercadoPagoButton" className={styles.mercadoPagoButton}>
    //         Join Now!
    //       </button>
    //     </Link>
    //   );
    // }

    // if (!storedUserData) {
    //   <Link href='/loginpro'>
    //     <button id="mercadoPagoButton" className={styles.mercadoPagoButton} >
    //       Join Now!
    //     </button>
    //   </Link>
    if (storedUserData && loading === false) {
      if (storedUserData.isPremium === true) {
        if (plan.type === "premium") {
          return (
            <button
              id="mercadoPagoButton"
              className={styles.mercadoPagoButtonDisabled}
              disabled
            >
              Already subscribed to {plan.type}
            </button>
          );
        } else {
          return (
            // <Link href='/landing' >
            <div onClick={toggleModal}>
              <button
                id="mercadoPagoButton"
                className={styles.mercadoPagoButton}
                // onClick={downgradeAccount}
              >
                Subscribe to {plan.type}
              </button>
            </div>
            // </Link>
          );
        }
      } else {
        if (plan.type === "premium") {
          return (
            <Link href={url}>
              <button
                id="mercadoPagoButton"
                className={styles.mercadoPagoButton}
              >
                Subscribe to {plan.type}
              </button>
            </Link>
          );
        } else {
          return (
            <button
              id="mercadoPagoButton"
              className={styles.mercadoPagoButtonDisabled}
              disabled
            >
              Already Subscribed to {plan.type}
            </button>
          );
        }
      }
    }
    // }
  };

  return (
    <>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.overlay} onClick={toggleModal}></div>
          <div className={styles.modal_content}>
            <h2>Are you sure you want to downgrade your account to basic plan?</h2>
            <div className={styles.modal_buttons}>
              <button className={styles.btn_modal1} onClick={downgradeAccount}>
                Confirm
              </button>
              <button className={styles.btn_modal2} onClick={toggleModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      {/* <div>{landing && loading ? <Loader /> : <Link href='/loginpro'>
        <button id="mercadoPagoButton" className={styles.mercadoPagoButton} >
          Join Now!
        </button>
      </Link>}</div> */}
      <div>{loading ? <Loader /> : renderButton()}</div>
    </>
  );
};
