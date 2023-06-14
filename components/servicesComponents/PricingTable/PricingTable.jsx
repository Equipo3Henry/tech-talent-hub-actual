import React from "react";
import PricingPlan from "../pricingPlan/pricingPlan";
import styles from "./pricingTable.module.css";

const pricingTable = ({ plan }) => {
  return (
    <div className={styles.Container}>
      {plan.map((plan, index) => (
        <PricingPlan
          key={index}
          plan={plan}
          borderColor={index === 1 ? "#7155D9" : "#000000"}
        />
      ))}
    </div>
  );
};

export default pricingTable;
