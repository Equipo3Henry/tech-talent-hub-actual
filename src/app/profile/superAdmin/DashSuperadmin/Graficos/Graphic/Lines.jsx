import React, { useState, useEffect } from "react";
import style from './Lines.module.css';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const Lines = () =>{
    const [chartData, setChartData] = useState({
        datasets: [],
    })
    const [chartOptions, setChartOptions] = useState({})
    useEffect(() =>{
        setChartData({
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets:[
                {
                    label: 'Users',
                    data: [0, 0, 0, 0, 0],
                    tension: 0.5,
                    fill: false,
                    borderColor: 'rgb(0, 160, 8)',
                    backgroundColor: 'rgb(25, 192, 192)',
                    pointerRadius: 2,
                    pointerBorderColor: 'rgb(52, 143, 53)',
                    pointerBackgroundColor: 'rgb(53, 103,12)',
                },
                {
                    label: 'companies',
                    data: [3, 5, 12, 26, 68, 78, 40, 97, 100, 81, 6, 5, 140],
                    tension: 0.5,
                    fill: false,
                    borderColor: 'rgb(0, 20, 136)',
                    backgroundColor: 'rgb(25, 192, 192)',
                    pointerRadius: 2,
                    pointerBorderColor: 'rgb(52, 143, 53)',
                    pointerBackgroundColor: 'rgb(53, 103,12)',
                },
                {
                    label: 'Vacancies',
                    data: [10, 3, 5, 14, 96, 27, 40, 59, 80, 81, 56, 55, 40],
                    tension: 0.5,
                    fill: false,
                    borderColor: 'rgb(255, 238, 0)',
                    backgroundColor: 'rgb(25, 192, 192)',
                    pointerRadius: 2,
                    pointerBorderColor: 'rgb(52, 143, 53)',
                    pointerBackgroundColor: 'rgb(53, 103,12)',
                },
            ]
        })
        setChartOptions({
            plugins:{
                legend:{
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Total Users = '+'x',
                    // text: 'Total Users = '+'Users.length',
                }
            },
            maintainAspectRatio: false,
            responsive: true,
        })
    }, [])
    return(
        <>
            <div className={style.container}>
                <Line data={chartData} options={chartOptions}/>
            </div>
        </>
    )
}
export default Lines;