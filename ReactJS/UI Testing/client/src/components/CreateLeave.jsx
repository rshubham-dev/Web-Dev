import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import toast, { Toaster } from 'react-hot-toast';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom'
axios.defaults.withCredentials = true;

const CreateLeave = () => {
    const [leave, setLeave] = useState({
        reportingDate: '',
        from: '',
        reason: '',
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLeave({
            ...leave,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(leave);
            const response = await axios.post('/api/v1/leave', leave);
            toast.success(response.data.message);
            navigate(-1)
            // Reset form fields after successful submission
            setLeave({
                reportingDate: moment(),
                from: moment(),
                reason: '',
            });
        } catch (error) {
            console.error(error);
            toast.error('Failed to submit leave request');
        }
    };

    return (
        <div className='m-1 md:m-6 p-4 min-w-screen min-h-screen md:p-8 bg-white rounded-3xl'>
            <Header category="Page" title="Apply for Leave" />
            <section className="flex items-center justify-center h-full mb-16 mt-4">
                <form
                    onSubmit={handleSubmit}
                    className="px-4 pt-6 pb-8 mb-4 w-full max-w-md">
                    <div className='mb-4'>
                        <label htmlFor="from" className="block text-sm font-medium text-gray-700">From:</label>
                        <input
                            type="date"
                            id="from"
                            name="from"
                            value={leave.from}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="reportingDate" className="block text-sm font-medium text-gray-700">Reporting Date:</label>
                        <input
                            type="date"
                            id="reportingDate"
                            name="reportingDate"
                            value={leave.reportingDate}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason:</label>
                        <textarea
                            id="reason"
                            name="reason"
                            value={leave.reason}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md resize-none"
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="flex justify-center mt-2">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-2">Submit</button>
                        <button type="button" onClick={() => setLeave({
                            reportingDate: moment(),
                            from: moment(),
                            reason: '',
                        })} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400">Reset</button>
                    </div>
                </form>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </section>
        </div>
    );
};

export default CreateLeave;
