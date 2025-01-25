import React from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';


ChartJS.register(LinearScale, PointElement, Tooltip, Legend);




const BubbleChart = () => {
    const options = {
        Response:true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        maintainAspectRatio: true,
    };
    const generateBubbleData = (numPoints, xMin, xMax, yMin, yMax, rMin, rMax) => {
        return Array.from({ length: numPoints }, () => ({
            x: Math.floor(Math.random() * (xMax - xMin + 1)) + xMin, // Random x
            y: Math.floor(Math.random() * (yMax - yMin + 1)) + yMin, // Random y
            r: Math.floor(Math.random() * (rMax - rMin + 1)) + rMin, // Random radius
        }));
    };
    const data = {
        datasets: [
            {
                label: 'Red dataset',
                data: generateBubbleData(50, 0, 100, 0, 100, 5, 20),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Blue dataset',
                data: generateBubbleData(50, 0, 100, 0, 100, 5, 20),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return <Bubble 
            options={options} 
            data={data} 
            />
}

export default BubbleChart