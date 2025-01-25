import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Header from '../../components/Header';

const Stock = () => {
  const Overview = ({ title, value }) => {
    return (
      <div className="bg-white shadow rounded-lg p-4">
        <p className="text-gray-500">{title}</p>
        <h2 className="text-2xl font-semibold">{value}</h2>
      </div>
    );
  };

  const BestSellingCategory = () => {
    const categories = [
      { category: "Vegetable", turnover: "₹26,000", increase: "3.2%" },
      { category: "Instant Food", turnover: "₹22,000", increase: "2%" },
      { category: "Households", turnover: "₹22,000", increase: "1.5%" },
    ];

    return (
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Best Selling Category</h3>
        <ul className="space-y-3">
          {categories.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{item.category}</span>
              <div className="text-right">
                <p className="font-semibold">{item.turnover}</p>
                <p className="text-green-500">{item.increase}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const ProfitRevenueChart = () => {
    return (
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Profit & Revenue</h3>
        <div className="h-64 flex items-center justify-center text-gray-400">
          {/* Placeholder for Chart */}
          <p>Chart Placeholder</p>
        </div>
      </div>
    );
  };

  const BestSellingProduct = () => {
    const products = [
      { product: "Tomato", id: "23567", category: "Vegetable", quantity: "225 kg", turnover: "₹17,000", increase: "2.3%" },
      { product: "Onion", id: "25831", category: "Vegetable", quantity: "200 kg", turnover: "₹12,000", increase: "1.3%" },
      { product: "Maggi", id: "56841", category: "Instant Food", quantity: "200 Packet", turnover: "₹10,000", increase: "1.3%" },
      { product: "Surf Excel", id: "23567", category: "Household", quantity: "125 Packet", turnover: "₹9,000", increase: "1%" },
    ];

    return (
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Best Selling Product</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b pb-2">Product</th>
              <th className="border-b pb-2">Product ID</th>
              <th className="border-b pb-2">Category</th>
              <th className="border-b pb-2">Remaining Quantity</th>
              <th className="border-b pb-2">Turn Over</th>
              <th className="border-b pb-2">Increase By</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2">{item.product}</td>
                <td className="py-2">{item.id}</td>
                <td className="py-2">{item.category}</td>
                <td className="py-2">{item.quantity}</td>
                <td className="py-2">{item.turnover}</td>
                <td className="py-2 text-green-500">{item.increase}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className='m-1.5 md:m-6 p-4 min-w-screen min-h-screen md:p-8 bg-white rounded-3xl'>
      <Header category="Page" title="Inventory Management" />
      <section className='container mx-auto mt-4 mb-16'>
        <div className='overflow-x-auto w-full max-w-screen-xl mx-auto'>
            <div className="max-w-7xl mx-auto space-y-8">
              {/* Overview Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Overview title="Total Profit" value="₹21,190" />
                <Overview title="Revenue" value="₹18,300" />
                <Overview title="Sales" value="₹17,432" />
                <Overview title="Net Purchase Value" value="₹1,17,432" />
              </div>

              {/* Best Selling Category */}
              <BestSellingCategory />

              {/* Profit & Revenue Chart */}
              <ProfitRevenueChart />

              {/* Best Selling Products Table */}
              <BestSellingProduct />
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

export default Stock