import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { startOfWeek, endOfWeek, format } from "date-fns"; // importando funciones de date-fns

function RevenueChart({ allUsers }) {
  const [timeInterval, setTimeInterval] = useState("day"); // añade un estado para el intervalo de tiempo

  // Un handler para cambiar el intervalo de tiempo
  const handleTimeIntervalChange = (event) => {
    setTimeInterval(event.target.value);
  };

  // Añade una función para generar datos de ingresos en función del intervalo de tiempo
  function generateRevenueData(allUsers) {
    const revenueByDate = {};
    const formatter =
      timeInterval === "week"
        ? (date) => format(startOfWeek(new Date(date)), "yyyy-MM-dd")
        : (date) => date;

    allUsers.forEach((user) => {
      if (user.isPremium) {
        const premiumDate = formatter(user.premiumUpdateDate.split("T")[0]);

        if (revenueByDate[premiumDate]) {
          revenueByDate[premiumDate] += 15;
        } else {
          revenueByDate[premiumDate] = 15;
        }
      }
    });

    return Object.keys(revenueByDate).map((date) => ({
      date,
      revenue: revenueByDate[date],
    }));
  }

  const data = generateRevenueData(allUsers);

  return (
    <div>
      <select onChange={handleTimeIntervalChange} value={timeInterval}>
        <option value="day">Día</option>
        <option value="week">Semana</option>
        <option value="month">Mes</option>
        <option value="year">Año</option>
      </select>
      <LineChart
        width={500}
        height={300}
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
  );
}

export default RevenueChart;
