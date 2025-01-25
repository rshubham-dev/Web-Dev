import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
);


const MultiTypeChart = () => {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                type: 'line',
                label: 'Dataset 1',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: false,
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            },
            {
                type: 'bar',
                label: 'Dataset 2',
                backgroundColor: 'rgb(75, 192, 192)',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'white',
                borderWidth: 2,
            },
            {
                type: 'bar',
                label: 'Dataset 3',
                backgroundColor: 'rgb(53, 162, 235)',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            },
        ],
    };

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <Chart type='bar' data={data} />
        </div>
    )
}

export default MultiTypeChart