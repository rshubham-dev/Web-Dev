import React, { useState } from 'react';
import { useTable, useSortBy, usePagination, useGlobalFilter, useRowSelect } from 'react-table';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

// Mock Data (replace with your actual data)
const data = [
  { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 32, email: 'jane@example.com' },
  { id: 3, name: 'Michael Brown', age: 45, email: 'michael@example.com' },
  { id: 6, name: 'Michael Brown', age: 45, email: 'michael@example.com' },
  { id: 4, name: 'Emily Davis', age: 29, email: 'emily@example.com' },
  { id: 5, name: 'Chris Johnson', age: 35, email: 'chris@example.com' },
  { id: 8, name: 'John Doe', age: 28, email: 'john@example.com' },
  { id: 7, name: 'Jane Smith', age: 32, email: 'jane@example.com' },
  { id: 9, name: 'Michael Brown', age: 45, email: 'michael@example.com' },
  { id: 15, name: 'Michael Brown', age: 45, email: 'michael@example.com' },
  { id: 10, name: 'Emily Davis', age: 29, email: 'emily@example.com' },
  { id: 12, name: 'Chris Johnson', age: 35, email: 'chris@example.com' },
  { id: 11, name: 'John Doe', age: 28, email: 'john@example.com' },
  { id: 14, name: 'Jane Smith', age: 32, email: 'jane@example.com' },
  { id: 16, name: 'Jane Smith', age: 32, email: 'jane@example.com' },
  { id: 13, name: 'Michael Brown', age: 45, email: 'michael@example.com' },
  { id: 18, name: 'Emily Davis', age: 29, email: 'emily@example.com' },
  { id: 17, name: 'Emily Davis', age: 29, email: 'emily@example.com' },
  { id: 19, name: 'Chris Johnson', age: 35, email: 'chris@example.com' },
  { id: 20, name: 'Chris Johnson', age: 35, email: 'chris@example.com' },
  { id: 21, name: 'Chris Johnson', age: 35, email: 'chris@example.com' },
  // More rows
];

// Column Definitions
const columns = [
  { Header: 'ID', accessor: 'id' },
  { Header: 'Name', accessor: 'name' },
  { Header: 'Age', accessor: 'age' },
  { Header: 'Email', accessor: 'email' },
  {
    Header: 'Actions',
    Cell: ({ row }) => (
      <div className="flex space-x-2">
        <button className="text-blue-500 hover:text-blue-700">
          <FaEdit />
        </button>
        <button className="text-red-500 hover:text-red-700">
          <FaTrash />
        </button>
      </div>
    ),
  },
];

const Table = () => {
  const [searchInput, setSearchInput] = useState('');

  // Table setup
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { pageIndex, pageSize },
    canNextPage,
    canPreviousPage,
    page,
    gotoPage,
    setPageSize,
    setGlobalFilter,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    useGlobalFilter, // Keep the global filter hook for search functionality
    useSortBy,
    usePagination,
    useRowSelect
  );

  // Handle Search
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    setGlobalFilter(e.target.value || undefined);
  };

  return (
    <div className="container overflow-x-auto mx-auto p-4">
      <div className="flex justify-between mb-4 flex-wrap">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <button
            onClick={() => alert('Open Add Modal')}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Add New
          </button>
          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={handleSearchChange}
            className="px-4 py-2 border rounded-md w-56"
          />
        </div>
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <span>Page {pageIndex + 1} of {Math.ceil(rows.length / pageSize)}</span>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
            className="px-4 py-2 border rounded-md"
          >
            {[5, 10, 15, 20].map((size) => (
              <option key={size} value={size}>
                Show {size}
              </option>
            ))}
          </select>
        </div>
      </div>

      <table {...getTableProps()} className="min-w-full table-auto border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider"
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()} className="divide-y divide-gray-200">
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id} className="hover:bg-gray-50">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
          >
            {'<<'}
          </button>
          <button
            onClick={() => gotoPage(pageIndex - 1)}
            disabled={!canPreviousPage}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
          >
            {'<'}
          </button>
          <button
            onClick={() => gotoPage(pageIndex + 1)}
            disabled={!canNextPage}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
          >
            {'>'}
          </button>
          <button
            onClick={() => gotoPage(Math.ceil(rows.length / pageSize) - 1)}
            disabled={!canNextPage}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
          >
            {'>>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
