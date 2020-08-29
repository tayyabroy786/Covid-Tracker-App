import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../../api';
import { Bar } from 'react-chartjs-2';

import styles from './LineChart.module.css';


const LineChart = () => {

    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        };

        fetchAPI();
    }, []);

    // making the line chart for global data
    const lineChart = (
        dailyData.length ? (
            <Bar data={{
                labels: dailyData.map(({ reportDate }) => reportDate),
                datasets: [
                    {
                        label: 'Recoverd',
                        fill: false,
                        backgroundColor: 'rgba(0, 255, 0, 0.5)',
                        borderColor: 'rgba(0, 255, 0, 0.5)',
                        data: dailyData.map(({ recovered }) => recovered),
                    },
                    {
                        label: 'Infected',
                        fill: false,
                        backgroundColor: 'rgba(255, 196, 0, 0.5)',
                        borderColor: 'rgba(255, 145, 0, 0.5)',
                        data: dailyData.map(({ confirmed }) => confirmed),
                    },
                    {
                        label: 'Deaths',
                        fill: false,
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        borderColor: 'rgba(255, 0, 0, 0.5)',
                        data: dailyData.map(({ deaths }) => deaths),
                    }],
            }}
                height={350}
                options={{
                    maintainAspectRatio: false
                }}
            />

        ) : null
    );


    return (
        <div className={styles.container}>
            {lineChart}
        </div>
    );
};

export default LineChart;
