import React from "react";
import style from "./InfoCards.module.css";

//import {dataUsers} from

//import {dataCompanies} from
//import {dataVacancies} from
const InfoCard = () => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.cardinfo}>
          <p className={style.grade}>Basic Users</p>
          {/*Aquí se podría cambiar por el */}
          <p>Free</p>
        </div>
        <p className={style.containerlot}>
          <span className={style.lot}>10</span>
        </p>
      </div>
      <div className={style.card}>
        <div className={style.cardinfo}>
          <p className={style.grade}>Premium Users</p>
          <p>20 USD</p>
        </div>
        <p className={style.containerlot}>
          <span className={style.lot}>3</span>
        </p>
      </div>
      <div className={style.card}>
        <div className={style.cardinfo}>
          <p className={style.grade}>total Users</p>
        </div>
        <p className={style.containerlot}>
          <span className={style.lot}>13</span>
        </p>
      </div>
    </div>
  );
};
export default InfoCard;
