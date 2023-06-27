import React, { useState, useEffect } from "react";
import style from "./Barchar.module.css";
import { Bar } from "react-chartjs-2";
import Layout from "@/src/app/company/layout";

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
const BarcharCompany = ({ allUsers }) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    // Initialize counters
    let basicCount = 0;
    let premiumCount = 0;

    // Iterate over all users and increment the appropriate counter
    allUsers.forEach((user) => {
      if (user.isPremium) {
        premiumCount++;
      } else {
        basicCount++;
      }
    });

    // Set the chart data state
    setChartData({
      labels: ["Basic", "Premium"],
      datasets: [
        {
          label: "Users",
          data: [basicCount, premiumCount],
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
          text: "Users subscription",
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, [allUsers]); // Here, we have added allUsers as a dependency. useEffect will run whenever allUsers changes

  return (
    <div className={style.container}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarcharCompany;
