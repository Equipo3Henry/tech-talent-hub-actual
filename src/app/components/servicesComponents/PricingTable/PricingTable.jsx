import React from "react";
import styles from "../PricingTable/PricingTable.module.css";
import PricingPlan from "../pricingPlan/pricingPLan";

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
