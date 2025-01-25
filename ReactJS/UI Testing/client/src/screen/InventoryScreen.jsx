import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Header from '../components/Header';

const InventoryScreen = () => {
    return (
        <div className='m-1.5 md:m-6 p-4 min-w-screen min-h-screen md:p-8 bg-white rounded-3xl'>
            <Header category="Page" title="Inventory Screen" />
            <section className='container mx-auto mt-4 mb-16'>
                <div className='overflow-x-auto w-full max-w-screen-xl mx-auto'></div>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </section>
        </div>
    )
}

export default InventoryScreen