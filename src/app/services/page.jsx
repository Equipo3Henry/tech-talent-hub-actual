import React from "react";
import PricingTable from "../components/servicesComponents/PricingTable/PricingTable";
import styles from "./services.module.css";
import Link from "next/link";

const plans = [
  {
    title: "Option 1",
    subtitles: "Lorem ipsum dolor sit amet",
    price: "Free",
    features: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    title: "Option 2",
    subtitles: "Lorem ipsum dolor sit amet",
    price: "$15",
    features: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

const Services = () => {
  return (
    <div>
      <div className={styles.ServicesContainer}>
        <div className={styles.texts_container}>
          <h1 className={styles.title}>Our Services</h1>
          <p className={styles.paragraph}>
            Find the plan that best suits your needs
          </p>
        </div>
        <div className={styles.plansContainer}>
          <PricingTable plan={plans} />
        </div>
      </div>
    </div>
  );
};

export default Services;
