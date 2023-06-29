"use client";

import React, { useState } from "react";
import style from "./InfoCards.module.css";
import MercadoPagoData from "../Graficos/mercadoPago/mercadoPago";

//import {dataUsers} from

//import {dataCompanies} from
//import {dataVacancies} from
const InfoCard = ({ users, companies }) => {
  // Define timeframes
  const timeframes = {
    DAY: "Day",
    MONTH: "Month",
    YEAR: "Year",
    TOTAL: "Total",
  };

  if (!users || !companies) {
    return null; // o tu componente de carga
  }
  // Initialize state
  const [userTimeframe, setUserTimeframe] = useState(timeframes.DAY);
  const [companyTimeframe, setCompanyTimeframe] = useState(timeframes.DAY);
  const [entityTimeframe, setEntityTimeframe] = useState(timeframes.DAY);

  // Compute counts
  const todaysDate = new Date();
  const oneDayAgo = new Date(todaysDate.setDate(todaysDate.getDate() - 1));
  const oneMonthAgo = new Date(todaysDate.setMonth(todaysDate.getMonth() - 1));
  const oneYearAgo = new Date(
    todaysDate.setFullYear(todaysDate.getFullYear() - 1)
  );

  const newUsersToday = users.filter(
    (user) => new Date(user.createdAt) > oneDayAgo
  ).length;
  const newUsersThisMonth = users.filter(
    (user) => new Date(user.createdAt) > oneMonthAgo
  ).length;
  const newUsersThisYear = users.filter(
    (user) => new Date(user.createdAt) > oneYearAgo
  ).length;
  const totalUsers = users.length;

  const newCompaniesToday = companies.filter(
    (company) => new Date(company.createdAt) > oneDayAgo
  ).length;
  const newCompaniesThisMonth = companies.filter(
    (company) => new Date(company.createdAt) > oneMonthAgo
  ).length;
  const newCompaniesThisYear = companies.filter(
    (company) => new Date(company.createdAt) > oneYearAgo
  ).length;
  const totalCompanies = companies.length;

  const newEntitiesToday = newUsersToday + newCompaniesToday;
  const newEntitiesThisMonth = newUsersThisMonth + newCompaniesThisMonth;
  const newEntitiesThisYear = newUsersThisYear + newCompaniesThisYear;
  const totalEntities = totalUsers + totalCompanies;

  // Function to get the displayed count
  const getCount = (dayCount, monthCount, yearCount, totalCount, timeframe) => {
    switch (timeframe) {
      case timeframes.DAY:
        return dayCount;
      case timeframes.MONTH:
        return monthCount;
      case timeframes.YEAR:
        return yearCount;
      case timeframes.TOTAL:
        return totalCount;
      default:
        return 0;
    }
  };

  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.cardinfo}>
          <div>
            <p className={style.grade}>Users</p>
            <p className={style.containerlot}>
              <span className={style.lot}>
                {getCount(
                  newUsersToday,
                  newUsersThisMonth,
                  newUsersThisYear,
                  totalUsers,
                  userTimeframe
                )}
              </span>
            </p>
          </div>
          <div className={style.botonera}>
            <button
              onClick={() => setUserTimeframe(timeframes.DAY)}
              className={style.Button}
            >
              D
            </button>
            <button
              onClick={() => setUserTimeframe(timeframes.MONTH)}
              className={style.Button}
            >
              M
            </button>
            <button
              onClick={() => setUserTimeframe(timeframes.YEAR)}
              className={style.Button}
            >
              Y
            </button>
            <button
              onClick={() => setUserTimeframe(timeframes.TOTAL)}
              className={style.Button}
            >
              T
            </button>
          </div>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.cardinfo}>
          <div className={style.textContainer}>
            <p className={style.grade}>Companies</p>
            <p className={style.containerlot}>
              <span className={style.lot}>
                {getCount(
                  newCompaniesToday,
                  newCompaniesThisMonth,
                  newCompaniesThisYear,
                  totalCompanies,
                  companyTimeframe
                )}
              </span>
            </p>
          </div>
          <div className={style.botonera}>
            <button
              onClick={() => setCompanyTimeframe(timeframes.DAY)}
              className={style.Button}
            >
              D
            </button>
            <button
              onClick={() => setCompanyTimeframe(timeframes.MONTH)}
              className={style.Button}
            >
              M
            </button>
            <button
              onClick={() => setCompanyTimeframe(timeframes.YEAR)}
              className={style.Button}
            >
              Y
            </button>
            <button
              onClick={() => setCompanyTimeframe(timeframes.TOTAL)}
              className={style.Button}
            >
              T
            </button>
          </div>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.cardinfo}>
          <div className={style.textContainer}>
            <p className={style.grade}>All Members</p>
            <p className={style.containerlot}>
              <span className={style.lot}>
                {getCount(
                  newEntitiesToday,
                  newEntitiesThisMonth,
                  newEntitiesThisYear,
                  totalEntities,
                  entityTimeframe
                )}
              </span>
            </p>
          </div>
          <div className={style.botonera}>
            {" "}
            <button
              onClick={() => setEntityTimeframe(timeframes.DAY)}
              className={style.Button}
            >
              D
            </button>
            <button
              onClick={() => setEntityTimeframe(timeframes.MONTH)}
              className={style.Button}
            >
              M
            </button>
            <button
              onClick={() => setEntityTimeframe(timeframes.YEAR)}
              className={style.Button}
            >
              Y
            </button>
            <button
              onClick={() => setEntityTimeframe(timeframes.TOTAL)}
              className={style.Button}
            >
              T
            </button>
          </div>
        </div>
      </div>
      <MercadoPagoData users={users} />
    </div>
  );
};
export default InfoCard;
