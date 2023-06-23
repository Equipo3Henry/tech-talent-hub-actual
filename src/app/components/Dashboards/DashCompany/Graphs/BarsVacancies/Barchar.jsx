import React, { useState, useEffect } from "react";
import style from './Barchar.module.css';
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Barchar = () =>{
    const [chartData, setChartData] = useState({
        datasets: [],
    })
    const [chartOptions, setChartOptions] = useState({})
    useEffect(() =>{
        setChartData({
            labels: ['Vacancies', 'Apply'],
            datasets:[
                {
                    label: 'CV sends',
                    // data: [10, 50, 1000], basicUsers.amount, proUsers.amount, goldUsers.amount, globalUsers.amount 
                    data: [10, 3],
                    borderColor: '#262626',
                    backgroundColor: '#B682D9',
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
                    text: 'Vacancies Apply',
                }
            },
            maintainAspectRatio: false,
            responsive: true,
        })
    }, [])
    return(
        <>
            <div className={style.container}>
                <Bar data={chartData} options={chartOptions}/>
            </div>
        </>
    )
}
export default Barchar;