import styles from "./UserOfferCard.module.css";
import Image from "next/image";
import Link from "next/link";

const UserOfferCard = ({
  id,
  name,
  lastName,
  specialization,
  onUserSelected,
}) => {
  return (
    <div
      className={styles.Container}
      key={id}
      onClick={() => onUserSelected(id)}
    >
      <div className={styles.InfoContainer}>
        <div className={styles.nameContainer}>
          <span className={styles.nameUser}>
            {name} {lastName}
          </span>
        </div>
        <div className={styles.softwareSkills}>
          <h1>{specialization}</h1>
        </div>
      </div>
    </div>
  );
};

export default UserOfferCard;
