import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Header from '../../components/Header';

const Lead = () => {

  const customers = [
    { name: "Jane Cooper", company: "Microsoft", phone: "(225) 555-0118", email: "jane@microsoft.com", country: "United States", status: "Active" },
    { name: "Floyd Miles", company: "Yahoo", phone: "(205) 555-0100", email: "floyd@yahoo.com", country: "Kiribati", status: "Inactive" },
    { name: "Ronald Richards", company: "Adobe", phone: "(302) 555-0107", email: "ronald@adobe.com", country: "Israel", status: "Inactive" },
    { name: "Marvin McKinney", company: "Tesla", phone: "(252) 555-0126", email: "marvin@tesla.com", country: "Iran", status: "Active" },
    { name: "Jerome Bell", company: "Google", phone: "(629) 555-0129", email: "jerome@google.com", country: "Réunion", status: "Active" },
    { name: "Kathryn Murphy", company: "Microsoft", phone: "(406) 555-0120", email: "kathryn@microsoft.com", country: "Curaçao", status: "Active" },
    { name: "Jacob Jones", company: "Yahoo", phone: "(208) 555-0112", email: "jacob@yahoo.com", country: "Brazil", status: "Active" },
    { name: "Kristin Watson", company: "Facebook", phone: "(704) 555-0127", email: "kristin@facebook.com", country: "Åland Islands", status: "Active" },
  ];

  return (
    <div className='m-1 md:m-6 p-4 min-w-screen min-h-screen md:p-8 bg-gray-100 rounded-3xl'>
      <Header category="Page" title="Lead Management" />
      <section className="h-full w-full mb-16 flex justify-center">
        <div className='overflow-x-auto w-full max-w-screen-xl mx-auto'>
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold">Hello Evano 👋</h1>
              {/* <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-white border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
                />
              </div> */}
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-white shadow-md rounded-lg p-6">
                <p className="text-gray-600">Total Customers</p>
                <h2 className="text-3xl font-bold">5,423</h2>
                <p className="text-green-500 text-sm mt-2">↑ 16% this month</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <p className="text-gray-600">Members</p>
                <h2 className="text-3xl font-bold">1,893</h2>
                <p className="text-red-500 text-sm mt-2">↓ 1% this month</p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <p className="text-gray-600">Active Now</p>
                <h2 className="text-3xl font-bold">189</h2>
              </div>
            </div>

            {/* Table */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">All Customers</h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray-100 border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
                  />
                </div>
              </div>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-4">Customer Name</th>
                    <th className="py-2 px-4">Company</th>
                    <th className="py-2 px-4">Phone Number</th>
                    <th className="py-2 px-4">Email</th>
                    <th className="py-2 px-4">Country</th>
                    <th className="py-2 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-4">{customer.name}</td>
                      <td className="py-2 px-4">{customer.company}</td>
                      <td className="py-2 px-4">{customer.phone}</td>
                      <td className="py-2 px-4">{customer.email}</td>
                      <td className="py-2 px-4">{customer.country}</td>
                      <td className="py-2 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${customer.status === "Active"
                              ? "bg-green-100 text-green-600"
                              : "bg-red-100 text-red-600"
                            }`}
                        >
                          {customer.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between items-center mt-4">
                <p className="text-sm text-gray-600">Showing data 1 to 8 of 256K entries</p>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded">1</button>
                  <button className="px-3 py-1 bg-white border text-gray-600 rounded">2</button>
                  <button className="px-3 py-1 bg-white border text-gray-600 rounded">3</button>
                </div>
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

export default Lead