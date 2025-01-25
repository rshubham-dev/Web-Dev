import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { MdDelete, MdAdd } from "react-icons/md";

const SiteKharchi = () => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const handleAdd = (id) => {
      console.log(id)
      navigate(`/record-site-kharchi/${id}`);
    };
    return (
        <div className='m-1.5 md:m-6 p-4 min-w-screen min-h-screen md:p-8 bg-white rounded-3xl'>
            <Header category="Page" title="Site Kharchi" />
            <section className='container mx-auto mt-4 mb-16'>
            <div className='overflow-x-auto w-full max-w-screen-xl mx-auto'>
          <div className="w-full mx-auto mb-6 text-gray-700 py-1 flex flex-row sm:flex-row justify-between items-center">
            <h2 className="text-lg sm:text-md md:text-lg lg:text-xl text-green-600 mb-2 sm:mb-0 sm:mr-4">Record Site Expence </h2>
              <button 
              onClick={() => handleAdd(user?._id)}
               className="bg-green-500 rounded-full text-white px-2 py-2">
                <MdAdd className='text-xl' />
              </button>
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

export default SiteKharchi