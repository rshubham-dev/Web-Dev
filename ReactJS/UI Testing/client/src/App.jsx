import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserManagement from './pages/Dashboard/User.jsx';
import CreateUser from './components/CreateUser.jsx';
import Sites from './pages/Site/Site.jsx';
import CreateSite from './components/CreateSite.jsx';
import Clients from './pages/CRM/Clients.jsx';
import CreateClient from './components/CreateClient.jsx';
import CreateEmployee from './components/CreateEmployee.jsx';
import Profile from './components/Profile.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import WorkOrders from './pages/Site/WorkOrder.jsx';
import CreateWorkOrder from './components/CreateWorkOrder.jsx';
import CreateWorkDetails from './components/CreateWorkDetail.jsx';
import ProjectSchedules from './pages/Site/ProjectSchedules.jsx';
import CreateProjectSchedule from './components/CreateProjectSchedule.jsx';
import PaymentSchedules from './pages/Site/PaymentSchedule.jsx';
import CreatePaymentSchedule from './components/CreatePaymentSchedule.jsx';
import Bills from './pages/Site/Bill.jsx';
import CreateBill from './components/CreateBill.jsx';
import CheckList from './pages/Site/CheckList.jsx';
import Contractors from './pages/Site/Contractors.jsx';
import CreateContractor from './components/CreateContractor.jsx';
import Admin from './pages/Dashboard/Admin.jsx';
import Accountant from './pages/Dashboard/Accountant.jsx';
import Design_Head from './pages/Dashboard/Design_Head.jsx';
import SiteIncharge from './pages/Dashboard/SiteIncharge.jsx';
import SiteSupervisour from './pages/Dashboard/SiteSupervisour.jsx';
import Quality_Engineer from './pages/Dashboard/Quality_Engineer.jsx';
import Design_Engineer from './pages/Dashboard/Design_Engineer.jsx';
import Marketing from './pages/Dashboard/Marketing.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Client from './pages/Dashboard/Client.jsx';
import SiteScreen from './screen/SiteScreen.jsx';
import ClientScreen from './screen/ClientScreen.jsx';
import WorkOrderScreen from './screen/WorkOrderScreen.jsx'
import BillScreen from './screen/BillScreen.jsx';
import Payment_SchedulScreen from './screen/Payment_SchedulScreen.jsx';
import Project_ScheduleScreen from './screen/Project_ScheduleScreen.jsx';
import ContractorScreen from './screen/ContractorScreen.jsx';
import WorkDetails from './pages/Dashboard/WorkDetails.jsx';
import CreateExtraWork from './components/CreateExtraWork.jsx';
import ExtraWork from './pages/Site/ExtraWork.jsx';
import CreateSupplier from './components/CreateSupplier.jsx';
import CreatePurchaseOrder from './components/CreatePurchaseOrder.jsx';
import PurchaseOrders from './pages/Site/PurchaseOrders.jsx';
import Suppliers from './pages/Dashboard/Suppliers.jsx';
import PurchaseOrderScreen from './screen/PurchaseOrderScreen.jsx';
import Employee from './pages/HR/Employee.jsx';
import Task from './pages/Dashboard/Task.jsx';
import ExtraWorkScreen from './screen/ExtraWorkScreen.jsx';
import { logout } from './features/auth/authSlice.js';
import QualitySchedules from './pages/Site/QualitySchedules.jsx';
import CreateQualitySchedule from './components/CreateQualitySchedule.jsx';
import './index.css';
import UserProfile from './components/ProfileCard.jsx';
import SupplierScreen from './screen/SupplierScreen.jsx';
import QualityScheduleScreen from './screen/QualityScheduleScreen.jsx';
import Approval from './pages/Dashboard/Approval.jsx';
import ResetPasswd from './components/ResetPasswd.jsx';
import Attendance from './pages/Dashboard/Attendance.jsx';
import CreateLeave from './components/CreateLeave.jsx';
import Account_Head from './pages/Dashboard/AccountHead.jsx';
import CreateAccount from './components/CreateAccount.jsx';
import ERP from './pages/Accounts/ERP.jsx';
import SiteKharchi from './pages/Dashboard/SiteKharchi.jsx';
import CreateRecord from './components/CreateRecord.jsx';
import RecordInventory from './components/RecordInventory.jsx';
import CRM from './pages/CRM/CRM.jsx';
import InventoryScreen from './screen/InventoryScreen.jsx';
import Store from './pages/Store/Store.jsx';
import Purchase from './pages/Store/Purchase.jsx';
import Sales from './pages/Store/Sales.jsx';
import Lead from './pages/CRM/Lead.jsx';
import Project from './pages/CRM/Project.jsx';
import Stock from './pages/Store/Stock.jsx';
import Return from './pages/Store/Return.jsx';
import Expenses from './pages/Store/Expenses.jsx';
import OfficeExpenses from './pages/Accounts/OfficeExpenses.jsx';
import BalanceSheet from './pages/Accounts/BalanceSheet.jsx';
import SitesDashboard from './pages/Site/SitesDashboard.jsx';
import ReturnOrders from './pages/Site/ReturnOrders.jsx';

const App = () => {

  const { isLoggedIn } = useSelector((state) => {
    return state.auth
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const isPageReloaded = performance.navigation.type === 1;
    if (isPageReloaded) {
      dispatch(logout());
      navigate('/')
      console.log('Reloaded')
    } else {
      console.log("This page is not reloaded");
    }
  }, []);


  return (
    <>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/resetpasswd' element={<ResetPasswd />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/account' element={<Profile />} />
        
        <Route path='/admin' element={<Admin />} />
        <Route path='/ceo' element={<Admin />} />
        <Route path='/client' element={<Client />} />
        <Route path='/design-head' element={<Design_Head />} />
        <Route path='/site-incharge' element={<SiteIncharge />} />
        <Route path='/site-supervisour' element={<SiteSupervisour />} />
        <Route path='/marketing' element={<Marketing />} />
        <Route path='/quality-engineer' element={<Quality_Engineer />} />
        <Route path='/design-engineer' element={<Design_Engineer />} />
        <Route path='/accountant' element={<Accountant />} />
        <Route path='/account-head' element={<Account_Head />} />
        
        <Route path='/attendance' element={<Attendance />} />
        <Route path='/create-leave' element={<CreateLeave />} />
        <Route path='/edit-leave/:id' element={<CreateLeave />} />

        <Route path='/tasks' element={<Task />} />
        
        <Route path='/hr/employee/dashboard' element={<Employee />} />
        <Route path='/hr/dashboard' element={<Employee />} />
        <Route path='/create-employee' element={<CreateEmployee />} />
        
        <Route path='/user' element={<UserManagement />} />
        <Route path='/create-user' element={<CreateUser />} />
        <Route path='/edit-user/:id' element={<CreateUser />} />

        <Route path='/sites/contractors' element={<Contractors />} />
        <Route path='/create-contractors' element={<CreateContractor />} />
        <Route path='/contractor/:id' element={<ContractorScreen />} />
        <Route path='/edit-contractor/:id' element={<CreateContractor />} />
        
        <Route path='/site' element={<SitesDashboard />} />
        <Route path='/sites/dashboard' element={<Sites />} />
        <Route path='/site/:id' element={<SiteScreen />} />
        <Route path='/create-site' element={<CreateSite />} />
        <Route path='/edit-site/:id' element={<CreateSite />} />
        
        <Route path='/sites/clients' element={<Clients />} />
        <Route path='/client/:id' element={<ClientScreen />} />
        <Route path='/create-client' element={<CreateClient />} />
        <Route path='/edit-client/:id' element={<CreateClient />} />
        
        <Route path='/sites/work-orders' element={<WorkOrders />} />
        <Route path='/work-order/:id' element={<WorkOrderScreen />} />
        <Route path='/create-work-order' element={<CreateWorkOrder />} />
        <Route path='/edit-workOrder/:id' element={<CreateWorkOrder />} />
        <Route path='/edit-workOrder/:id/work/:index' element={<CreateWorkOrder />} />
        
        <Route path='/work-details' element={<WorkDetails />} />
        <Route path='/create-work-details' element={<CreateWorkDetails />} />
        <Route path='/edit-work-detail/:id' element={<CreateWorkDetails />} />
        <Route path='/edit-work-detail/:id/:index' element={<CreateWorkDetails />} />
        
        <Route path='/sites/project-schedules' element={<ProjectSchedules />} />
        <Route path='/project-schedule/:id' element={<Project_ScheduleScreen />} />
        <Route path='/create-project-schedule' element={<CreateProjectSchedule />} />
        <Route path='/edit-projectSchedule/:id/:index' element={<CreateProjectSchedule />} />
        
        <Route path='/sites/quality-schedules' element={<QualitySchedules />} />
        <Route path='/quality-schedule/:id' element={<QualityScheduleScreen />} />
        <Route path='/create-quality-schedule' element={<CreateQualitySchedule />} />
        <Route path='/edit-projectSchedule/:id' element={<CreateProjectSchedule />} />
        <Route path='/edit-qualitySchedule/:id/:index' element={<CreateQualitySchedule />} />
        <Route path='/edit-qualitySchedule/:id' element={<CreateQualitySchedule />} />
        
        <Route path='/sites/payment-schedules' element={<PaymentSchedules />} />
        <Route path='/payment-schedule/:id' element={<Payment_SchedulScreen />} />
        <Route path='/create-payment-schedule' element={<CreatePaymentSchedule />} />
        <Route path='/edit-paymentSchedule/:id' element={<CreatePaymentSchedule />} />
        <Route path='/edit-paymentSchedule/:id/:index' element={<CreatePaymentSchedule />} />
        
        <Route path='/sites/bills' element={<Bills />} />
        <Route path='/bill/:id' element={<BillScreen />} />
        <Route path='/create-bill' element={<CreateBill />} />
        <Route path='/edit-bill/:id' element={<CreateBill />} />
        
        <Route path='/sites/extra-work' element={<ExtraWork />} />
        <Route path='/extra-work/:id' element={<ExtraWorkScreen />} />
        <Route path='/create-extra-work' element={<CreateExtraWork />} />
        <Route path='/edit-extra-work/:id' element={<CreateExtraWork />} />
        <Route path='/edit-extra-work/:id/work/:index' element={<CreateExtraWork />} />
        
        <Route path='/sites/checklists' element={<CheckList />} />
        
        <Route path='/sites/suppliers' element={<Suppliers />} />
        <Route path='/create-supplier' element={<CreateSupplier />} />
        <Route path='/supplier/:id' element={<SupplierScreen />} />
        <Route path='/edit-supplier/:id' element={<CreateSupplier />} />
        
        <Route path='/sites/purchase-order' element={<PurchaseOrders />} />
        <Route path='/purchase-order/:id' element={<PurchaseOrderScreen />} />
        <Route path='/create-purchaseOrder' element={<CreatePurchaseOrder />} />
        <Route path='/edit-purchaseOrder/:id' element={<CreatePurchaseOrder />} />
        <Route path='/edit-purchaseOrder/:id/material/:index' element={<CreatePurchaseOrder />} />
        
        <Route path='/sites/return-order' element={<ReturnOrders />} />
        <Route path='/return-order/:id' element={<PurchaseOrderScreen />} />
        <Route path='/create-returnOrder' element={<CreatePurchaseOrder />} />
        <Route path='/edit-returnOrder/:id' element={<CreatePurchaseOrder />} />
        <Route path='/edit-returnOrder/:id/material/:index' element={<CreatePurchaseOrder />} />
        
        <Route path='/erp' element={<ERP />} />
        <Route path='/erp/office-expenses' element={<OfficeExpenses />} />
        <Route path='/erp/balance-sheet' element={<BalanceSheet />} />
        <Route path='/erp/create-record' element={<CreateRecord />} />
        <Route path='/create-account' element={<CreateAccount />} />

        <Route path='/store' element={<Store />} />
        <Route path='/store/stock' element={<Stock />} />
        <Route path='/store/sales' element={<Sales />} />
        <Route path='/store/purchase' element={<Purchase />} />
        <Route path='/store/return' element={<Return />} />
        <Route path='/store/expenses' element={<Expenses />} />
        <Route path='/store/suppliers' element={<Suppliers />} />
        <Route path='/store/record-inventory' element={<RecordInventory />} />
        
        <Route path='/crm' element={<CRM />} />
        <Route path='/crm/lead' element={<Lead />} />
        <Route path='/crm/client' element={<Clients />} />
        <Route path='/crm/project' element={<Project />} />
        
        <Route path='/site-kharchi' element={<SiteKharchi />} />
        <Route path='/record-site-kharchi/:userId' element={<CreateRecord />} />

        <Route path='/setting' element={<Profile />} />
        
        <Route path='/approval' element={<Approval />} />
        

      </Routes>
    </>
  )
}
export default App;


