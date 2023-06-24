import React, { useState } from "react";
import UserOfferCard from "../UserOfferCard/UserOfferCard";
import formatDate from "../../../../helpers/formatDate";
import UserOfferDetail from "../UserOfferDetail/UserOfferDetail";
import styles from "./UserOfferCardsContainer.module.css";
import { useEffect } from "react";

const UserOfferCardsContainerForDashboard = ({ users, companyData }) => {
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    // seleccionar automáticamente el primer usuario cuando se monte el componente
    if (users && users.length > 0) {
      setSelectedUserId(users[0].id);
    }
  }, [users]);

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
        <UserOfferDetail
          selectedUserId={selectedUserId}
          users={users}
          companyData={companyData}
          setSelectedUserId={setSelectedUserId}
        />
      </div>
    </div>
  );
};

export default UserOfferCardsContainerForDashboard;
