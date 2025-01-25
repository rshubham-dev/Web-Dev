import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import Header from '../../components/Header';

const Expenses = () => {
    return (
        <div className='m-1 md:m-6 p-4 min-w-screen min-h-screen md:p-8 bg-white rounded-3xl'>
            <Header category="Page" title="Expenses" />
            <section className="h-full w-full mb-16 flex justify-center">
                <div className='overflow-x-auto w-full max-w-screen-xl mx-auto'>
                </div>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </section>
        </div>
    )
}

export default Expenses