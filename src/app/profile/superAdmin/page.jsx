"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GlobalContext } from "../layout";
import { getLayout } from "../layout";
import Header from "./DashSuperadmin/Elementos/Header";
import InfoCard from "./DashSuperadmin/Elementos/InfoCards";
import BarcharCompany from "./DashSuperadmin/Graficos/Companies/Barchar";
import Piechar from "./DashSuperadmin/Graficos/Vacancies/Piechar";

function SuperDashboardAdmin() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    const user = userData ? JSON.parse(userData) : null;

    setUser(user);

    if (!user || !user.superAdmin) {
      router.push("/access-denied");
    }
  }, []);

  // Renderizar null mientras se está cargando el usuario
  if (!user) {
    return null;
  }

  return(
    <div>
      <Header/>
      <InfoCard/>
      <div className={style.stats}>
        <BarcharCompany className={style.elemento} />
        <Piechar className={style.elemento}/>
        <Orders/>
      </div>
    </div>
  );
}

export default SuperDashboardAdmin;
