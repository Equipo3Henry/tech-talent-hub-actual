import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import UserOfferCard from "../UserOfferCard/UserOfferCard";
import formatDate from "../../../../helpers/formatDate";
import UserOfferDetail from "../UserOfferDetail/UserOfferDetail";
import styles from "./UserOfferCardsContainer.module.css";

const UserOfferCardsContainerForDashboard = ({
  users,
  companyData,
  isLoading,
}) => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (users && users.length > 0) {
      setSelectedUserId(users[0].id);
    }
  }, [users]);

  const onUserSelected = (id) => {
    setSelectedUserId(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {isLoading || !users || !selectedUserId ? (
        <div className={styles.loaderContainer}>
          <div className={styles.spinner}></div>
        </div>
      ) : (
        <div className={styles.contains}>
          <div className={styles.containerAll}>
            <div className={styles.scrollableList}>
              {users.length > 0 ? (
                <div className={styles.fixedBar}>
                  <span className={styles.allCandidates}>Candidates</span>
                </div>
              ) : null}
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
            <div className={styles.detail}>
              <UserOfferDetail
                selectedUserId={selectedUserId}
                users={users}
                companyData={companyData}
                setSelectedUserId={setSelectedUserId}
              />
            </div>
            <ReactModal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              contentLabel="User Details"
              className={styles.modal}
            >
              <UserOfferDetail
                selectedUserId={selectedUserId}
                users={users}
                companyData={companyData}
                setSelectedUserId={setSelectedUserId}
              />
            </ReactModal>
          </div>
        </div>
      )}
    </>
  );
};

export default UserOfferCardsContainerForDashboard;
