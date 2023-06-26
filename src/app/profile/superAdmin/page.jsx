"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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

  return <div>Contenido del SuperDashboardAdmin</div>;
}

export default SuperDashboardAdmin;
