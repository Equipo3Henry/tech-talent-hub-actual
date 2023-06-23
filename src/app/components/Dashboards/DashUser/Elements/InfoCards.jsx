import React from "react";
import style from './InfoCards.module.css';

const InfoCard = () =>{
    return(
        <div className={style.container}>
            <div className={style.card}>
                <div className={style.cardinfo}>
                    <p className={style.grade}>CV sended</p>{/*Aquí se podría cambiar por el */}
                    <p></p>
                </div>
                <p className={style.containerlot}>
                    <span className={style.lot}>10</span>
                </p>
            </div>
            <div className={style.card}>
                <div className={style.cardinfo}>
                    <p className={style.grade}>Reviews</p>{/*Aquí se podría cambiar por el */}
                    <p></p>
                </div>
                <p className={style.containerlot}>
                    <span className={style.lot}>10</span>
                </p>
            </div>
        </div>
    )
}
export default InfoCard;