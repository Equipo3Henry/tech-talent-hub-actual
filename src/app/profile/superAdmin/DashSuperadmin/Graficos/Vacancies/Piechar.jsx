import React, { useState, useEffect } from "react";
import style from "./Piechar.module.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Title, Tooltip, Legend);
const Piechar = ({ jobs }) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    // Initialize counters
    let juniorCount = 0;
    let semiSeniorCount = 0;
    let seniorCount = 0;

    jobs.forEach((job) => {
      switch (job.seniority) {
        case "JUNIOR":
          juniorCount++;
          break;
        case "SEMISENIOR":
          semiSeniorCount++;
          break;
        case "SENIOR":
          seniorCount++;
          break;
        default:
          break;
      }
    });

    // Set the chart data state
    setChartData({
      labels: ["Junior", "Semi-Senior", "Senior"],
      datasets: [
        {
          label: "Vacancies",
          data: [juniorCount, semiSeniorCount, seniorCount],
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
          text: `Total vacancies = ${jobs.length}`,
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, [jobs]); // Here, we have added jobs as a dependency. useEffect will run whenever jobs changes.

  return (
    <div className={style.container}>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default Piechar;
