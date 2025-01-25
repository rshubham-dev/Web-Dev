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
import faker from 'faker';

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


    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                backgroundColor: 'rgb(255, 99, 132)',
                stack: 'Stack 0',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                backgroundColor: 'rgb(75, 192, 192)',
                stack: 'Stack 0',
            },
            {
                label: 'Dataset 3',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                backgroundColor: 'rgb(53, 162, 235)',
                stack: 'Stack 1',
            },
        ],
    };
    return (
        <div className="bg-white rounded-lg shadow p-4">
            <Bar data={data} options={options} />
        </div>
    )
}

export default GroupedBarChart
