import React from 'react';
import Header from '../../components/Header';

const Admin = () => {
  return (
    <div className='bg-white rounded-3xl min-w-screen min-h-screen m-1 md:m-6 p-4 md:p-8'>
      <Header category="Page" title="Dashboard" /> 
      <div className='grid grid-cols-3 gap-6 '>
      </div>
    </div>
  )
}

export default Admin;