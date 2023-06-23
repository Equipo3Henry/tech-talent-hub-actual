import { plans } from "@/src/mock/plans";
import React, { useEffect } from "react";
import { MercadoPagoButton } from "../../MercadoPagoButton/MercadoPagoButton";
import styles from "./pricingPlan.module.css";

const PricingPlan = ({ plan, borderColor }) => {

  const [notification, setNotification] = useState({
    isOpen: false,
    type: null,
    content: ""
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("status")

    if (status === "approved") {
      setNotification({
        content: "El pago se realizó correctamente",
        isOpen: true,
        type: "approved"
      })
    } else if (status === "failure") {
      setNotification({
        content: "Hubo un error al realizar el pago",
        isOpen: true,
        type: "failure"
      })
    }
//hasdohfsdohf
    setTimeout(() => {
      setNotification({
        isOpen: false,
        type: null,
        content: ""
      })
    }, 5000)
  }, [])

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
      {notification.isOpen && (
        <div className={styles.notification}>
          <div className={styles.iconContainer} style={{ background: notification.type === "approved" ? "#00cc99" : "#ee4646" }}>
            <Image src={`/assets/${notification.type}.svg`} alt={notification.type} width={25} height={25} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingPlan;
