import React from 'react'
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

const VBarChart = () => {
    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
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
                data: generateRandomData(labels.length, 100, 1000),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: generateRandomData(labels.length, -1000, 1000),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return <Bar data={data} options={options} />
}

export default VBarChart