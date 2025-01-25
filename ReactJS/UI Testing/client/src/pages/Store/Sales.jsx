import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Header from '../../components/Header';

const Sales = () => {
  return (
    <div className='m-1.5 md:m-6 p-4 min-w-screen min-h-screen md:p-8 bg-white rounded-3xl'>
    <Header category="Page" title="Sales Management" />
    <section className='container mx-auto mt-4 mb-16'>
        <div className='overflow-x-auto w-full max-w-screen-xl mx-auto'>
      {/* Overall Inventory Section */}
      <div className="grid grid-cols-4 gap-4 bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-blue-500">Categories</h3>
          <p className="text-2xl font-bold">14</p>
          <p className="text-sm text-gray-500">Last 7 days</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-orange-500">Total Products</h3>
          <p className="text-2xl font-bold">868</p>
          <p className="text-sm text-gray-500">Last 7 days</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-purple-500">Top Selling</h3>
          <p className="text-2xl font-bold">5</p>
          <p className="text-sm text-gray-500">Last 7 days</p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-red-500">Low Stocks</h3>
          <p className="text-2xl font-bold">12</p>
          <p className="text-sm text-gray-500">Ordered</p>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Products</h2>
          <div className="flex gap-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Product</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">Filters</button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">Download all</button>
          </div>
        </div>

        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="px-4 py-2">Products</th>
              <th className="px-4 py-2">Buying Price</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Threshold Value</th>
              <th className="px-4 py-2">Expiry Date</th>
              <th className="px-4 py-2">Availability</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Maggi", price: 430, quantity: "43 Packets", threshold: "12 Packets", expiry: "11/12/22", status: "In-stock", statusColor: "text-green-500" },
              { name: "Bru", price: 257, quantity: "22 Packets", threshold: "12 Packets", expiry: "21/12/22", status: "Out of stock", statusColor: "text-red-500" },
              { name: "Red Bull", price: 405, quantity: "36 Packets", threshold: "9 Packets", expiry: "5/12/22", status: "In-stock", statusColor: "text-green-500" },
              { name: "Bourn Vita", price: 502, quantity: "14 Packets", threshold: "6 Packets", expiry: "8/12/22", status: "Out of stock", statusColor: "text-red-500" },
              { name: "Horlicks", price: 530, quantity: "5 Packets", threshold: "5 Packets", expiry: "9/1/23", status: "In-stock", statusColor: "text-green-500" },
              { name: "Harpic", price: 605, quantity: "10 Packets", threshold: "5 Packets", expiry: "9/1/23", status: "In-stock", statusColor: "text-green-500" },
              { name: "Ariel", price: 408, quantity: "23 Packets", threshold: "7 Packets", expiry: "15/12/23", status: "Out of stock", statusColor: "text-red-500" },
              { name: "Scotch Brite", price: 359, quantity: "43 Packets", threshold: "8 Packets", expiry: "6/6/23", status: "In-stock", statusColor: "text-green-500" },
              { name: "Coca Cola", price: 205, quantity: "41 Packets", threshold: "10 Packets", expiry: "11/12/22", status: "Low stock", statusColor: "text-yellow-500" },
            ].map((product, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">₹{product.price}</td>
                <td className="px-4 py-2">{product.quantity}</td>
                <td className="px-4 py-2">{product.threshold}</td>
                <td className="px-4 py-2">{product.expiry}</td>
                <td className={`px-4 py-2 ${product.statusColor}`}>{product.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-4">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">Previous</button>
          <p>Page 1 of 10</p>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">Next</button>
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

export default Sales