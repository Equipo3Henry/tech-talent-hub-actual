"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GlobalContext } from "../layout";
import { getLayout } from "../layout";
import Header from "./DashSuperadmin/Elementos/Header";
import InfoCard from "./DashSuperadmin/Elementos/InfoCards";
import BarcharCompany from "./DashSuperadmin/Graficos/Companies/Barchar";
import Piechar from "./DashSuperadmin/Graficos/Vacancies/Piechar";
import { useContext } from "react";
import styles from "./dashboard.module.css";
import CountryPieChart from "./DashSuperadmin/Graficos/countries/Countris";
import TableUsers from "./DashSuperadmin/Graficos/Table/table";
import TableCompanies from "./DashSuperadmin/Graficos/TableCompanies/table";
import TableVacancies from "./DashSuperadmin/Graficos/TableVacancies/table";
import MercadoPagoData from "./DashSuperadmin/Graficos/mercadoPago/mercadoPago";
import RevenueChart from "./DashSuperadmin/Graficos/mercadoPago/mercadoPagoGraph";

function SuperDashboardAdmin() {
  const { jobs, user, companies, allUsers, setAllUsers } =
    useContext(GlobalContext);

  const router = useRouter();
  const [userb, setUser] = useState(null);

  //? ACORDEON
  const [accordionState, setAccordionState] = useState({
    ac1: false,
    ac2: false,
    ac3: false,
  });

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const userb = userData ? JSON.parse(userData) : null;
    setUser(userb);
    console.log(userb);
    console.log("hola");

    if (!userb || !userb.superAdmin) {
      router.push("/access-denied");
    }
  }, []);

  const handleAccordionChange = (id) => {
    setAccordionState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  // Renderizar null mientras se está cargando el usuario
  if (!user) {
    return null;
  }

  return (
    <div className={styles.contenedorGeneral}>
      <Header />
      <div className={styles.dataContainer}>
        <div className={styles.infoContainer}>
          <InfoCard jobs={jobs} allUsers={allUsers} companies={companies} />
        </div>
        <RevenueChart allUsers={allUsers} className={styles.mercadopagoChart} />
      </div>
      <div className={styles.containerGraph}>
        <BarcharCompany jobs={jobs} allUsers={allUsers} companies={companies} />
        <Piechar jobs={jobs} user={user} companies={companies} />
        <CountryPieChart allUsers={allUsers} />
        {/*         <Orders />
         */}{" "}
      </div>
      <section className={styles.ac_container}>
        <div>
          <input
            id="ac-1"
            name="accordion-1"
            type="radio"
            checked={accordionState.ac1}
            onChange={() => handleAccordionChange("ac1")}
          />
          <label htmlFor="ac-1">Users Table</label>
          <article
            className={`${styles.ac_small} ${
              accordionState.ac1 ? styles.active : ""
            }`}
          >
            <TableUsers allUsers={allUsers} />
          </article>
        </div>
        <div>
          <input
            id="ac-2"
            name="accordion-1"
            type="radio"
            checked={accordionState.ac2}
            onChange={() => handleAccordionChange("ac2")}
          />
          <label htmlFor="ac-2">Companies Table</label>
          <article
            className={`${styles.ac_medium} ${
              accordionState.ac2 ? styles.active : ""
            }`}
          >
            <TableCompanies companies={companies} />
          </article>
        </div>
        <div>
          <input
            id="ac-3"
            name="accordion-1"
            type="radio"
            checked={accordionState.ac3}
            onChange={() => handleAccordionChange("ac3")}
          />
          <label htmlFor="ac-3">Vacancies Table</label>
          <article
            className={`${styles.ac_large} ${
              accordionState.ac3 ? styles.active : ""
            }`}
          >
            <TableVacancies jobs={jobs} />
          </article>
        </div>
      </section>
      ;
    </div>
  );
}

export default SuperDashboardAdmin;
