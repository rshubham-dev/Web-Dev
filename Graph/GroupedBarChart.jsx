import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



const GroupedBarChart = () => {
    const options = {
        maintainAspectRatio: true,
        plugins: {
            title: {
                display: true,
                text: 'Chart.js Bar Chart - Stacked',
            },
        },
        responsive: true,
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const generateRandomData = (numPoints, min, max) => {
        return Array.from({ length: numPoints }, () =>
            Math.floor(Math.random() * (max - min + 1)) + min
        );
    };
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: generateRandomData(labels.length, -1000, 1000),
                backgroundColor: 'rgb(255, 99, 132)',
                stack: 'Stack 0',
            },
            {
                label: 'Dataset 2',
                data: generateRandomData(labels.length, -1000, 1000),
                backgroundColor: 'rgb(75, 192, 192)',
                stack: 'Stack 0',
            },
            {
                label: 'Dataset 3',
                data: generateRandomData(labels.length, -1000, 1000),
                backgroundColor: 'rgb(53, 162, 235)',
                stack: 'Stack 1',
            },
        ],
    };
    return <Bar data={data} options={options} />
}

export default GroupedBarChart
