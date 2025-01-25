import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import axios from 'axios';
import { Tabs, Select } from 'antd';
import moment from 'moment';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

axios.defaults.withCredentials = true;
const { Option } = Select;

const Attendance = () => {
  const [attendances, setAttendance] = useState([]);
  const [leaves, setleave] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const navigate = useNavigate();
  const [markAttendance, setMarkAttendance] = useState({
    date: moment(),
    timeIn: moment().format('HH:mm'),
    status: '',
  });

  const fetchAttendance = async () => {
    try {
      const response = await axios.get('/api/v1/attendance');
      setAttendance(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchLeave = async () => {
    try {
      const response = await axios.get('/api/v1/leave');
      setleave(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(markAttendance);
      const response = await axios.post('/api/v1/attendance', markAttendance);
      toast.success(response.data.message);
      fetchAttendance();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAttendance();
    fetchLeave();
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit-leave/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/v1/leave/${id}`);
      setleave(leaves.filter((leave) => leave._id !== id));
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Group attendance data by month
  const groupedAttendances = {};
  attendances.forEach(attendance => {
    const month = moment(attendance.date).format('MMMM YYYY');
    if (!groupedAttendances[month]) {
      groupedAttendances[month] = [];
    }
    groupedAttendances[month].push(attendance);
  });

  // Handle month selection
  const handleMonthSelect = (value) => {
    setSelectedMonth(value);
  };

  const attendanceTable = (monthAttendances) => (
    <table className='w-full whitespace-nowrap bg-white divide-y divide-gray-300 overflow-hidden'>
      <thead className="bg-gray-800">
        <tr className="text-white text-left">
          <th scope="col" className="font-semibold text-sm uppercase px-6 py-4">Date</th>
          <th scope="col" className="font-semibold text-sm uppercase px-6 py-4">Time</th>
          <th scope="col" className="font-semibold text-sm uppercase px-6 py-4 text-center">Status</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {monthAttendances.map(attendance => (
          <tr key={attendance._id} className='border-b border-blue-gray-200'>
            <td className="px-6 py-4">{moment(attendance.date).format('DD-MM-YYYY')}</td>
            <td className="px-6 py-4">{attendance.timeIn}</td>
            <td className="px-6 py-4 text-center">{attendance.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const leaveTable = () => (
    <table className='w-full whitespace-nowrap bg-white divide-y divide-gray-300 overflow-hidden'>
      <thead className="bg-gray-800">
        <tr className="text-white text-left">
          <th scope="col" className="font-semibold text-sm uppercase px-6 py-4">Reason</th>
          <th scope="col" className="font-semibold text-sm uppercase px-6 py-4 text-center">From - To</th>
          <th scope="col" className="font-semibold text-sm uppercase px-6 py-4 text-center">Approval Status</th>
          <th scope="col" className="font-semibold text-sm uppercase px-6 py-4">Reported At</th>
          <th scope="col" className="px-6 py-4"></th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {leaves?.map((leave) => (
          <tr key={leave._id} className='border-b border-blue-gray-200'>
            <td className="px-6 py-4">{leave?.reason}</td>
            <td className="px-6 py-4 text-center">{moment(leave?.from).format('DD-MM-YYYY')} - {moment(leave?.reportingDate).format('DD-MM-YYYY')}</td>
            <td className="px-6 py-4 text-center">{leave?.approval}</td>
            <td className="px-6 py-4">{leave?.reportedAt ? moment(leave?.reportedAt).format('DD-MM-YYYY') : ''}</td>
            <td className="px-6 py-4">
              <button onClick={() => handleEdit(leave._id)} className="mr-2">
                <GrEdit className="text-blue-500 hover:text-blue-800 text-lg" />
              </button>
              <button onClick={() => handleDelete(leave._id)} className="">
                <MdDelete className='text-red-500 hover:text-red-600 text-xl' />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const items = [
    {
      key: 'attendance',
      label: 'Attendance',
      children: (
        <div className="overflow-x-auto" style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
          {selectedMonth === '' ? (
            Object.entries(groupedAttendances).map(([month, monthAttendances]) => (
              <React.Fragment key={month}>
                <h2 className="text-lg font-semibold mt-6 mb-2">{month}</h2>
                {attendanceTable(monthAttendances)}
              </React.Fragment>
            ))
          ) : (
            <React.Fragment>
              <h2 className="text-lg font-semibold mt-6 mb-2">{selectedMonth}</h2>
              {attendanceTable(groupedAttendances[selectedMonth] || [])}
            </React.Fragment>
          )}
        </div>
      ),
    },
    {
      key: 'leave',
      label: 'Leave',
      children: (
        <div className="overflow-x-auto" style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
          {leaveTable()}
        </div>
      ),
    },
  ];

  return (
    <div className='m-1 md:m-6 p-4 min-w-screen min-h-screen md:p-8 bg-white rounded-3xl'>
      <Header category="Page" title="Attendance" />
      {/* Mark Attendance */}
      <div className="w-full h-fit md:w-fit mb-4">
        <form onSubmit={handleSubmit} className="gap-3 flex flex-row justify-between">
          <button
            type="submit"
            onClick={() => setMarkAttendance({ ...markAttendance, status: 'present' })}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 w-fit h-full rounded-3xl focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          >
            Present
          </button>
          <button onClick={() => navigate('/create-leave')} className="bg-green-500 hover:bg-green-600 rounded-3xl text-white px-6 py-2 w-fit h-full">
            Leave
          </button>
        </form>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      {/* Display Attendance */}
      <section className="h-full w-full overflow-x-auto">
        <div className="w-full mx-auto text-gray-700 flex justify-end items-center">
          {/* Month filter */}
          <Select defaultValue="" style={{ width: 120 }} onChange={handleMonthSelect}>
            <Option value="">All Months</Option>
            {Object.keys(groupedAttendances).map((month, index) => (
              <Option key={index} value={month}>{month}</Option>
            ))}
          </Select>
        </div>
        <Tabs defaultActiveKey='attendance' tabPosition='top' items={items} className="w-full" />
        <Toaster position="top-right" reverseOrder={false} />
      </section>
    </div>
  );
};

export default Attendance;
