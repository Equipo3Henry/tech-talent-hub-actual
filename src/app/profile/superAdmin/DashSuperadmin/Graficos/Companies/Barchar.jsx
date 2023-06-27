import React, { useState, useEffect } from "react";
import style from "./Barchar.module.css";
import { Bar } from "react-chartjs-2";
import Layout from "@/src/app/company/layout";
import * as color from "@kurkle/color";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarcharCompany = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  useEffect(() => {
    setChartData({
      labels: ["Basic", "remium"],
      datasets: [
        {
          label: "Users",
          // data: [10, 50, 1000], basicUsers.amount, proUsers.amount, goldUsers.amount, globalUsers.amount
          data: [10, 3],
          borderColor: "#262626",
          backgroundColor: "#B682D9",
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Users suscription",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);
  return (
    <>
      <div className={style.container}>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};
export default BarcharCompany;
