import React from 'react'
import Header from '../components/Header';
import toast, { Toaster } from 'react-hot-toast';

const CreateAccount = () => {
  return (
    <div className='m-1.5 md:m-6 p-4 min-w-screen min-h-screen md:p-8 bg-white rounded-3xl'>
    <Header category="Page" title="Create Account" />
    <section className='container mx-auto mt-4 mb-16'>
        <form className="max-w-md mx-auto">
            <div className="mb-4">
                <label 
                htmlFor="accountName"
                className="block text-sm font-semibold text-gray-600 mb-2">
                    Account Name
                </label>
                <input 
                type="text"
                name="accountName"
                placeholder="Enter Account Name"
                className="border p-2 rounded w-full" />
            </div>
            <div className="mb-4">
                <label 
                htmlFor="accountNumber"
                className="block text-sm font-semibold text-gray-600 mb-2">
                    Account Number
                </label>
                <input 
                type="number"
                name="accountNumber"
                placeholder="Enter Account Number / Cheque Number "
                className="border p-2 rounded w-full" />
            </div>
            <div className="mb-4">
                <label 
                htmlFor="mode"
                className="block text-sm font-semibold text-gray-600 mb-2">
                    Account Mode
                </label>
                <select 
                name="accountMode" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="" disabled>Select The Mode Of Account</option>
                    <option value="cash">Cash</option>
                    <option value="account">Account</option>
                    <option value="cheque">Cheque</option>
                </select>
            </div>
            <div className="mb-4">
                <label 
                htmlFor="isGST"
                className="block text-sm font-semibold text-gray-600 mb-2">
                    GST
                </label>
                <select 
                name="isGST" 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="">Is GST Applicable ?</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
            </div>
            <div className="mb-4">
                <label 
                htmlFor="GSTNo"
                className="block text-sm font-semibold text-gray-600 mb-2">
                    GST Number
                </label>
                <input 
                type="text"
                name="GSTNo"
                placeholder="Enter Your GST Number"
                className="border p-2 rounded w-full" />
            </div>
            <div className="mb-4">
                {/* <label 
                htmlFor="status"
                className="block text-sm font-semibold text-gray-600 mb-2">
                    Status
                </label> */}
                <select 
                name="status"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="">Status</option>
                    <option value="active">Active</option>
                    <option value="cleared">Cleared</option>
                    <option value="pending">Pending</option>
                </select>
            </div>
            <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 mt-4 text-white px-3 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
                Create Account
            </button>
          </div>
        </form>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </section>
  </div>
  )
}

export default CreateAccount