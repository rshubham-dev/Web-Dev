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
    const generateRandomData = (numPoints, min, max) => {
        return Array.from({ length: numPoints }, () =>
            Math.floor(Math.random() * (max - min + 1)) + min
        );
    };
    const data = {
        labels,
        datasets: [
            {
                type: 'line',
                label: 'Dataset 1',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                fill: false,
                data:  generateRandomData(labels.length, -1000, 1000),
            },
            {
                type: 'bar',
                label: 'Dataset 2',
                backgroundColor: 'rgb(75, 192, 192)',
                data:  generateRandomData(labels.length, -1000, 1000),
                borderColor: 'white',
                borderWidth: 2,
            },
            {
                type: 'bar',
                label: 'Dataset 3',
                backgroundColor: 'rgb(53, 162, 235)',
                data:  generateRandomData(labels.length, -1000, 1000),
            },
        ],
    };

    return  <Chart type='bar' data={data} options={{maintainAspectRatio: true, responsive: true}} />
}

export default MultiTypeChart