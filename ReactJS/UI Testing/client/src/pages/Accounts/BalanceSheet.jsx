import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Header from '../../components/Header';
import { Bar, Line } from "react-chartjs-2";

const BalanceSheet = () => {
  const accountsChartData = {
    labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
  datasets: [
  {
    label: "Accounts Receivable Turnover",
  data: [1.37, 1.73, 1.60, 1.56, 1.57, 1.56],
  backgroundColor: "#4f46e5",
},
  {
    label: "Accounts Payable Turnover",
  data: [2.23, 2.80, 2.51, 2.50, 2.45, 2.46],
  backgroundColor: "#f59e0b",
},
  ],
};

const debtRatiosData = {
  labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
datasets: [
{
  label: "Debt-to-Asset Ratio",
data: [0.57, 0.54, 0.65, 0.58, 0.62, 0.62],
borderColor: "#4f46e5",
fill: false,
},
{
  label: "Debt-to-Equity Ratio",
data: [1.35, 1.19, 1.82, 1.36, 1.61, 1.61],
borderColor: "#f59e0b",
fill: false,
},
],
};

const cashByYearData = {
  labels: ["2020", "2021", "2022", "2023", "2024", "2025"],
datasets: [
{
  label: "Overall Cash",
data: [12600, 24220, 26660, 25940, 25650, 27430],
backgroundColor: "#991b1b",
},
],
};

  return (
    <div className='m-1 md:m-6 p-4 min-w-screen min-h-screen md:p-8 bg-white rounded-3xl'>
      <Header category="Page" title="Balance Sheet" />
      <section className="h-full w-full mb-16 flex justify-center">
        <div className='overflow-x-auto w-full max-w-screen-xl mx-auto'>
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Quick Ratio */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-sm text-gray-600">Quick Ratio</h2>
                <p className="text-2xl font-bold">1.43</p>
              </div>

              {/* Current Ratio */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-sm text-gray-600">Current Ratio</h2>
                <p className="text-2xl font-bold">1.71</p>
              </div>

              {/* Inventory Turnover Ratio */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-sm text-gray-600">Inventory Turnover Ratio</h2>
                <p className="text-2xl font-bold">9.20</p>
              </div>

              {/* Inventory-to-Sales Ratio */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-sm text-gray-600">Inventory-to-Sales Ratio</h2>
                <p className="text-2xl font-bold">0.06</p>
              </div>

              {/* Working Capital */}
              <div className="bg-white p-4 rounded-lg shadow col-span-2 md:col-span-1">
                <h2 className="text-sm text-gray-600">Working Capital</h2>
                <p className="text-2xl font-bold">$63.28K</p>
              </div>

              {/* Cash Balance */}
              <div className="bg-white p-4 rounded-lg shadow col-span-2 md:col-span-1">
                <h2 className="text-sm text-gray-600">Cash Balance</h2>
                <p className="text-2xl font-bold">$2.32M</p>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <p>Inflow: $3.10M</p>
                  <p>Outflow: $785.35K</p>
                </div>
              </div>

              {/* Accounts Receivable vs Payable Chart */}
              <div className="bg-white p-4 rounded-lg shadow col-span-2 md:col-span-2">
                <h2 className="text-sm text-gray-600">Accounts Receivable Turnover vs. Accounts Payable Turnover</h2>
                <Bar data={accountsChartData} options={{ responsive: true, maintainAspectRatio: true }} />
              </div>

              {/* Debt Ratios Chart */}
              <div className="bg-white p-4 rounded-lg shadow col-span-2 md:col-span-2">
                <h2 className="text-sm text-gray-600">Debt Ratios</h2>
                <Line data={debtRatiosData} options={{ responsive: true, maintainAspectRatio: true }} />
              </div>

              {/* Overall Cash by Year Chart */}
              <div className="bg-white p-4 rounded-lg shadow col-span-2 md:col-span-2">
                <h2 className="text-sm text-gray-600">Overall Cash by Year</h2>
                <Bar data={cashByYearData} options={{ responsive: true, maintainAspectRatio: true }} />
              </div>
            </div>
        </div>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </section>
    </div>
  )
}

export default BalanceSheet