import React, { useState, useMemo } from "react";
import { FaSort, FaSortUp, FaSortDown, FaTrash, FaPlus } from "react-icons/fa";

const data = [
  { id: 1, name: "John Doe", age: 28, email: "john@example.com" },
  { id: 2, name: "Jane Smith", age: 32, email: "jane@example.com" },
  { id: 3, name: "Alice Johnson", age: 24, email: "alice@example.com" },
  { id: 4, name: "Bob Brown", age: 35, email: "bob@example.com" },
];

const ReactTable = () => {
  const [tableData, setTableData] = useState(data);
  const [search, setSearch] = useState("");
  const [sortConfig, setSortConfig] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const customSort = (a, b, key, direction) => {
    // Custom logic for sorting specific columns
    if (key === "name") {
      // Sort names by length first, then alphabetically
      if (a[key].length !== b[key].length) {
        return direction === "ascending"
          ? a[key].length - b[key].length
          : b[key].length - a[key].length;
      }
      return direction === "ascending"
        ? a[key].localeCompare(b[key])
        : b[key].localeCompare(a[key]);
    } else if (key === "age") {
      // Sort age in ascending or descending order
      return direction === "ascending" ? a[key] - b[key] : b[key] - a[key];
    } else if (key === "email") {
      // Sort email alphabetically (case-insensitive)
      return direction === "ascending"
        ? a[key].localeCompare(b[key], undefined, { sensitivity: "base" })
        : b[key].localeCompare(a[key], undefined, { sensitivity: "base" });
    }
    return 0;
  };

  const sortedData = useMemo(() => {
    let sortableData = [...tableData];
    if (sortConfig !== null) {
      const { key, direction } = sortConfig;
      sortableData.sort((a, b) => customSort(a, b, key, direction));
    }
    return sortableData;
  }, [tableData, sortConfig]);

  const filteredData = sortedData.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase())
  );

  const currentData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const handleDelete = (id) => {
    setTableData(tableData.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    const newData = { id: Date.now(), name: "", age: 0, email: "" };
    setTableData([newData, ...tableData]);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Search and Add Button */}
      <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4">
        <input
          type="text"
          className="p-2 border rounded w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="p-2 bg-blue-500 text-white rounded flex items-center justify-center gap-2 hover:bg-blue-600"
          onClick={handleAdd}
        >
          <FaPlus /> Add
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th
                className="p-3 text-left font-semibold cursor-pointer select-none"
                onClick={() => handleSort("name")}
              >
                Name{" "}
                <SortIcon
                  direction={sortConfig?.key === "name" ? sortConfig.direction : null}
                />
              </th>
              <th
                className="p-3 text-left font-semibold cursor-pointer select-none"
                onClick={() => handleSort("age")}
              >
                Age{" "}
                <SortIcon
                  direction={sortConfig?.key === "age" ? sortConfig.direction : null}
                />
              </th>
              <th
                className="p-3 text-left font-semibold cursor-pointer select-none"
                onClick={() => handleSort("email")}
              >
                Email{" "}
                <SortIcon
                  direction={sortConfig?.key === "email" ? sortConfig.direction : null}
                />
              </th>
              <th className="p-3 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50 border-b transition duration-150"
              >
                <td className="p-3">
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) =>
                      setTableData(
                        tableData.map((row) =>
                          row.id === item.id ? { ...row, name: e.target.value } : row
                        )
                      )
                    }
                    className="w-full p-1 border rounded focus:outline-none"
                  />
                </td>
                <td className="p-3">
                  <input
                    type="number"
                    value={item.age}
                    onChange={(e) =>
                      setTableData(
                        tableData.map((row) =>
                          row.id === item.id ? { ...row, age: e.target.value } : row
                        )
                      )
                    }
                    className="w-full p-1 border rounded focus:outline-none"
                  />
                </td>
                <td className="p-3">
                  <input
                    type="email"
                    value={item.email}
                    onChange={(e) =>
                      setTableData(
                        tableData.map((row) =>
                          row.id === item.id ? { ...row, email: e.target.value } : row
                        )
                      )
                    }
                    className="w-full p-1 border rounded focus:outline-none"
                  />
                </td>
                <td className="p-3">
                  <button
                    className="p-2 text-red-500 hover:bg-red-100 rounded"
                    onClick={() => handleDelete(item.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          className="p-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {Math.ceil(filteredData.length / rowsPerPage)}
        </span>
        <button
          className="p-2 bg-gray-300 rounded hover:bg-gray-400"
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, Math.ceil(filteredData.length / rowsPerPage))
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

const SortIcon = ({ direction }) => {
  if (!direction) return <FaSort className="inline-block ml-1 text-gray-400" />;
  if (direction === "ascending")
    return <FaSortUp className="inline-block ml-1 text-gray-600" />;
  return <FaSortDown className="inline-block ml-1 text-gray-600" />;
};

export default ReactTable