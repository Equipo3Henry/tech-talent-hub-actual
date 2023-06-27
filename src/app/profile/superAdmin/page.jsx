"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GlobalContext } from "../layout";
import { getLayout } from "../layout";
import Header from "./DashSuperadmin/Elementos/Header";
import InfoCard from "./DashSuperadmin/Elementos/InfoCards";
import BarcharCompany from "./DashSuperadmin/Graficos/Companies/Barchar";
import Piechar from "./DashSuperadmin/Graficos/Vacancies/Piechar";
import * as color from "@kurkle/color";
import { useContext } from "react";

function SuperDashboardAdmin() {
  const { jobs, user, companies } = useContext(GlobalContext);

  const router = useRouter();
  const [userb, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const userb = userData ? JSON.parse(userData) : null;

    setUser(userb);

    if (!userb || !user.superAdmin) {
      router.push("/access-denied");
    }
  }, []);

  // Renderizar null mientras se está cargando el usuario
  if (!user) {
    return null;
  }

  return (
    <div>
      <Header />
      <InfoCard />
      <div className={style.stats}>
        <BarcharCompany className={style.elemento} />
        <Piechar className={style.elemento} />
        {/*         <Orders />
         */}{" "}
      </div>
    </div>
  );
}

export default SuperDashboardAdmin;
