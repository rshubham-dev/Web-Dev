import React, { useEffect, useState } from 'react'
import Header from './Header';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RecordInventory = () => {
    const [sites, setSite] = useState([]);
    const [record, setRecord] = useState({
        recordFor: '',
        site: '',
        item: '',
        unit: '',
        amount: '',
        quantity: '',
        rate: '',
        paymentTo: '',
        status: '',
        paymentMode: '',
    });
    const [suppliers, setSupplier] = useState([]);
    const [materials, setMaterial] = useState([]);
    const units = ['SQFT', 'RFT', 'LUMSUM', 'NOS', 'FIXED', 'RMT', 'SQMT', 'CUM', '₹', 'BAG', 'KG', 'BUNDLE', 'LOAD', 'HYVA', 'TRACTOR', 'M', 'MM', 'FT', 'INCH'];
    const recordFor = ['Purchase', 'Sales', 'Investment', 'Expenses'];
    const paymentStatus = ['Paid', 'Due']
    const paymentmode = ['Cash', 'Account', 'Cheque']
    const [userid, setUserId] = useState(null)
    const { userId } = useParams();

    useEffect(() => {
        const fetchSite = async () => {
            try {
                const response = await axios.get('/api/v1/site');
                setSite(response.data)
                console.log(response)
            } catch (error) {
                console.error(error.message)
            }
        };

        const fetchSupplier = async () => {
            try {
                const supplierData = await axios.get('/api/v1/Supplier');
                setSupplier(supplierData.data);
            } catch (error) {
                console.error(error.message)
            }
        };

        const fetchMaterial = async () => {
            try {
                const title = 'Purchase Order';
                const data = await axios.post('/api/v1/work-details/name', {
                    title
                });
                // console.log(data.data)
                let material = [];
                for (let i = 0; i < data.data.description.length; i++) {
                    material = material.concat(data.data.description[i]);
                }
                console.log(material)
                setMaterial(material)
            } catch (error) {
                console.error(error.message)
            }
        }

        fetchSite();
        fetchSupplier();
        fetchMaterial();

        if (userId) {
            console.log(userId)
            setUserId(userId)
        }
    }, [])

    const handleChange = (field, value) => {
        setRecord((prev) => ({ ...prev, [field]: value }));
    };


    const RecordFor = (name) => {
        switch (name) {
            case 'Purchase':
                return (
                    <>
                        <div className="mb-4">
                            <label
                                htmlFor="item"
                                className="block text-sm font-semibold text-gray-600 mb-2">
                                Item
                            </label>
                            <select
                                name="item"
                                value={record.item}
                                onChange={(e) => handleChange('item', e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="" disabled>Select The Item</option>
                                <option value="cash">Cash</option>
                                <option value="account">Account</option>
                                <option value="cheque">Cheque</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="paymentTo"
                                className="block text-sm font-semibold text-gray-600 mb-2">
                                Supplier
                            </label>
                            <select
                                name="paymentTo"
                                onChange={(e) => handleChange('paymentTo', e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={record.paymentTo} >
                                <option value="" disabled>Select The Supplier</option>
                                <option value="cash">Cash</option>
                                <option value="account">Account</option>
                                <option value="cheque">Cheque</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="unit" className="block text-gray-700 text-sm font-bold mb-2">
                                Unit:
                            </label>
                            <select
                                name="unit"
                                value={record.unit}
                                onChange={(e) => handleChange('unit', e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option>Select a Unit</option>
                                {units.map((unit, index) => (
                                    <option key={index} value={unit}>
                                        {unit}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="rate"
                                className="block text-sm font-semibold text-gray-600 mb-2">
                                Rate
                            </label>
                            <input
                                type="number"
                                name="rate"
                                onChange={(e) => handleChange('rate', e.target.value)}
                                placeholder="Enter The Rate"
                                className="border p-2 rounded w-full" />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="quantity"
                                className="block text-sm font-semibold text-gray-600 mb-2">
                                Quantity
                            </label>
                            <input
                                type="number"
                                name="quantity"
                                onChange={(e) => handleChange('quantity', e.target.value)}
                                placeholder="Enter The Quantity"
                                className="border p-2 rounded w-full" />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="amount"
                                className="block text-sm font-semibold text-gray-600 mb-2">
                                Amount
                            </label>
                            <input
                                type="number"
                                name="amount"
                                onChange={(e) => handleChange('amount', e.target.value)}
                                placeholder="Enter The Amount"
                                className="border p-2 rounded w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">
                                Payment Status:
                            </label>
                            <select
                                name="status"
                                value={record.status}
                                onChange={(e) => handleChange('status', e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option>Select a Payment Status</option>
                                {paymentStatus.map((status, index) => (
                                    <option key={index} value={status}>
                                        {status}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="paymentMode" className="block text-gray-700 text-sm font-bold mb-2">
                                Payment Mode:
                            </label>
                            <select
                                name="paymentMode"
                                value={record.paymentMode}
                                onChange={(e) => handleChange('paymentMode', e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option>Select The Mode of Payment</option>
                                {paymentmode.map((mode, index) => (
                                    <option key={index} value={mode}>
                                        {mode}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </>
                )
                break;

            case 'Sales':
                return (
                    <>
                        <div className="mb-4">
                            <label htmlFor='site' className="block text-sm font-medium text-gray-600 mb-2">Site</label>
                            <select
                                name='site'
                                value={record.site}
                                required
                                onChange={(e) => handleChange('site', e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >
                                <option>Site</option>
                                {sites?.map((site) => (
                                    <option key={site._id} value={site._id}>
                                        {site.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="item"
                                className="block text-sm font-semibold text-gray-600 mb-2">
                                Item
                            </label>
                            <select
                                name="item"
                                value={record.item}
                                onChange={(e) => handleChange('item', e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="" disabled>Select The Item</option>
                                <option value="cash">Cash</option>
                                <option value="account">Account</option>
                                <option value="cheque">Cheque</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="unit" className="block text-gray-700 text-sm font-bold mb-2">
                                Unit:
                            </label>
                            <select
                                name="unit"
                                value={record.unit}
                                onChange={(e) => handleChange('unit', e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option>Select a Unit</option>
                                {units.map((unit, index) => (
                                    <option key={index} value={unit}>
                                        {unit}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="rate"
                                className="block text-sm font-semibold text-gray-600 mb-2">
                                Rate
                            </label>
                            <input
                                type="number"
                                name="rate"
                                placeholder="Enter The Rate"
                                onChange={(e) => handleChange('rate', e.target.value)}
                                className="border p-2 rounded w-full" />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="quantity"
                                className="block text-sm font-semibold text-gray-600 mb-2">
                                Quantity
                            </label>
                            <input
                                type="number"
                                name="quantity"
                                placeholder="Enter The Quantity"
                                onChange={(e) => handleChange('quantity', e.target.value)}
                                className="border p-2 rounded w-full" />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="amount"
                                className="block text-sm font-semibold text-gray-600 mb-2">
                                Amount
                            </label>
                            <input
                                type="number"
                                name="amount"
                                placeholder="Enter The Amount"
                                onChange={(e) => handleChange('amount', e.target.value)}
                                className="border p-2 rounded w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="paymentMode" className="block text-gray-700 text-sm font-bold mb-2">
                                Payment Mode:
                            </label>
                            <select
                                name="paymentMode"
                                value={record.paymentMode}
                                onChange={(e) => handleChange('paymentMode', e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option>Select The Mode of Payment</option>
                                {paymentmode.map((mode, index) => (
                                    <option key={index} value={mode}>
                                        {mode}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">
                                Payment Status:
                            </label>
                            <select
                                name="status"
                                value={record.status}
                                onChange={(e) => handleChange('status', e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option>Select a Payment Status</option>
                                {paymentStatus.map((status, index) => (
                                    <option key={index} value={status}>
                                        {status}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </>
                )
                break;

            case 'Investment':
                return (
                    <>
                        <div className="mb-4">
                            <label
                                htmlFor="item"
                                className="block text-sm font-semibold text-gray-600 mb-2">
                                Description
                            </label>
                            <input
                                type="text"
                                name="item"
                                placeholder="Enter the Investment description"
                                onChange={(e) => handleChange('item', e.target.value)}
                                className="border p-2 rounded w-full" />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="amount"
                                className="block text-sm font-semibold text-gray-600 mb-2">
                                Amount
                            </label>
                            <input
                                type="number"
                                name="amount"
                                placeholder="Enter The Amount"
                                onChange={(e) => handleChange('amount', e.target.value)}
                                className="border p-2 rounded w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="paymentMode" className="block text-gray-700 text-sm font-bold mb-2">
                                Payment Mode:
                            </label>
                            <select
                                name="paymentMode"
                                value={record.paymentMode}
                                onChange={(e) => handleChange('paymentMode', e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option>Select The Mode of Payment</option>
                                {paymentmode.map((mode, index) => (
                                    <option key={index} value={mode}>
                                        {mode}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </>
                )
                break;

            case 'Expenses':
                return (
                    <>
                        <div className="mb-4">
                            <label
                                htmlFor="item"
                                className="block text-sm font-semibold text-gray-600 mb-2">
                                Purpose of Expenses
                            </label>
                            <select
                                name="item"
                                value={record.item}
                                onChange={(e) => handleChange('item', e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="" disabled>Select The Purpose of Expenses</option>
                                <option value="cash">Cash</option>
                                <option value="account">Account</option>
                                <option value="cheque">Cheque</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="paymentTo"
                                className="block text-sm font-semibold text-gray-600 mb-2">
                                Expense By
                            </label>
                            <select
                                name="paymentTo"
                                onChange={(e) => handleChange('paymentTo', e.target.value)}
                                value={record.paymentTo}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option value="" disabled>Expense By</option>
                                <option value="cash">Cash</option>
                                <option value="account">Account</option>
                                <option value="cheque">Cheque</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="unit" className="block text-gray-700 text-sm font-bold mb-2">
                                Unit:
                            </label>
                            <select
                                name="unit"
                                value={record.unit}
                                onChange={(e) => handleChange('unit', e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option>Select a Unit</option>
                                {units.map((unit, index) => (
                                    <option key={index} value={unit}>
                                        {unit}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="rate"
                                className="block text-sm font-semibold text-gray-600 mb-2">
                                Rate
                            </label>
                            <input
                                type="number"
                                name="rate"
                                placeholder="Enter The Rate"
                                onChange={(e) => handleChange('rate', e.target.value)}
                                className="border p-2 rounded w-full" />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="quantity"
                                className="block text-sm font-semibold text-gray-600 mb-2">
                                Quantity
                            </label>
                            <input
                                type="number"
                                name="quantity"
                                placeholder="Enter The Quantity"
                                onChange={(e) => handleChange('quantity', e.target.value)}
                                className="border p-2 rounded w-full" />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="amount"
                                className="block text-sm font-semibold text-gray-600 mb-2">
                                Amount
                            </label>
                            <input
                                type="number"
                                name="amount"
                                placeholder="Enter The Amount"
                                onChange={(e) => handleChange('amount', e.target.value)}
                                className="border p-2 rounded w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">
                                Payment Status:
                            </label>
                            <select
                                name="status"
                                value={record.status}
                                onChange={(e) => handleChange('status', e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option>Select a Payment Status</option>
                                {paymentStatus.map((status, index) => (
                                    <option key={index} value={status}>
                                        {status}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="paymentMode" className="block text-gray-700 text-sm font-bold mb-2">
                                Payment Mode:
                            </label>
                            <select
                                name="paymentMode"
                                value={record.paymentMode}
                                onChange={(e) => handleChange('paymentMode', e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                                <option>Select The Mode of Payment</option>
                                {paymentmode.map((mode, index) => (
                                    <option key={index} value={mode}>
                                        {mode}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </>
                )
                break;

            default:
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userid !== '') {
            console.log(userid)
        } else {
            console.log(record)
        }
    }

    return (
        <div className='m-1.5 md:m-6 p-4 min-w-screen min-h-screen md:p-8 bg-white rounded-3xl'>
            <Header category="Page" title="Record Inventory" />
            <section className='container mx-auto mt-4 mb-16'>
                <form className="max-w-md mx-auto" onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label
                            htmlFor="purpose"
                            className="block text-sm font-semibold text-gray-600 mb-2">
                            Purpose
                        </label>
                        <select
                            name="purpose"
                            value={record.recordFor || ""} // Ensure recordFor has a valid default value
                            onChange={(e) => handleChange("recordFor", e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="" disabled>
                                Select The Purpose
                            </option>
                            {recordFor.map((item, index) => (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>{RecordFor(record.recordFor)}</div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-500 mt-4 text-white px-3 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300" >
                            Add Expenses
                        </button>
                    </div>

                </form>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </section>
        </div>
    )
}

export default RecordInventory