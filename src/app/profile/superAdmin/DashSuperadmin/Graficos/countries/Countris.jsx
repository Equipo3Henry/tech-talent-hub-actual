import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";
import styles from "./countries.module.css";

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const CountryPieChart = ({ allUsers }) => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    // Initialize the country counters
    let countryCounts = {};

    allUsers.forEach((user) => {
      // Increase the counter for the user's country or set it to 1 if it does not exist yet
      countryCounts[user.country] = countryCounts[user.country]
        ? countryCounts[user.country] + 1
        : 1;
    });

    // Set the chart data state
    setChartData({
      labels: Object.keys(countryCounts),
      datasets: [
        {
          label: "Users",
          data: Object.values(countryCounts),
          backgroundColor: [
            "#6850BF",
            "#262626",
            "#7155D9",
            "#267526",
            "#602626",
            "#26267A",
            "#AA2626",
            "#2670D9",
            "#AC76D9",
            "#D92626",
            "#2626AE",
            "#269996",
            "#D9267D",
            "#26D963",
            "#2626D9",
            "#D97F26",
            "#3B26D9",
            "#D92651",
            "#26D9B4",
            "#9E26D9",
          ],
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
          text: `Total users = ${allUsers.length}`,
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, [allUsers]); // Here, we have added users as a dependency. useEffect will run whenever users changes.

  return (
    <div className={styles.piechart}>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default CountryPieChart;
