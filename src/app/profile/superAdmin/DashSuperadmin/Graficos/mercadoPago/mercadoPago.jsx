import React, { useState } from "react";
import { Card } from "react-bootstrap";
import styles from "./mercadoPago.module.css";

function MercadoPagoData({ allUsers }) {
  const [calcType, setCalcType] = useState("daily");

  const getIncome = () => {
    let income = 0;
    const premiumCost = 15;

    const currentDate = new Date();

    allUsers.forEach((user) => {
      if (user.isPremium) {
        const premiumDate = new Date(user.premiumUpdateDate);
        const timeDiff = Math.abs(currentDate - premiumDate);

        switch (calcType) {
          case "daily":
            if (timeDiff <= 24 * 60 * 60 * 1000) {
              income += premiumCost;
            }
            break;
          case "weekly":
            if (timeDiff <= 7 * 24 * 60 * 60 * 1000) {
              income += premiumCost;
            }
            break;
          case "monthly":
            if (timeDiff <= 30 * 24 * 60 * 60 * 1000) {
              income += premiumCost;
            }
            break;
          case "annual":
            if (timeDiff <= 365 * 24 * 60 * 60 * 1000) {
              income += premiumCost;
            }
            break;
          default:
            break;
        }
      }
    });
    return income;
  };

  return (
    <Card className={styles.contenedor}>
      <Card.Body className={styles.bod}>
        <div className={styles.textContenedor}>
          <div className={styles.tituloContenedor}>
            <Card.Title className={styles.Title}>Income Overview</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {calcType.charAt(0).toUpperCase() + calcType.slice(1)} Income
            </Card.Subtitle>
          </div>
          <Card.Text className={styles.Number}>${getIncome()}</Card.Text>
        </div>
        <div className={styles.botonera}>
          <button
            onClick={() => setCalcType("daily")}
            className={styles.Button}
          >
            D{" "}
          </button>
          <button
            onClick={() => setCalcType("weekly")}
            className={styles.Button}
          >
            W
          </button>
          <button
            onClick={() => setCalcType("monthly")}
            className={styles.Button}
          >
            M
          </button>
          <button
            onClick={() => setCalcType("annual")}
            className={styles.Button}
          >
            A
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default MercadoPagoData;
