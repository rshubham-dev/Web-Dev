import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { MdDelete, MdAdd } from "react-icons/md";

const ERP = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleERP = () => {
    navigate('/create-account');
  };
  const handleRecord = () => {
    navigate('/erp/create-record');
  };
  const handleInventory = () => {
    navigate('/store/record-inventory');
  };
  
  return (
    <div className='m-1 md:m-6 p-4 min-w-screen min-h-screen md:p-8 bg-white rounded-3xl'>
      <Header category="Page" title="Accounts Management" />
      <section className="h-full w-full mb-16 flex justify-center">
        <div className='overflow-x-auto w-full max-w-screen-xl mx-auto'>
          <div className="w-full mx-auto mb-6 text-gray-700 py-1 flex flex-row sm:flex-row justify-between items-center">
            <h2 className="text-lg sm:text-md md:text-lg lg:text-xl text-green-600 mb-2 sm:mb-0 sm:mr-4">Add Account</h2>
            {user.department === 'Ceo' || user.department === 'Account Head' && (
              <button onClick={handleERP} className="bg-green-500 rounded-full text-white px-2 py-2">
                <MdAdd className='text-xl' />
              </button>
            )}
          </div>
          <div className="w-full mx-auto mb-6 text-gray-700 py-1 flex flex-row sm:flex-row justify-between items-center">
            <h2 className="text-lg sm:text-md md:text-lg lg:text-xl text-green-600 mb-2 sm:mb-0 sm:mr-4">Record Transactions</h2>
            {user.department === 'Ceo' || user.department === 'Account Head' && (
              <button onClick={handleRecord} className="bg-green-500 rounded-full text-white px-2 py-2">
                <MdAdd className='text-xl' />
              </button>
            )}
          </div>
          <div className="w-full mx-auto mb-6 text-gray-700 py-1 flex flex-row sm:flex-row justify-between items-center">
            <h2 className="text-lg sm:text-md md:text-lg lg:text-xl text-green-600 mb-2 sm:mb-0 sm:mr-4">Record Inventory</h2>
            {user.department === 'Ceo' || user.department === 'Account Head' && (
              <button onClick={handleInventory} className="bg-green-500 rounded-full text-white px-2 py-2">
                <MdAdd className='text-xl' />
              </button>
            )}
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

export default ERP