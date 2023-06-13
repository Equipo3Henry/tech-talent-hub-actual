import React from "react";
import PricingTable from "../../components/PricingTable/PricingTable";
import styles from "./services.module.css";

const plans = [
  {
    title: "Option 1",
    subtitles: "Lorem ipsum dolor sit amet",
    price: 0,
    features: [
      "Lorem Ipsum per por cuasit amet, consectur bunc eget.",
      "Lorem Ipsum per por cuasit amet, consectur bunc eget. Margaret Tatcher, Harry Potter, Ron Weasley, Alfred estuvo aqui.",
      "End of passion play, crumbling away, I’m your source of self-destruction. ",
    ],
  },
  {
    title: "Option 2",
    subtitles: "Lorem ipsum dolor sit amet",
    price: 15,
    features: [
      "Lorem Ipsum per por cuasit amet, consectur bunc eget.",
      "Lorem Ipsum per por cuasit amet, consectur bunc eget. Margaret Tatcher, Harry Potter, Ron Weasley, Alfred estuvo aqui.",
      "End of passion play, crumbling away, I’m your source of self-destruction. ",
    ],
  },
  {
    title: "Option 3",
    subtitles: "Lorem ipsum dolor sit amet",
    price: 35,
    features: [
      "Lorem Ipsum per por cuasit amet, consectur bunc eget.",
      "Lorem Ipsum per por cuasit amet, consectur bunc eget. Margaret Tatcher, Harry Potter, Ron Weasley, Alfred estuvo aqui.",
      "End of passion play, crumbling away, I’m your source of self-destruction. ",
    ],
  },
];

const Page = () => {
  return (
    <div>
      <div className={styles.ServicesContainer}>
        <div>
          <h1 className={styles.title}>Services</h1>
        </div>
        <div className={styles.plansContainer}>
          <PricingTable plan={plans} />
        </div>
      </div>
    </div>
  );
};

export default Page;
