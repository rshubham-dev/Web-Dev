import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useStateContext } from '../contexts/ContextProvider.jsx';
import logo from '../asset/logo.webp';
import { MdPerson, MdInventory, MdDateRange, MdWarehouse, MdWorkHistory, MdTrolley, MdMessage, MdOutlineCancel, MdLocationOn, MdBusiness, MdPeople, MdReceipt, MdConstruction, MdApproval, MdBuild, MdDesignServices, MdMoney, MdAssignment, MdWork, MdManageAccounts, MdAccountBalance } from "react-icons/md";
import { GrUserWorker, GrSchedulePlay } from "react-icons/gr";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { AiFillNotification, AiFillPieChart, AiOutlineMenu, AiOutlineProject } from "react-icons/ai";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { CgProfile } from 'react-icons/cg'
import { TbCalendarDollar } from "react-icons/tb";
import { LuCalendarCheck2, LuClipboardCheck } from "react-icons/lu";
import { GiExpense } from "react-icons/gi";
import { IoIosJournal } from "react-icons/io";
import { FcCustomerSupport } from "react-icons/fc";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FcManager, FcApproval } from "react-icons/fc";
import { FaWallet, FaBalanceScale, FaFileInvoiceDollar, FaBusinessTime } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { FaPersonCircleQuestion, FaPersonCircleCheck, FaPersonShelter, FaTruckArrowRight, FaTruckMedical } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";

const Sidebar = () => {
  const { activeMenu } = useStateContext();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const [openDropdowns, setOpenDropdowns] = useState({}); // Track dropdown states

  const toggleDropdown = (menu) => {
    setOpenDropdowns((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const activeLink = 'flex items-center gap-4 pl-1.5 pt-3 pb-3 rounded-lg text-md my-1 bg-gray-200 text-gray-900';
  const normalLink = 'flex items-center gap-4 pl-1.5 pt-3 pb-3 rounded-lg text-gray-600 my-0.5 dark:text-gray-200 text-md hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900';

  const Menus = [

    {
      to: '/',
      name: 'Dashboard',
      icon: <AiFillPieChart />,
      role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head', 'H.R'],
    },

    {
      to: '/attendance',
      name: 'Attendance',
      icon: <FaBusinessTime />,
      role: ['Admin', 'Company', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head', 'H.R']
    },

    {
      to: '/profile',
      name: 'Profile',
      icon: <CgProfile />,
      role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Marketing Incharge', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head']
    },

    {
      to: '/user',
      name: 'Users Management',
      icon: <MdPerson />,
      role: ['Company', 'Ceo', 'Account Head']
    },

    {
      to: '/site-kharchi',
      name: 'Expenses Record',
      icon: <GiExpense />,
      role: ['Company', 'Ceo', 'Account Head', 'Site Incharge', 'Site Supervisor', 'Accountant']
    },


    /* Accounts Management*/
    {
      to: '/erp',
      name: 'Accounts Management',
      icon: <MdAccountBalance />,
      children: [
        {
          to: '/erp/balance-sheet',
          name: 'Balance Sheet',
          icon: <FaBalanceScale />,
          role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
        },
        // {
        //   to: '/erp/0',
        //   name: '',
        //   icon: <FaPersonCircleCheck />,
        //   role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
        // },
        // {
        //   to: '/erp/2',
        //   name: '',
        //   icon: <AiOutlineProject />,
        //   role: ['Admin', 'Company', 'Client', 'Marketing', 'Ceo', 'Design Head', 'Design Engineer', 'Account Head'],
        // },
        {
          to: '/erp/office-expenses',
          name: 'Expenses',
          icon: <FaWallet />,
          role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
        },
        // {
        //   to: '/erp/bill',
        //   name: 'Billing',
        //   icon: <MdMoney />,
        //   role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
        // },
      ],
      role: ['Admin', 'Company', 'Marketing', 'Ceo', 'Site Incharge', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
    },

    /* Inventory Management*/
    {
      to: '/store',
      name: 'Inventory Management',
      icon: <MdWarehouse  />,
      children: [
        {
          to: '/store/stock',
          name: 'Stock',
          icon: <MdInventory />,
          role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
        },
        {
          to: '/store/sales',
          name: 'Sales',
          icon: <FaTruckArrowRight style={{ transform: 'rotate(360deg) scaleX(-1)' }} />,
          role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
        },
        {
          to: '/store/purchase',
          name: 'Purchase',
          icon: <FaTruckMedical />,
          role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
        },
        {
          to: '/store/return',
          name: 'Return',
          icon: <FaTruckArrowRight />,
          role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
        },
        {
          to: '/store/expenses',
          name: 'Expenses',
          icon: <FaWallet />,
          role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
        },
        {
          to: '/store/suppliers',
          name: 'Suppliers',
          icon: <MdTrolley />,
          role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
        },
      ],
      role: ['Admin', 'Company', 'Marketing', 'Ceo', 'Site Incharge', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
    },

   /* Customer Management*/
    {
      to: '/crm',
      name: 'Customer Management',
      icon: <RiCustomerService2Fill />,
      children: [
        {
          to: '/design',
          name: 'Design',
          icon: <MdDesignServices />,
          role: ['Company', 'Ceo', 'Design Head', 'Design Engineer']
        },
        {
          to: '/crm/lead',
          name: 'Lead',
          icon: <FaPersonCircleQuestion />,
          role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
        },
        {
          to: '/crm/client',
          name: 'Client',
          icon: <FaPersonCircleCheck />,
          role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
        },
        {
          to: '/crm/project',
          name: 'Project',
          icon: <AiOutlineProject />,
          role: ['Admin', 'Company', 'Client', 'Marketing', 'Ceo', 'Design Head', 'Design Engineer', 'Account Head'],
        },
        // {
        //   to: '/crm/bill',
        //   name: 'Bill',
        //   icon: <MdMoney />,
        //   role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
        // },
      ],
      role: ['Admin', 'Company', 'Marketing', 'Ceo', 'Site Incharge', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
    },

    /* Site Management*/
    {
      to: '/sites/dashboard',
      name: 'Site Management',
      icon: <MdLocationOn />,
      children: [
        {
          to: '/site',
          name: 'Sites Report',
          icon: <FaPersonShelter />,
          role: ['Company', 'Ceo', 'Accountant', 'Account Head']
        },
        {
          to: '/sites/project-schedules',
          name: 'Project Schedules',
          icon: <GrSchedulePlay />,
          role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
        },
        {
          to: '/sites/payment-schedules',
          name: 'Payment Schedules',
          icon: <TbCalendarDollar />,
          role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
        },
        {
          to: '/sites/quality-schedules',
          name: 'Quality Schedules',
          icon: <LuCalendarCheck2 />,
          role: ['Admin', 'Company', 'Client', 'Marketing', 'Ceo', 'Design Head', 'Design Engineer', 'Account Head'],
        },
        {
          to: '/sites/work-orders',
          name: 'Work-Orders',
          icon: <MdWork />,
          role: ['Admin', 'Company', 'Client', 'Marketing', 'Ceo', 'Design Head', 'Design Engineer', 'Account Head'],
        },
        {
          to: '/sites/bills',
          name: 'Bills',
          icon: <LiaFileInvoiceDollarSolid />,
          role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
        },
        {
          to: '/sites/purchase-order',
          name: 'Purchase-Orders',
          icon: <BiSolidPurchaseTag />,
          role: ['Admin', 'Company', 'Client', 'Marketing', 'Ceo', 'Design Head', 'Design Engineer', 'Account Head'],
        },
        {
          to: '/sites/return-order',
          name: 'Return-Orders',
          icon: <TbTruckReturn />,
          role: ['Admin', 'Company', 'Ceo', 'Account Head'],
        },
        {
          to: '/sites/extra-work',
          name: 'Extra-Works',
          icon: <MdBuild />,
          role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
        },
        {
          to: '/sites/contractors',
          name: 'Contractors',
          icon: <GrUserWorker />,
          role: ['Admin', 'Company', 'Client', 'Marketing', 'Ceo', 'Design Head', 'Design Engineer', 'Account Head'],
        },
        {
          to: '/sites/suppliers',
          name: 'Suppliers',
          icon: <MdTrolley />,
          role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
        },
        {
          to: '/sites/checklist',
          name: 'Check-List ',
          icon: <LuClipboardCheck />,
          role: ['Admin', 'Company', 'Client', 'Marketing', 'Ceo', 'Design Head', 'Design Engineer', 'Account Head'],
        },
      ],
      role: ['Admin', 'Company', 'Marketing', 'Ceo', 'Site Incharge', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
    },

    /* Employee Management*/
    {
      to: '/hr/dashboard',
      name: 'Employee Management',
      icon: <FcManager />,
      children: [
        {
          to: '/hr/employee/dashboard',
          name: 'Employee Management',
          icon: <FcManager />,
          role: ['Admin', 'Company', 'Ceo', 'Account Head', 'H.R'],
        },
        // {
        //   to: '/employee/salary',
        //   name: 'Salary',
        //   icon: '',
        //   role: ['Admin', 'Company', 'Ceo', 'Account Head', 'H.R'],
        // },
      ],
      role: ['Admin', 'Company', 'Ceo', 'Account Head', 'H.R'],
    },


    {
      to: '/approval',
      name: 'Approval',
      icon: <FcApproval />,
      role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Ceo', 'Site Incharge', 'Quality Head', 'Quality Engineer', 'Account Head']
    },

    {
      to: '/work-details',
      name: 'Work-Details',
      icon: <MdAssignment />,
      role: ['Admin', 'Company', 'Client', 'Supplier', 'Contractor', 'Accountant', 'Marketing', 'Ceo', 'Site Incharge', 'Site Supervisor', 'Design Head', 'Design Engineer', 'Quality Head', 'Quality Engineer', 'Account Head'],
    },

  ];


  const renderMenus = (menus, role) =>
    menus.map((item, index) => {
      if (item.children) {
        return (
          <>
            {/* Parent Dropdown Menu */}
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={() => toggleDropdown(item.name)}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-lg">{item.name}</span>
            </NavLink>
            {/* <span className="text-lg"> {openDropdowns[item.name] ? '▲' : '▼'} </span> */}
            {/* Dropdown Items */}
            <div
              className={`my-0.5 space-y-2.5 md:overflow-hidden overflow-auto md:hover:overflow-auto sidebar-container transition-all duration-300 ${openDropdowns[item.name] ? 'max-h-screen' : 'max-h-0'
                }`}
            >
              {item.children.map((child, idx) => (
                child.role.includes(role) && (
                  <NavLink
                    key={idx}
                    to={child.to}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <span className="text-xl">{child.icon}</span>
                    <span className="text-lg">{child.name}</span>
                  </NavLink>
                )
              ))}
            </div>
          </>
        );
      }
      return (
        item.role.includes(role) && (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-lg">{item.name}</span>
          </NavLink>
        )
      );
    });

  return (
    <div className="h-screen bg-white md:overflow-hidden overflow-auto md:hover:overflow-auto pb-16 pt-4 sidebar-container">
      {/* Logo Section */}
      <div className="flex justify-center gap-2 items-center my-4">
        <img
          src={logo}
          alt="logo"
          className={`rounded-full w-fit ${activeMenu ? 'h-16' : 'h-12'}`}
        />
        <span
          className={`text-slate-800 uppercase transition-all text-sm delay-100 duration-300 ease-in ${activeMenu ? 'inline text-lg' : 'hidden'
            } items-center flex font-extrabold ml-1`}
        >
          Bhuvi Consultants
        </span>
      </div>

      {/* Sidebar Menus */}
      <div className="px-2">
        {isLoggedIn && renderMenus(Menus, user.department)}
      </div>
    </div>
  );
};

export default Sidebar;
