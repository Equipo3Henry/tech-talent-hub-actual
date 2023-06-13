"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function page(props) {
  const router = useRouter();

  console.log(router.pathname);

  return (
    <div style={{ color: "blue", lineHeight: 10, margin: 150 }}>
      <h1>hola!</h1>
    </div>
  );
}

export default page;
