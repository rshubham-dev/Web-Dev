import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useStateContext } from '../contexts/ContextProvider.jsx';
import logo from '../asset/logo.webp';
import { MdPerson, MdDateRange, MdWarehouse, MdWorkHistory, MdTrolley, MdMessage, MdOutlineCancel, MdLocationOn, MdBusiness, MdPeople, MdReceipt, MdConstruction, MdBuild, MdMoney, MdAssignment, MdWork, MdManageAccounts, MdAccountBalance } from "react-icons/md";
import { GrUserWorker, GrSchedulePlay } from "react-icons/gr";
import { FaFileInvoiceDollar, FaBusinessTime, FaBookJournalWhills } from "react-icons/fa";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { AiFillNotification, AiFillPieChart, AiOutlineMenu } from "react-icons/ai";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { CgProfile } from 'react-icons/cg'
import { TbCalendarDollar } from "react-icons/tb";
import { LuCalendarCheck2, LuClipboardCheck } from "react-icons/lu";
import { GiExpense } from "react-icons/gi";
import { IoIosJournal } from "react-icons/io";
import { FcCustomerSupport } from "react-icons/fc";
import { RiCustomerService2Fill } from "react-icons/ri";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const { isLoggedIn, user } = useSelector((state) => {
    return state.auth;
  });

  const activeLink = 'flex item-center gap-5 pl-2 pt-3 pb-2.5 rounded-lg text-md m-1.5 text-gray-900'
  const normalLink = 'flex item-center gap-5 pl-2 pt-3 pb-2.5 rounded-lg text-gray-600 dark:text-gray-200 text-md dark:hover:text-black hover:bg-light-gray m-1.5'

  const Menus = [
    {
      to: '/',
      name: 'Dashboard',
      icon: <AiFillPieChart />,
      role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head']
    },
    {
      to: '/attendance',
      name: 'Attendance',
      icon: <FaBusinessTime />,
      role: ['Admin', 'Company', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head']
    },
    {
      to: '/profile',
      name: 'Profile',
      icon: <CgProfile />,
      role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Marketing Incharge', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head']
    },
    {
      to: '/user',
      name: 'Users',
      icon: <MdPerson />,
      role: ['Company', 'Ceo', 'Account Head']
    },
    {
      to: '/sites',
      name: 'Sites',
      icon: <MdLocationOn />,
      role: ['Company', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Accountant', 'Client', 'Account Head']
    },
    { 
      to: '/erp', 
      name: 'ERP', 
      icon: <MdAccountBalance />,
    role: ['Company', 'Ceo', 'Account Head', 'Accountant'] 
    },
    { 
      to: '/crm', 
      name: 'CRM', 
      icon: <RiCustomerService2Fill />,
    role: ['Company', 'Ceo', 'Account Head', 'Marketing Incharge', 'Marketing'] 
    },
    { 
      to: '/site-kharchi', 
      name: 'Site Kharchi', 
      icon: <GiExpense />,
    role: ['Company', 'Ceo', 'Account Head', 'Site Incharge', 'Site Supervisor', 'Accountant'] 
    },
    {
      to: '/project-schedules',
      name: 'Project Schedules',
      icon: <GrSchedulePlay />,
      role: ['Company', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Account Head']
    },
    {
      to: '/payment-schedules',
      name: 'Payment Schedules',
      icon: <TbCalendarDollar />,
      role: ['Company', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Accountant', 'Account Head']
    },
    {
      to: '/quality-schedules',
      name: 'Quality Schedules',
      icon: <LuCalendarCheck2 />,
      role: ['Company', 'Ceo', 'Quality Engineer', 'Site Incharge', 'Site Supervisor', 'Account Head']
    },
    {
      to: '/bills',
      name: 'Bills',
      icon: <LiaFileInvoiceDollarSolid />,
      role: ['Company', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Accountant', 'Account Head']
    },
    {
      to: '/work-orders',
      name: 'Work-Orders',
      icon: <MdWork />,
      role: ['Company', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Accountant', 'Account Head']
    },
    {
      to: '/purchase-order',
      name: 'Purchase-Orders',
      icon: <BiSolidPurchaseTag />,
      role: ['Company', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Accountant', 'Account Head']
    },
    {
      to: '/extra-work',
      name: 'Extra-Works',
      icon: <MdBuild />,
      role: ['Company', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Accountant', 'Account Head']
    },
    {
      to: '/clients',
      name: 'Clients',
      icon: <MdBusiness />,
      role: ['Company', 'Ceo', 'Accountant', 'Account Head']
    },
    {
      to: '/contractors',
      name: 'Contractors',
      icon: <GrUserWorker />,
      role: ['Company', 'Ceo', 'Site Incharge', 'Accountant', 'Account Head']
    },
    {
      to: '/suppliers',
      name: 'Suppliers',
      icon: <MdTrolley />,
      role: ['Company', 'Ceo', 'Site Incharge', 'Accountant', 'Account Head']
    },
    {
      to: '/employee',
      name: 'Employees',
      icon: <MdPeople />,
      role: ['Company', 'Ceo', 'H.R', 'Account Head']
    },
    {
      to: '/approval',
      name: 'Approval',
      icon: <AiFillNotification />,
      role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Ceo', 'Site Incharge', 'Quality Head', 'Quality Engineer', 'Account Head']
    },
    // { 
    //   to: '/checklist', 
    //   name: 'Check-List ', 
    //   icon: <LuClipboardCheck />,
    // role: ['Company', 'Ceo'] 
    // },
    {
      to: '/work-details',
      name: 'Work-Details',
      icon: <MdAssignment />,
      role: ['Company', 'Ceo', 'Admin', 'Account Head']
    },
    // { 
    //   to: '/design', 
    //   name: 'Design', 
    //   icon: <MdDesignServices />,
    // role: ['Company', 'Ceo', 'Design Head', 'Design Engineer'] 
    // },
  ];

  const sideMenuFor = (items, role) => {
    return (
      <div className="mb-10 mt-4">
        {items
          .filter(item => item.role.includes(role))
          .map((item, index) => (
            <div key={index} className='hover:bg-gray-200 rounded-xl'>
              <NavLink to={item.to}
                className={({ isActive }) => isActive ? activeLink : normalLink}>
                <span className='text-xl text-slate-700 hover:text-slate-900'>
                  {item.icon}
                </span>
                <span className={`capitalize ${activeMenu ? 'inline' : 'hidden'} text-slate-700 hover:text-slate-900`}> {item.name} </span>
              </NavLink>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div className='h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-16 pt-4'
      style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none', }}>
      <div className="flex justify-center gap-2 items-center my-2 ml-0">
        <img src={logo} alt="logo" className={`rounded-full w-fit ${activeMenu ? 'h-16' : 'h-12'}`} />
        <span className={`text-slate-800 uppercase transition-all text-sm delay-100 duration-300 ease-in ${activeMenu ? 'inline text-lg ' : 'hidden'} items-center flex font-extrabold ml-1 `}>
          Bhuvi Consultants
        </span>
      </div>

      <div>
        {isLoggedIn && sideMenuFor(Menus, user.department)}
      </div>
    </div>
  )
}

export default Sidebar