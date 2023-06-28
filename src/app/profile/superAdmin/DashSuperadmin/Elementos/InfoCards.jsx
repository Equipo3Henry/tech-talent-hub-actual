import React, { useState } from "react";
import style from "./InfoCards.module.css";
import MercadoPagoData from "../Graficos/mercadoPago/mercadoPago";

//import {dataUsers} from

//import {dataCompanies} from
//import {dataVacancies} from
const InfoCard = ({ allUsers, companies }) => {
  // Define timeframes
  const timeframes = {
    DAY: "Day",
    MONTH: "Month",
    YEAR: "Year",
    TOTAL: "Total",
  };

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

  const newUsersToday = allUsers.filter(
    (user) => new Date(user.createdAt) > oneDayAgo
  ).length;
  const newUsersThisMonth = allUsers.filter(
    (user) => new Date(user.createdAt) > oneMonthAgo
  ).length;
  const newUsersThisYear = allUsers.filter(
    (user) => new Date(user.createdAt) > oneYearAgo
  ).length;
  const totalUsers = allUsers.length;

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
          <p className={style.grade}>Total Users</p>
          <div>
            <button onClick={() => setUserTimeframe(timeframes.DAY)}>
              Day
            </button>
            <button onClick={() => setUserTimeframe(timeframes.MONTH)}>
              Month
            </button>
            <button onClick={() => setUserTimeframe(timeframes.YEAR)}>
              Year
            </button>
            <button onClick={() => setUserTimeframe(timeframes.TOTAL)}>
              Total
            </button>
          </div>
        </div>
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
      <div className={style.card}>
        <div className={style.cardinfo}>
          <p className={style.grade}>Total Companies</p>
          <div>
            <button onClick={() => setCompanyTimeframe(timeframes.DAY)}>
              Day
            </button>
            <button onClick={() => setCompanyTimeframe(timeframes.MONTH)}>
              Month
            </button>
            <button onClick={() => setCompanyTimeframe(timeframes.YEAR)}>
              Year
            </button>
            <button onClick={() => setCompanyTimeframe(timeframes.TOTAL)}>
              Total
            </button>
          </div>
        </div>
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
      <div className={style.card}>
        <div className={style.cardinfo}>
          <p className={style.grade}>Total Entities</p>
          <div>
            <button onClick={() => setEntityTimeframe(timeframes.DAY)}>
              Day
            </button>
            <button onClick={() => setEntityTimeframe(timeframes.MONTH)}>
              Month
            </button>
            <button onClick={() => setEntityTimeframe(timeframes.YEAR)}>
              Year
            </button>
            <button onClick={() => setEntityTimeframe(timeframes.TOTAL)}>
              Total
            </button>
          </div>
        </div>
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
      <MercadoPagoData allUsers={allUsers} />
    </div>
  );
};
export default InfoCard;
