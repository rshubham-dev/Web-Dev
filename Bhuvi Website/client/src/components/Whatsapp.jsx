import React from 'react';

const Whatsapp = () => {
    return (
        <a
            href="https://wa.me/9955589832"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
        >
            <span className="text-white text-2xl">
                <i
                    className="fa fa-whatsapp"
                    style={{ fontSize: '40px', color: 'white' }}
                ></i>
            </span>
        </a>
    );
};

export default Whatsapp;
