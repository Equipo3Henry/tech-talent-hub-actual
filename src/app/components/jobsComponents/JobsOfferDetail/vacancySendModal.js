"use client";
import style from "./vacancySendModal.module.css";
import { useState } from "react";

//? TOGGLE MODAL
const toggleModal = () => {
  const [showModal, setShowModal] = useState(false);
  setShowModal(!showModal);
  return (
    <>
      {showModal && (
        <div className={style.modal}>
          <div className={style.overlay} onclick={toggleModal} />
          <div className={style.modal_content}>
            <h2>Send vacancy apply</h2>
            <p>You are sending a vacancy apply</p>
          </div>
        </div>
      )}
    </>
  );
};
export default toggleModal;
