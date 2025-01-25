import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import { GrEdit } from "react-icons/gr";
import { MdDelete, MdAdd } from "react-icons/md";
import moment from 'moment';
import { FaExternalLinkAlt } from "react-icons/fa";
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import { Tabs } from 'antd';
import { FcApproval } from "react-icons/fc";
axios.defaults.withCredentials = true;

const WorkOrders = () => {
  const navigate = useNavigate();
  const [workOrders, setWorkOrder] = useState([]);
  const [draftWorkOrders, setDraftWorkOrder] = useState([]);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchWorkorders = async () => {
      try {
        const workOrdersData = await axios.get('/api/v1/work-order');
        console.log("workOrdersData.data:", workOrdersData.data);
        
        if (user.department === 'Site Supervisor' || user.department === 'Site Incharge') {
          const sites = user.site;
          console.log("site:", sites);
          let WorkOrders = [];
          
          for (let site of sites) {
            // Filter workOrdersData based on site id
            const filteredWorkOrders = workOrdersData.data.filter((workOrder) => workOrder.site?._id === site);
            // Concatenate filteredWorkOrders to WorkOrders
            WorkOrders = [...WorkOrders, ...filteredWorkOrders];
            console.log("workOrder for site", site, ":", filteredWorkOrders);
          }
          
          setWorkOrder(WorkOrders);
          console.log("workOrders for all sites:", WorkOrders);
        } else {
          // If user is not Site Supervisor or Site Incharge, set workOrdersData directly
          setWorkOrder(workOrdersData.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    
    const fetchDraftWorkorders = async () => {
      try {
        const workOrdersData = await axios.get(`/api/v1/work-order/draft`);
        console.log("DraftWorkOrdersData.data:", workOrdersData.data);
    
        if (user.department === 'Site Supervisor' || user.department === 'Site Incharge') {
          const sites = user.site;
          let draftWorkOrders = [];
    
          for (let site of sites) {
            // Filter workOrdersData based on site id
            const filteredWorkOrders = workOrdersData.data.filter((workOrder) => workOrder.site?._id === site);
            // Concatenate filteredWorkOrders to draftWorkOrders
            draftWorkOrders = [...draftWorkOrders, ...filteredWorkOrders];
            console.log("Draft work orders for site", site, ":", filteredWorkOrders);
          }
          setDraftWorkOrder(draftWorkOrders);
          console.log("Draft work orders for all sites:", draftWorkOrders);
        }
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchWorkorders();
    fetchDraftWorkorders();
  }, [])
  const handleEdit = (id) => {
    navigate(`/edit-workOrder/${id}`);
  };
  const handleRedirect = (id) => {
    navigate(`/work-order/${id}`);
  };
  const handleSave = async (id) => {
    try {
      const response = await axios.put(`/api/v1/work-order/save/${id}`);
      setDraftWorkOrder(draftWorkOrders.filter((workOrder) => workOrder._id !== id));
      toast.success(response.data?.message);
    } catch (error) {
      console.error(error)
      toast.error(error.message)
    }
  };
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/v1/work-order/${id}`);
      setWorkOrder(workOrders.filter((workOrder) => workOrder._id !== id));
      setDraftWorkOrder(draftWorkOrders.filter((workOrder) => workOrder._id !== id));
      toast.success(response.data.message)
      console.log(response.data)
    } catch (error) {
      toast.error(error.message)
    }
  };
  const handleAdd = () => {
    navigate('/create-work-order');
  };
  return (
    <div className='m-1 md:m-6 p-4 min-w-screen min-h-screen md:p-8 bg-white rounded-3xl'>
      <Header category="Page" title="Work-Order's" />
      <section className="h-full w-full mb-16 flex justify-center">
        <div className='overflow-x-auto w-full max-w-screen-xl mx-auto'>
          <div className=" mx-auto mb-6">
            <div className="text-sm text-gray-700 py-1 flex flex-row sm:flex-row items-center justify-between">
              <h2 className="text-lg sm:text-xl text-green-600 mb-2 sm:mb-0 sm:mr-4">Total Work Orders: {workOrders.length}</h2>
              {user.department === 'Site Incharge' && (
              <button onClick={handleAdd} className="bg-green-500 rounded-full text-white p-2 mt-2 sm:mt-0">
                <MdAdd className='text-xl' />
              </button>)}
            </div>
          </div>
          <Tabs defaultActiveKey='approved' tabPosition='top' className="w-full">
            <Tabs.TabPane tab='Approved' key={'approved'}>
              <div className="overflow-x-auto"
                style={{
                  scrollbarWidth: 'none',
                  '-ms-overflow-style': 'none',
                }}>
                <table className='w-full whitespace-nowrap bg-white divide-y divide-gray-300 overflow-hidden'>
                  <thead className="bg-gray-800">
                    <tr className="text-white text-left">
                      <th scope="col" className="font-semibold text-sm uppercase px-6 py-4">Work-Order Name</th>
                      <th scope="col" className="font-semibold text-sm uppercase px-6 py-4">Site</th>
                      <th scope="col" className="font-semibold text-sm uppercase px-6 py-4 text-center">Total Value</th>
                      <th scope="col" className="font-semibold text-sm uppercase px-6 py-4 text-center">Paid Amount</th>
                      <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> Due Amount </th>
                      <th scope="col" className="font-semibold text-sm uppercase px-6 py-4 text-center">Duration</th>
                      <th scope="col" className="font-semibold text-sm uppercase px-6 py-4 text-center"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {workOrders.map((workOrder) => (
                      <tr key={workOrder._id} className='border-b border-blue-gray-200'>
                        <td className="px-6 py-4">
                          <p className=""> {workOrder?.workOrderName} </p>
                          <p className="text-gray-500 text-sm font-semibold tracking-wide"> {workOrder.contractor?.name} </p>
                        </td>
                        <td className="px-6 py-4">{workOrder.site?.name}</td>
                        <td className="px-6 py-4 text-center">{workOrder.workOrderValue}</td>
                        <td className="px-6 py-4 text-center">{workOrder.totalPaid ? workOrder.totalPaid : '0'}</td>
                        <td className="px-6 py-4 text-center">{workOrder.totalDue ? workOrder.totalDue : '0'}</td>
                        <td className="px-6 py-4 text-center">{moment(workOrder.duration).format('DD-MM-YYYY')}</td>
                        <td className="px-6 py-4 text-center">
                          <button onClick={() => handleRedirect(workOrder?._id)} className="mr-2">
                            <FaExternalLinkAlt className='text-blue-500 hover:text-blue-800 text-lg' />
                          </button>
                          <button onClick={() => handleEdit(workOrder?._id)} className="mr-2">
                            <GrEdit className="text-blue-500 hover:text-blue-800 text-lg" />
                          </button>
                          <button onClick={() => handleDelete(workOrder?._id)} className="mr-2">
                            <MdDelete className='text-red-500 hover:text-red-600 text-xl' />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Tabs.TabPane>
            {user.department === 'Site Incharge' && (
            <Tabs.TabPane tab='Draft' key={'draft'}>
              <div className="overflow-x-auto"
                style={{
                  scrollbarWidth: 'none',
                  '-ms-overflow-style': 'none',
                }}>
                <table className='w-full whitespace-nowrap bg-white divide-y divide-gray-300 overflow-hidden'>
                  <thead className="bg-gray-800">
                    <tr className="text-white text-left">
                      <th scope="col" className="font-semibold text-sm uppercase px-6 py-4">Work-Order Name</th>
                      <th scope="col" className="font-semibold text-sm uppercase px-6 py-4">Site</th>
                      <th scope="col" className="font-semibold text-sm uppercase px-6 py-4 text-center">Total Value</th>
                      <th scope="col" className="font-semibold text-sm uppercase px-6 py-4 text-center">Paid Amount</th>
                      <th className="font-semibold text-sm uppercase px-6 py-4 text-center"> Due Amount </th>
                      <th scope="col" className="font-semibold text-sm uppercase px-6 py-4 text-center">Duration</th>
                      <th scope="col" className="font-semibold text-sm uppercase px-6 py-4 text-center"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {draftWorkOrders.map((workOrder) => (
                      <tr key={workOrder._id} className='border-b border-blue-gray-200'>
                        <td className="px-6 py-4">
                          <p className=""> {workOrder?.workOrderName} </p>
                          <p className="text-gray-500 text-sm font-semibold tracking-wide"> {workOrder.contractor?.name} </p>
                        </td>
                        <td className="px-6 py-4">{workOrder.site?.name}</td>
                        <td className="px-6 py-4 text-center">{workOrder.workOrderValue}</td>
                        <td className="px-6 py-4 text-center">{workOrder.totalPaid ? workOrder.totalPaid : '0'}</td>
                        <td className="px-6 py-4 text-center">{workOrder.totalDue ? workOrder.totalDue : '0'}</td>
                        <td className="px-6 py-4 text-center">{moment(workOrder.duration).format('DD-MM-YYYY')}</td>
                        <td className="px-6 py-4 text-center">
                          <button onClick={() => handleSave(workOrder._id)} className=" mr-2">
                            <FcApproval className="text-green-500 hover:text-green-700 text-xl" />
                          </button>
                          <button onClick={() => handleRedirect(workOrder._id)} className="mr-2">
                            <FaExternalLinkAlt className='text-blue-500 hover:text-blue-800 text-lg' />
                          </button>
                          <button onClick={() => handleEdit(workOrder._id)} className="mr-2">
                            <GrEdit className="text-blue-500 hover:text-blue-800 text-lg" />
                          </button>
                          <button onClick={() => handleDelete(workOrder._id)} className="mr-2">
                            <MdDelete className='text-red-500 hover:text-red-600 text-xl' />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Tabs.TabPane>)}
          </Tabs>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </section>
    </div>
  )
}

export default WorkOrders