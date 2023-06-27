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

function SuperDashboardAdmin() {
  const { jobs, user, companies, allUsers, setAllUsers } =
    useContext(GlobalContext);

  const router = useRouter();
  const [userb, setUser] = useState(null);

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

  // Renderizar null mientras se está cargando el usuario
  if (!user) {
    return null;
  }

  return (
    <div className={styles.contenedorGeneral}>
      <Header />
      <InfoCard jobs={jobs} user={user} companies={companies} />
      <MercadoPagoData user={user} />
      <div className={styles.containerGraph}>
        <BarcharCompany jobs={jobs} allUsers={allUsers} companies={companies} />
        <Piechar jobs={jobs} user={user} companies={companies} />
        <CountryPieChart allUsers={allUsers} />
        {/*         <Orders />
         */}{" "}
      </div>
      <TableUsers allUsers={allUsers} />
      <br />
      <br />
      <TableCompanies companies={companies} />
      <br />
      <br />
      <TableVacancies jobs={jobs} />
    </div>
  );
}

export default SuperDashboardAdmin;
