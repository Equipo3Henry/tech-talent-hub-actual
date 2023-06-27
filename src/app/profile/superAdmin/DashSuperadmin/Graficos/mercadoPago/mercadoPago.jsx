import React, { useState } from "react";
import { Card } from "react-bootstrap";

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
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Income Overview</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {calcType.charAt(0).toUpperCase() + calcType.slice(1)} Income
        </Card.Subtitle>
        <Card.Text>${getIncome()}</Card.Text>
        <button onClick={() => setCalcType("daily")}>Daily</button>
        <button onClick={() => setCalcType("weekly")}>Weekly</button>
        <button onClick={() => setCalcType("monthly")}>Monthly</button>
        <button onClick={() => setCalcType("annual")}>Annual</button>
      </Card.Body>
    </Card>
  );
}

export default MercadoPagoData;
