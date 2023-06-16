import React, { useState } from "react";
import UserOfferCard from "../UserOfferCard/UserOfferCard";
import formatDate from "../../../../helpers/formatDate";
import UserOfferDetail from "../UserOfferDetail/UserOfferDetail";
import styles from "./UserOfferCardsContainer.module.css";

const UserOfferCardsContainerForDashboard = ({ users }) => {
  const [selectedUserId, setSelectedUserId] = useState(null);

  const onUserSelected = (id) => {
    setSelectedUserId(id);
  };

  return (
    <div className={styles.contains}>
      <div className={styles.containerAll}>
        <div className={styles.scrollableList}>
          <ul className={styles.list}>
            {users.map((user, index) => {
              const formatStart = formatDate(user.start);
              return (
                <UserOfferCard
                  key={index}
                  id={user.id}
                  name={user.name}
                  lastname={user.lastname}
                  progLanguages={user.progLanguages}
                  onUserSelected={onUserSelected}
                />
              );
            })}
          </ul>
        </div>
        <UserOfferDetail selectedUserId={selectedUserId} />
      </div>
    </div>
  );
};

export default UserOfferCardsContainerForDashboard;
