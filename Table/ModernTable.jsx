import React, { useState } from "react";

const sampleData = [
    { id: 1, name: "Apple iMac 27\"", category: "PC", brand: "Apple", quantity: 300, price: 2999 },
    { id: 2, name: "Apple iMac 20\"", category: "PC", brand: "Apple", quantity: 200, price: 1499 },
    { id: 3, name: "Apple iPhone 14", category: "Phone", brand: "Apple", quantity: 1237, price: 999 },
    { id: 4, name: "Apple iPad Air", category: "Tablet", brand: "Apple", quantity: 4578, price: 1199 },
    { id: 5, name: "Xbox Series S", category: "Gaming/Console", brand: "Microsoft", quantity: 56, price: 299 },
    { id: 6, name: "PlayStation 5", category: "Gaming/Console", brand: "Sony", quantity: 78, price: 799 },
    { id: 7, name: "Xbox Series X", category: "Gaming/Console", brand: "Microsoft", quantity: 200, price: 699 },
    { id: 8, name: "Apple Watch SE", category: "Watch", brand: "Apple", quantity: 657, price: 399 },
    { id: 9, name: "NIKON D850", category: "Photo", brand: "Nikon", quantity: 465, price: 599 },
    { id: 10, name: "Monitor BenQ EX2710Q", category: "TV/Monitor", brand: "BenQ", quantity: 354, price: 499 },
];

const ModernTable = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState(sampleData);
    const [filters, setFilters] = useState({ category: "", brand: "" }); // State for selected filters
    const [isFilterOpen, setIsFilterOpen] = useState(false); // Filter dropdown/modal visibility
    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    // Filter data based on search and filters
    const filteredData = data.filter(
        (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) &&
            (filters.category ? item.category === filters.category : true) &&
            (filters.brand ? item.brand === filters.brand : true)
    );

    const sortedData = [...filteredData].sort((a, b) => {
        if (sortConfig.key) {
            const valueA = a[sortConfig.key];
            const valueB = b[sortConfig.key];

            if (typeof valueA === "string" && typeof valueB === "string") {
                return sortConfig.direction === "asc"
                    ? valueA.localeCompare(valueB)
                    : valueB.localeCompare(valueA);
            }

            return sortConfig.direction === "asc" ? valueA - valueB : valueB - valueA;
        }
        return 0;
    });

    // Pagination logic
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    // Sorting handler
    const handleSort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        } else if (sortConfig.key === key && sortConfig.direction === "desc") {
            direction = null;
        }
        setSortConfig({ key, direction });
    };


    // Handle applying filters
    const applyFilter = (newFilters) => {
        setFilters(newFilters);
        setIsFilterOpen(false);
    };

    return (
        <div className="p-4">
            {/* Header with Search and Actions */}
            <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4">
                {/* Search Input */}
                <input
                    type="text"
                    className="p-2 border rounded w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {/* Action Buttons */}
                <div className="flex gap-2">
                    <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                        + Add Product
                    </button>
                    {/* <button className="bg-gray-200 text-gray-700 p-2 rounded hover:bg-gray-300">
            Sort
          </button> */}
                    <button
                        className="bg-gray-200 text-gray-700 p-2 rounded hover:bg-gray-300"
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                    >
                        Filter
                    </button>
                </div>
            </div>

            {/* Filter Dropdown */}
            {isFilterOpen && (
                <div className="mb-4 bg-white border rounded shadow-lg p-4 w-full sm:w-1/3">
                    <h3 className="font-semibold mb-2">Filter Options</h3>
                    <div className="mb-2">
                        <label className="block text-sm font-medium mb-1">Category:</label>
                        <select
                            className="p-2 border rounded w-full focus:outline-none"
                            value={filters.category}
                            onChange={(e) =>
                                setFilters({ ...filters, category: e.target.value })
                            }
                        >
                            <option value="">All Categories</option>
                            <option value="PC">PC</option>
                            <option value="Phone">Phone</option>
                            <option value="Tablet">Tablet</option>
                            <option value="Gaming/Console">Gaming/Console</option>
                            <option value="Watch">Watch</option>
                            <option value="Photo">Photo</option>
                            <option value="TV/Monitor">TV/Monitor</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium mb-1">Brand:</label>
                        <select
                            className="p-2 border rounded w-full focus:outline-none"
                            value={filters.brand}
                            onChange={(e) =>
                                setFilters({ ...filters, brand: e.target.value })
                            }
                        >
                            <option value="">All Brands</option>
                            <option value="Apple">Apple</option>
                            <option value="Microsoft">Microsoft</option>
                            <option value="Sony">Sony</option>
                            <option value="Nikon">Nikon</option>
                            <option value="BenQ">BenQ</option>
                        </select>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            className="p-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                            onClick={() => setFilters({ category: "", brand: "" })}
                        >
                            Clear
                        </button>
                        <button
                            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={() => applyFilter(filters)}
                        >
                            Apply
                        </button>
                    </div>
                </div>
            )}

            {/* Table */}
            <div className="overflow-x-auto rounded-lg shadow-lg">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th
                                className="p-3 text-left font-semibold cursor-pointer"
                                onClick={() => handleSort("name")}
                            >
                                PRODUCT NAME
                                {sortConfig.key === "name" &&
                                    (sortConfig.direction === "asc"
                                        ? " ▲"
                                        : sortConfig.direction === "desc"
                                            ? " ▼"
                                            : "")}
                            </th>
                            <th
                                className="p-3 text-left font-semibold cursor-pointer"
                                onClick={() => handleSort("category")}
                            >
                                CATEGORY
                                {sortConfig.key === "category" &&
                                    (sortConfig.direction === "asc"
                                        ? " ▲"
                                        : sortConfig.direction === "desc"
                                            ? " ▼"
                                            : "")}
                            </th>
                            <th
                                className="p-3 text-left font-semibold cursor-pointer"
                                onClick={() => handleSort("brand")}
                            >
                                BRAND
                                {sortConfig.key === "brand" &&
                                    (sortConfig.direction === "asc"
                                        ? " ▲"
                                        : sortConfig.direction === "desc"
                                            ? " ▼"
                                            : "")}
                            </th>
                            <th
                                className="p-3 text-left font-semibold cursor-pointer"
                                onClick={() => handleSort("quantity")}
                            >
                                QUANTITY
                                {sortConfig.key === "quantity" &&
                                    (sortConfig.direction === "asc"
                                        ? " ▲"
                                        : sortConfig.direction === "desc"
                                            ? " ▼"
                                            : "")}
                            </th>
                            <th
                                className="p-3 text-left font-semibold cursor-pointer"
                                onClick={() => handleSort("price")}
                            >
                                PRICE
                                {sortConfig.key === "price" &&
                                    (sortConfig.direction === "asc"
                                        ? " ▲"
                                        : sortConfig.direction === "desc"
                                            ? " ▼"
                                            : "")}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <tr
                                    key={item.id}
                                    className="hover:bg-gray-50 border-b transition duration-150"
                                >
                                    <td className="p-3">{item.name}</td>
                                    <td className="p-3">{item.category}</td>
                                    <td className="p-3">{item.brand}</td>
                                    <td className="p-3">{item.quantity}</td>
                                    <td className="p-3">${item.price}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center p-3 text-gray-500">
                                    No matching data found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between items-center mt-4">
                <button
                    className="p-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                    Previous
                </button>
                <div className="text-gray-700">
                    Page {currentPage} of {totalPages}
                </div>
                <button
                    className="p-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ModernTable;
