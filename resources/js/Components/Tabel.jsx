import React, { useState } from 'react';

const data = [
  { name: 'John Doe', position: 'Manager', office: 'New York', age: 30, startDate: '2021-01-01', salary: '$5000' },
  { name: 'agung', position: 'fullstack', office: 'New York', age: 21, startDate: '2021-01-01', salary: '$5000' },
  { name: 'adrian', position: 'front end', office: 'New York', age: 20, startDate: '2021-01-01', salary: '$5000' },
  { name: 'Joe', position: 'back end', office: 'New York', age: 32, startDate: '2021-01-01', salary: '$5000' },
  { name: 'Niko', position: 'cooking', office: 'New York', age: 10, startDate: '2021-01-01', salary: '$5000' },
  { name: 'Billy', position: 'helper', office: 'New York', age: 24, startDate: '2021-01-01', salary: '$5000' },
  { name: 'John Doe', position: 'Manager', office: 'New York', age: 23, startDate: '2021-01-01', salary: '$5000' },
  { name: 'Julius', position: 'operation', office: 'New York', age: 22, startDate: '2021-01-01', salary: '$5000' },
  { name: 'Dahnu', position: 'DPR', office: 'New York', age: 30, startDate: '2021-01-01', salary: '$5000' },
  // Tambahkan data lainnya di sini
];

const Table = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterColumn, setFilterColumn] = useState('name');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleSearch = e => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleFilter = e => {
    setFilterColumn(e.target.value);
    setCurrentPage(1);
  };

  const filteredData = data.filter(item => {
    const columnValue = item[filterColumn];
    if (typeof columnValue === 'string') {
      return columnValue.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (typeof columnValue === 'number') {
      return columnValue.toString().includes(searchTerm.toLowerCase());
    }
    return false;
  });
  
  

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-semibold">Tabel Data</h2>
          <div className="flex">
            <input
              type="text"
              placeholder="Cari..."
              className="px-2 py-1 border border-gray-300 rounded-md"
              value={searchTerm}
              onChange={handleSearch}
            />
            <select
              className="ml-2 px-2 py-1 border border-gray-300 rounded-md"
              value={filterColumn}
              onChange={handleFilter}
            >
              <option value="name">Name</option>
              <option value="position">Position</option>
              <option value="office">Office</option>
              <option value="age">Age</option>
              <option value="startDate">Start Date</option>
              <option value="salary">Salary</option>
            </select>
          </div>
        </div>
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Position</th>
              <th className="py-3 px-4">Office</th>
              <th className="py-3 px-4">Age</th>
              <th className="py-3 px-4">Start Date</th>
              <th className="py-3 px-4">Salary</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index} className="bg-white border-b border-gray-200 text-gray-800">
                <td className="py-3 px-4">{item.name}</td>
                <td className="py-3 px-4">{item.position}</td>
                <td className="py-3 px-4">{item.office}</td>
                <td className="py-3 px-4">{item.age}</td>
                <td className="py-3 px-4">{item.startDate}</td>
                <td className="py-3 px-4">{item.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between p-4">
          <div className="text-sm text-gray-600">
            Halaman {currentPage} dari {totalPages}
          </div>
          <div>
            <button
              className="px-3 py-1 border border-gray-300 rounded-md mr-2"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Sebelumnya
            </button>
            <button
              className="px-3 py-1 border border-gray-300 rounded-md"
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
