import React from 'react';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);




const RadarChart = () => {
    const generateRandomData = (numPoints, min, max) => {
        return Array.from({ length: numPoints }, () =>
            Math.floor(Math.random() * (max - min + 1)) + min
        );
    };
    const labels = ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'];
    const data = {
        labels,
        datasets: [
            {
                label: '# of Votes',
                data:  generateRandomData(labels.length, -1000, 1000),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };
    return  <Radar data={data} options={{maintainAspectRatio: true,}} />
}
export default RadarChart