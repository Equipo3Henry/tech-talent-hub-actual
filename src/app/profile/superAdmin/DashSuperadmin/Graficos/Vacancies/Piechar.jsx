import React, { useState, useEffect } from "react";
import style from "./Piechar.module.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";
import * as color from "@kurkle/color";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const Piechar = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  useEffect(() => {
    setChartData({
      labels: ["Junior", "Semi-Senior", "Senior"],
      datasets: [
        {
          label: "Vacancies",
          data: [6, 2, 1],
          backgroundColor: ["#25b601", "#c4c700", "#B682D9"],
          borderColor: ["#262626"],
          borderWidth: 1,
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
          text: "Total vacancies = " + "x",
          // text: 'Total vacancies = '+`${vacancies.length}`
        },
        responsive: true,
        maintainAspectRatio: true,
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);
  return (
    <>
      <div className={style.container}>
        <Pie data={chartData} options={chartOptions} />
      </div>
    </>
  );
};
export default Piechar;
