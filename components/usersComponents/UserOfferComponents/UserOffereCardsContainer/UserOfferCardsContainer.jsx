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
        <div
          style={{
            maxHeight: "572px",
            overflowY: "auto",
            display: "flex", // Asegura que el contenedor se comporte como una columna
          }}
        >
          <ul
            style={{
              flex: "1", // Permite que la lista crezca y ocupe todo el espacio restante
              color: "gray",
              textShadow: "white",
            }}
          >
            {users.map((user, index) => {
              const formatStart = formatDate(user.start);
              return (
                <UserOfferCard
                  key={index}
                  id={user.id}
                  name={user.name}
                  lastName={user.lastName}
                  specialization={user.specialization}
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
