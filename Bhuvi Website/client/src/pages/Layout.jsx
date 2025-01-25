// src/components/Layout.js
import React from 'react';
import Whatsapp from '../components/Whatsapp';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AddContact from '../components/AddContact';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Content Section */}
      <div className="flex-grow">
        {children}
      </div>

      {/* Footer */}
      <Footer />

      {/* Floating Buttons */}
      <div className="flex justify-between items-center w-full max-w-full fixed bottom-5 px-4">
        {/* WhatsApp Button */}
          <Whatsapp />

        {/* Chat Bot Button */}
        <div className="flex items-center justify-center w-fit h-fit bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition text-md">
            <AddContact/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
