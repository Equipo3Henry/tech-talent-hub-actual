import { plans } from "@/src/mock/plans";
import React from "react";
import { MercadoPagoButton } from "../../MercadoPagoButton/MercadoPagoButton";
import styles from "./pricingPlan.module.css";


const PricingPlan = ({ plan, borderColor }) => {
  return (
    <div>
      <div className={styles.Contenedor} style={{ borderColor: borderColor }}>
        <h1 className={styles.title}>{plan.title}</h1>
        <h3 className={styles.subtitles}>{plan.subtitles}</h3>
        <h1 className={styles.prices}>{plan.priceString}</h1>
        <MercadoPagoButton plan={plan} />
        {/* <button className={styles.button}>Join now</button> */}
        <ul>
          {plan.features.map((feature, index) => (
            <li className={styles.list} key={index}>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingPlan;
