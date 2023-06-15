import styles from "./UserOfferCard.module.css";
import Image from "next/image";
import Link from "next/link";

const UserOfferCard = ({
  id,
  name,
  lastname,
  progLanguages,
  onUserSelected,
}) => {
  const formattedLanguages = progLanguages
    .map((lang) => lang.charAt(0).toUpperCase() + lang.slice(1))
    .join(", ");

  return (
    <div
      className={styles.Container}
      key={id}
      onClick={() => onUserSelected(id)}
    >
      <div className={styles.InfoContainer}>
        <div className={styles.nameContainer}>
          <span className={styles.nameUser}>
            {name} {lastname}
          </span>
        </div>
        <div className={styles.progLanguages}>
          <h1>{formattedLanguages}</h1>
        </div>
      </div>
    </div>
  );
};

export default UserOfferCard;
