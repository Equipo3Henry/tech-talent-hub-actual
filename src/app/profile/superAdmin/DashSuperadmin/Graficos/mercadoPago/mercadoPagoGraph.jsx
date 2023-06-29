import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { startOfWeek, startOfMonth, startOfYear, format } from "date-fns";
import styles from "./mercadoPagoGraph.module.css";
function RevenueChart({ users }) {
  const [timeInterval, setTimeInterval] = useState("day");
  const [data, setData] = useState([]);

  const handleTimeIntervalChange = (event) => {
    setTimeInterval(event.target.value);
  };

  useEffect(() => {
    const revenueByDate = {};
    const formatter =
      timeInterval === "day"
        ? (date) => date
        : timeInterval === "week"
        ? (date) => format(startOfWeek(new Date(date)), "yyyy-MM-dd")
        : timeInterval === "month"
        ? (date) => format(startOfMonth(new Date(date)), "yyyy-MM")
        : (date) => format(startOfYear(new Date(date)), "yyyy");

    (users || []).forEach((user) => {
      if (user.isPremium) {
        const premiumDate = formatter(user.premiumUpdateDate.split("T")[0]);

        if (revenueByDate[premiumDate]) {
          revenueByDate[premiumDate] += 15;
        } else {
          revenueByDate[premiumDate] = 15;
        }
      }
    });

    const newData = Object.keys(revenueByDate)
      .map((date) => ({
        date,
        revenue: revenueByDate[date],
      }))
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    setData(newData);
  }, [timeInterval, users]);

  return (
    <div className={styles.contenedorGeneral}>
      <div className={styles.contenedorSelector}>
        <select
          onChange={handleTimeIntervalChange}
          value={timeInterval}
          className={styles.selectors}
        >
          <option value="day">Día</option>
          <option value="week">Semana</option>
          <option value="month">Mes</option>
          <option value="year">Año</option>
        </select>
        <LineChart
          width={750}
          height={404}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </div>
  );
}

export default RevenueChart;
