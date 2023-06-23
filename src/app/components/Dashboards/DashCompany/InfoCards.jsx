import React from "react";
import style from './InfoCards.module.css';

const InfoCard = () =>{
    return(
        <div className={style.container}>
            <div className={style.card}>
                <div className={style.cardinfo}>
                    <p className={style.grade}>1 star</p>{/*Aquí se podría cambiar por el */}
                    <p>10 USD</p>
                </div>
                <p className={style.containerlot}>
                    <span className={style.lot}>10</span>
                </p>
            </div>
            <div className={style.card}>
                <div className={style.cardinfo}>
                    <p className={style.grade}>2 stars</p>
                    <p>20 USD</p>
                </div>
                <p className={style.containerlot}>
                    <span className={style.lot}>3</span>
                </p>
            </div>
            <div className={style.card}>
                <div className={style.cardinfo}>
                    <p className={style.grade}>3 stars</p>
                    <p>35 USD</p>
                </div>
                <p className={style.containerlot}>
                    <span className={style.lot}>1</span>
                </p>
            </div>
            <div className={style.card}>
                <div className={style.cardinfo}>
                    <p className={style.grade}>4 stars</p>
                    <p>50 USD</p>
                </div>
                <p className={style.containerlot}>
                    <span className={style.lot}>0</span>
                </p>
            </div>
            <div className={style.cardtotal}>
                <div className={style.cardinfo}>
                    <p className={style.grade}>5 stars</p>
                    <p></p>
                </div>
                <p className={style.containerlot}>
                    <span className={style.lot}>14</span>
                </p>
            </div>
            <div className={style.cardtotal}>
                <div className={style.cardinfo}>
                    <p className={style.grade}>Califications</p>
                    <p></p>
                </div>
                <p className={style.containerlot}>
                    <span className={style.lot}>28</span>
                </p>
            </div>
        </div>
    )
}
export default InfoCard;